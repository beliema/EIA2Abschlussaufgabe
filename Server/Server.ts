 import * as Http from "http"; //Importiere mir alles auf dem Modul HTTP und setze es in den Code 
 import * as Url from "url"; 
 import * as Mongo from "mongodb";

// Module von Node, da kein HTML-File vorhanden über das andere Skripe eingelenkt werden können
// 

export namespace AS_Zauberbild { 
    console.log("Server Test"); 

    //AD: Open Port 
    let port: number | string | undefined = process.env.PORT; // process liefert Port 
    // if (port == undefined)
       //  port = 5001;

    let savedpictures: Collection //Variable, die auf die Collections verweisen soll mit der gearbeitet wird 
    let databaseUrl: string = "mongodb://localhost:27017";
    startServer(port);
    connectToDatabase(databaseUrl);


    async function startServer(_port: number | string): Promise<void> {
        //AD: create Server
        let server: Http.Server = Http.createServer();
        console.log("Server starting on port:" + _port);

        //AD: Add RequestListener 
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
 
    async function connectToDatabase(_url: string): Promise<void> {
        let MongoClient = require('mongodb').MongoClient;
        let uri = "mongodb+srv://beliema:<Wandalo2->@eia2-ejwj9.mongodb.net/<zauberbildDB>?retryWrites=true&w=majority";
        let client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {
          let collection = client.db("test").collection("devices");
          // perform actions on the collection object
          client.close();
        });
        
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
        }
        //AD send response 
        _response.end();
    }
}