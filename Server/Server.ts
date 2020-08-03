 import * as Http from "http"; //Importiere mir alles auf dem Modul HTTP und setze es in den Code 
 import * as Url from "url"; 
 import * as Mongo from "mongodb";

// Module von Node, da kein HTML-File vorhanden über das andere Skript eingelenkt werden können


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
    let mongoClient: Mongo.MongoClient;
    let options: Mongo.MongoClientOptions;
    let allpictures: string[] = []; 
    let databaseUrl: string = "mongodb+srv://beliema:<Wandalo2->@eia2-ejwj9.mongodb.net/<zauberbildDB>?retryWrites=true&w=majority";
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
        console.log(_request.url); 

        if (_request.url) { //Ist URL, die bearbeitet werden kann? 
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //Übersetzung des URl mit Parse: Parse interpretiert URL und erzeugt neues Objekt, dessen Eigenschaft Query wieder ein assoz. Array darstellt (mit true)
            let spliturl: string[] = _request.url.split("&"); 

            if (spliturl[0] == "/?getPicture=yes") {
                let pictures: Mongo.Collection<any> = mongoClient.db("Album").collection("Pictures");
                let cursor: Mongo.Cursor<any> = await pictures.find();
                await cursor.forEach(showPicture);
                let jsonString: string = JSON.stringify(allpictures);
                // orders = mongoClient.db("Album").collection("Pictures");
                // await (orders).insertOne(url.query);
                _response.write(jsonString);
                allpictures = [];
            }


            if (spliturl[0] == "/?findPicture") {
                let picture: Mongo.Collection<any> = mongoClient.db("Album").collection(spliturl[1]);
                let cursor: Mongo.Cursor<any> = await picture.find();
                await cursor.forEach(showPicture);
                let jsonString: string = JSON.stringify(allpictures);
                let answer: string = jsonString.toString();
                _response.write(answer);
                allpictures = [];
            }

            if (spliturl[0] == "/?insertName") {
                let pictures = mongoClient.db("zauberbildDB").collection("savedpictures");
                await pictures.insertOne(url.query);
            }

            

            if (spliturl[0] == "/?savePicture") {
                let newCollection: Promise <Mongo.Collection<any>> = mongoClient.db("zauberbildDB").createCollection(spliturl[1]);
                await (await newCollection).insertOne(url.query); 
            }
            

           /* for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }

            //AD: fill response 
            let jsonString: string = JSON.stringify(url.query); 
            _response.write(jsonString);

            storeSavedPictures(url.query); */
        }
        //AD send response 
        _response.end();
    }

   /* function storeSavedPictures(_savedpictures: savedPicture ): void {
        savedpictures.insert(_savedpictures);
    } */ 


    function showPicture(_item: object): void {
        for (let key in _item) {
            allpictures.push(key);
        }
    }


    //Funktion: Daten aus der Datenbank auslesen 

    function readResponse(_response: Http.ServerResponse): void {
        // err = error
        CanvasCollection.find({}).toArray(function (err, result) {
            // Wenn Fehler passiert, diesen rausschmeißen
            _response.write("vor error");
            if (err) throw err;
            _response.write(result);
            
        });
    }


}

//URI = unified ressource identifier 