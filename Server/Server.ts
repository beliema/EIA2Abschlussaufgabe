 import * as Http from "http"; //Importiere mir alles auf dem Modul HTTP und setze es in den Code 
 import * as Url from "url"; 
 import * as Mongo from "mongodb";

// Module von Node, da kein HTML-File vorhanden über das andere Skripe eingelenkt werden können
// 

export namespace AS_Zauberbild { 
    console.log("Server Test"); 

    interface savedPicture {
        [type: string]: string | string[];
    }

    //AD: Open Port 
    let port: number | string | undefined = process.env.PORT; // process liefert Port 
    // if (port == undefined)
       //  port = 5001;

    let savedpictures: Mongo.Collection; //Variable, die auf die Collections verweisen soll mit der gearbeitet wird 
    let databaseUrl: string = "mongodb://localhost:27017";
    startServer(port);
    connectToDatabase(databaseUrl);


    async function startServer(_port: number | string): Promise<void> { // asynchrone Funktion, die Portt entgegen nehmen soll 
        //AD: create Server
        let server: Http.Server = Http.createServer();
        console.log("Server wird auf Port" + _port + "gestartet");

        //AD: Add RequestListener 
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
 
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true}; // mit diesen beiden Optionen Verbindung zur DB herstellen
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options); // Client erzeugt 
        //Aufbau Verbindung 
        await mongoClient.connect();
        //Wert für savedpictures definieren 
        savedpictures = mongoClient.db("zauberbildDB").collection("savedpictures"); // Client wird gesagt: gehe in die Datenbank zauberbilddb und hole dir da die collection savedpictures 
        console.log("Database connection ", savedpictures != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("handleRequest funktioniert"); 


        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) { //Ist URL, die bearbeitet werden kann? 
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //Übersetzung des URl mit Parse: Parse interpretiert URL und erzeugt neues Objekt, dessen Eigenschaft Query wieder ein assoz. Array darstellt (mit true)
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }

            //AD: fill response 
            let jsonString: string = JSON.stringify(url.query); 
            _response.write(jsonString);

            storeSavedPictures(url.query); 
        }
        //AD send response 
        _response.end();
    }

    function storeSavedPictures(_savedpictures: savedPicture ): void {
        savedpictures.insert(_savedpictures);
    }
}

//URI = unified ressource identifier 