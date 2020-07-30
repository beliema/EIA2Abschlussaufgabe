 import * as Http from "http"; //Importieremir alles auf dem Modul HTTP und setze es in den Code 
 import * as Url from "url"; 

// Module von Node, da kein HTML-File vorhanden über das andere Skripe eingelenkt werden können
// 

export namespace AS_Zauberbild { 
    console.log("Server Test"); 

    //AD: Open Port 
    let port: number | string | undefined = process.env.PORT; // process liefert Port 
    // if (port == undefined)
       //  port = 5001;

    startServer(port);


    async function startServer(_port: number | string): Promise<void> {
        //AD: create Server
        let server: Http.Server = Http.createServer();
        console.log("Server starting on port:" + _port);

        //AD: Add RequestListener 
        server.listen(_port);
        server.addListener("request", handleRequest);
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