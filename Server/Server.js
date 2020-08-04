"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //Importiere mir alles auf dem Modul HTTP und setze es in den Code 
const Url = require("url");
const Mongo = require("mongodb");
// Module von Node, da kein HTML-File vorhanden über das andere Skript eingelenkt werden können
var AS_Zauberbild;
(function (AS_Zauberbild) {
    console.log("Server läuft");
    /* interface savedPicture {
         [type: string]: string | string[];
     }*/
    //AD: Open Port 
    let port = process.env.PORT; // process liefert Port 
    if (port == undefined)
        port = 5001;
    let savedpictures; //Variable, die auf die Collections verweisen soll mit der gearbeitet wird 
    let mongoClient;
    let options;
    let allpictures = [];
    let databaseUrl = "mongodb+srv://beliema:<Wandalo2->@eia2-ejwj9.mongodb.net/<zauberbildDB>?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        //AD: create Server
        let server = Http.createServer(); //Erstellen von Server
        console.log("Server wird auf Port" + _port + "gestartet");
        //AD: Add RequestListener 
        server.listen(_port); //Port,auf den Server hört
        server.addListener("request", handleRequest);
    }
    //Funktion um Verbindung mit Datenbank herzustellen 
    function connectToDatabase(_url) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = { useNewUrlParser: true, useUnifiedTopology: true }; // mit diesen beiden Optionen Verbindung zur DB herstellen
            let mongoClient = new Mongo.MongoClient(_url, options); // Client erzeugt 
            //Aufbau Verbindung 
            yield mongoClient.connect();
            //Wert für savedpictures definieren 
            savedpictures = mongoClient.db("zauberbildDB").collection("savedpictures"); // Client wird gesagt: gehe in die Datenbank zauberbilddb und hole dir da die collection savedpictures 
            console.log("Database connection ", savedpictures != undefined);
        });
    }
    function handleRequest(_request, _response) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("handleRequest funktioniert");
            console.log(_request.url);
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            if (_request.url) { //Ist URL, die bearbeitet werden kann? 
                let url = Url.parse(_request.url, true); //Übersetzung des URl mit Parse: Parse interpretiert URL und erzeugt neues Objekt, dessen Eigenschaft Query wieder ein assoz. Array darstellt (mit true)
                let spliturl = _request.url.split("&"); //Aufteilung der URl 
                if (spliturl[0] == "/?saveImage") {
                    let savedpictures = mongoClient.db("Album").collection("Pictures");
                    yield savedpictures.insertOne(url.query);
                    let jsonString = JSON.stringify(allpictures);
                    // orders = mongoClient.db("Album").collection("Pictures");
                    // await (orders).insertOne(url.query);
                    _response.write(jsonString);
                    allpictures = [];
                }
                if (spliturl[0] == "/?getImage") {
                    let savedpicture = mongoClient.db("Album").collection(spliturl[1]);
                    yield savedpicture.forEach(showPicture);
                    let jsonString = JSON.stringify(allpictures);
                    jsonString.toString();
                    // let answer: string = jsonString.toString();
                    _response.write(jsonString); //Ausgeben des JSON-Strings
                    allpictures = [];
                }
                if (spliturl[0] == "/?insertName") {
                    let pictures = mongoClient.db("zauberbildDB").collection("savedpictures");
                    yield pictures.insertOne(url.query);
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
        });
    }
    function storeSavedPictures(_savedpictures) {
        savedpictures.insert(_savedpictures);
    }
    function showPicture(_item) {
        for (let key in _item) {
            allpictures.push(key);
        }
    }
    //Funktion: Daten aus der Datenbank auslesen 
    function receiveSavedPictures(_response) {
        // err = error
        savedpictures.find({}).toArray(function (err, result) {
            // gespeichertes Bild finden und in den Array pushen, bei Fehler passiert nichts/bzw es wird nicht hinzugefügt 
            _response.write("vor error");
            if (err)
                throw err;
            _response.write(result);
        });
    }
})(AS_Zauberbild = exports.AS_Zauberbild || (exports.AS_Zauberbild = {}));
//URI = unified ressource identifier 
//# sourceMappingURL=Server.js.map