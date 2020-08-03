
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //Importiere mir alles auf dem Modul HTTP und setze es in den Code 
const Url = require("url");
const Mongo = require("mongodb");
// Module von Node, da kein HTML-File vorhanden über das andere Skripe eingelenkt werden können
// 
var AS_Zauberbild;
(function (AS_Zauberbild) {
    console.log("Server Test");
    //AD: Open Port 
    let port = process.env.PORT; // process liefert Port 
    // if (port == undefined)
    //  port = 5001;
    let savedpictures; //Variable, die auf die Collections verweisen soll mit der gearbeitet wird 
    let databaseUrl = "mongodb+srv://beliema:<Wandalo2->@eia2-ejwj9.mongodb.net/<zauberbildDB>?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        return __awaiter(this, void 0, void 0, function* () {
            //AD: create Server
            let server = Http.createServer();
            console.log("Server wird auf Port" + _port + "gestartet");
            //AD: Add RequestListener 
            server.listen(_port);
            server.addListener("request", handleRequest);
        });
    }
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
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            if (_request.url) { //Ist URL, die bearbeitet werden kann? 
                let url = Url.parse(_request.url, true); //Übersetzung des URl mit Parse: Parse interpretiert URL und erzeugt neues Objekt, dessen Eigenschaft Query wieder ein assoz. Array darstellt (mit true)
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
                //AD: fill response 
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                storeSavedPictures(url.query);
            }
            //AD send response 
            _response.end();
        });
    }
    function storeSavedPictures(_savedpictures) {
        savedpictures.insert(_savedpictures);
    }
})(AS_Zauberbild = exports.AS_Zauberbild || (exports.AS_Zauberbild = {}));
//URI = unified ressource identifier 
//# sourceMappingURL=Server.js.map