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
const Http = require("http"); //Importieremir alles auf dem Modul HTTP und setze es in den Code 
const Url = require("url");
// Module von Node, da kein HTML-File vorhanden über das andere Skripe eingelenkt werden können
// 
var AS_Zauberbild;
(function (AS_Zauberbild) {
    console.log("Server Test");
    //AD: Open Port 
    let port = process.env.PORT; // process liefert Port 
    // if (port == undefined)
    //  port = 5001;
    startServer(port);
    function startServer(_port) {
        return __awaiter(this, void 0, void 0, function* () {
            //AD: create Server
            let server = Http.createServer();
            console.log("Server starting on port:" + _port);
            //AD: Add RequestListener 
            server.listen(_port);
            server.addListener("request", handleRequest);
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
            }
            //AD send response 
            _response.end();
        });
    }
})(AS_Zauberbild = exports.AS_Zauberbild || (exports.AS_Zauberbild = {}));
//# sourceMappingURL=Server.js.map