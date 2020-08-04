 import * as Http from "http"; //Importiere mir alles auf dem Modul HTTP und setze es in den Code 
 import * as Url from "url"; 
 import * as Mongo from "mongodb";

// Module von Node, da kein HTML-File vorhanden über das andere Skript eingelenkt werden können


export namespace AS_Zauberbild { 
    console.log("Server läuft"); 

   /* interface savedPicture {
        [type: string]: string | string[];
    }*/ 

    //AD: Open Port 
    let port: number | string | undefined = process.env.PORT; // process liefert Port 
    if (port == undefined)
         port = 5001;

    let savedpictures: Mongo.Collection; //Variable, die auf die Collections verweisen soll mit der gearbeitet wird 
    let mongoClient: Mongo.MongoClient;
    let options: Mongo.MongoClientOptions;
    let allpictures: string[] = []; 
    let databaseUrl: string = "mongodb+srv://beliema:<Wandalo2->@eia2-ejwj9.mongodb.net/<zauberbildDB>?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);


    function startServer(_port: number | string): void { // asynchrone Funktion, die Portt entgegen nehmen soll 
        //AD: create Server
        let server: Http.Server = Http.createServer(); //Erstellen von Server
        console.log("Server wird auf Port" + _port + "gestartet");

        //AD: Add RequestListener 
        server.listen(_port); //Port,auf den Server hört
        server.addListener("request", handleRequest);
    }

    //Funktion um Verbindung mit Datenbank herzustellen 
    async function connectToDatabase(_url: string): Promise<void> {
        let options = {useNewUrlParser: true, useUnifiedTopology: true}; // mit diesen beiden Optionen Verbindung zur DB herstellen
        let mongoClient = new Mongo.MongoClient(_url, options); // Client erzeugt 
        //Aufbau Verbindung 
        await mongoClient.connect();
        //Wert für savedpictures definieren 
        savedpictures = mongoClient.db("zauberbildDB").collection("savedpictures"); // Client wird gesagt: gehe in die Datenbank zauberbilddb und hole dir da die collection savedpictures 
        console.log("Database connection ", savedpictures != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("handleRequest funktioniert"); 
        console.log(_request.url); 


        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        

        if (_request.url) { //Ist URL, die bearbeitet werden kann? 
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //Übersetzung des URl mit Parse: Parse interpretiert URL und erzeugt neues Objekt, dessen Eigenschaft Query wieder ein assoz. Array darstellt (mit true)
            let spliturl: string[] = _request.url.split("&");  //Aufteilung der URl 

            if (spliturl[0] == "/?saveImage") {
                let savedpictures= mongoClient.db("zauberebildDB").collection("savedpictures"); // Zuordnnung der Daten an die Collection 
                await savedpictures.insertOne(url.query );
                //let jsonString: string = JSON.stringify(allpictures);
                // orders = mongoClient.db("Album").collection("Pictures");
                // await (orders).insertOne(url.query);
                _response.write("Dein Bild wurde gespeichert");
                allpictures = [];
            }


            if (spliturl[0] == "/?getImage") {

                let picture: Mongo.Cursor<any> = savedpictures.find({name: spliturl[1]});
                await picture.forEach(showSavedPictures);
                let jsonString: String = JSON.stringify(allpictures);
                jsonString.toString();

                _response.write(jsonString);
                allpictures = [];
                /*let savedpicture: Mongo.Collection<any> = mongoClient.db("zauberebildDB").collection(spliturl[1]);
                await savedpicture.forEach(showPicture);
                let jsonString: string = JSON.stringify(allpictures);
                jsonString.toString(); 
                // let answer: string = jsonString.toString();
                _response.write(jsonString); //Ausgeben des JSON-Strings
                allpictures = [];*/ 
            }

            if (spliturl[0] == "/?getTitles") {   //alle Titel aus Datenbank raussuchen

                let names: Mongo.Cursor<any> = savedpictures.find({}, {projection: {_id: 0, name: true}}); //Aufruf um an die Titel zu kommen
                await names.forEach(showSavedPictures); // Titel umschreiben in Jsonstring
                let jsonString: String = JSON.stringify(allpictures); //Array mit Titeln umschreiben
                jsonString.toString();

                
                                                          
                _response.write(jsonString);                                 
                _response.write(names.toString());
                allpictures = [];

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

    /* function storeSavedPictures(_savedpictures: allpictures ): void {
        savedpictures.insert(_savedpictures);
    } */ 


    function showPicture(_item: object): void {
        for (let key in _item) {
            allpictures.push(key);
        }
    }
    
    function showSavedPictures(_item: Object): void {
        let jsonString: string = JSON.stringify(_item);    
        allpictures.push(jsonString); //titel ins Array reinpushen
        }


    //Funktion: Daten aus der Datenbank auslesen 

    function receiveSavedPictures(_response: Http.ServerResponse): void {
        // err = error
        savedpictures.find({}).toArray(function (err: any, result: any) {
            // gespeichertes Bild finden und in den Array pushen, bei Fehler passiert nichts/bzw es wird nicht hinzugefügt 
            _response.write("vor error");
            if (err) throw err;
            _response.write(result);
            
        });
    }


}

//URI = unified ressource identifier 