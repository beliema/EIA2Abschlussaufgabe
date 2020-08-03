var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var AS_Zauberbild;
(function (AS_Zauberbild) {
    let url;
    let title;
    AS_Zauberbild.shapes = [];
    //Funktion, zum speichern der Canvas-Eigenschaften
    function saveImage(_title) {
        let information = [];
        for (let shape of AS_Zauberbild.shapes) {
            let element = {
                "position": shape.position,
                "rotation": shape.rotation,
                "velocity": shape.velocity,
            };
            information.push(element);
        }
        sendData(information, _title);
    }
    AS_Zauberbild.saveImage = saveImage;
    //Funktionen die die Daten an die MongoDB schickt
    function sendData(_infos, _title) {
        return __awaiter(this, void 0, void 0, function* () {
            let width = AS_Zauberbild.canvas.width.toString();
            let height = AS_Zauberbild.canvas.height.toString();
            let canvasinfo = [width, height];
            let canvasjsn = JSON.stringify(canvasinfo);
            let canvasquery = new URLSearchParams(canvasjsn);
            let infos = JSON.stringify(_infos); // in JSON String umwandeln, um für Server lesbar zu machen
            let query = new URLSearchParams(infos);
            let response = yield fetch(url + "?savePicture" + query.toString() + "&" + canvasquery.toString());
            yield fetch(url + "?insertName&" + _title);
            let responsetext = yield response.text();
            console.log(responsetext);
            alert("Bild wurde gespeichert");
        });
    }
    // Funktion, die die Bilder aus der Datenbank findet
    /* export async function loadPic(_title: string): Promise<void> {
        symbols = [];
        let name: string = list.value;
        let response: Response = await fetch(url + "findPicture&" + name);
        let text: string = await response.text();
        console.log(text);
        let replace: string = text.replace(/\\|\[|{|}|"|_id|savePicture|]/g, "");
        let removetitle: string = replace.replace(name, "");
        let correction: string = removetitle.replace(/,,,/g, "");
        let removekeys: string = correction.replace(/position:|color:|rotation:|velocity:|active:/g, "");
        let data: string[] = removekeys.split(",");
        console.log(data);

        canvas.width = parseInt(data[1]);
        canvas.height = parseInt(data[2]);
        data.splice(0, 6);

        let info: string[] = [];
        for (let i: number = 0; i < data.length; i++) {
            switch (data[i]) {
                case "Star":
                    let positionStar: Vector = new Vector(parseInt(info[1]), parseInt(info[2]));
                    let star: Star = new Star(positionStar);
                    star.draw(cxt);
                    Shape.push(star);
                    info = [];
                    break;
                case "Heart":
                    let positionHeart: Vector = new Vector(parseInt(info[1]), parseInt(info[2]));
                    let heart: Heart = new Heart(positionHeart);
                    heart.draw(cxt);
                    symbols.push(heart);
                    info = [];
                    break;
                case "Moon":
                    let positionMoon: Vector = new Vector(parseInt(info[1]), parseInt(info[2]));
                    let moon: Heart = new Heart(positionMoon);
                    moon.draw(cxt);
                    symbols.push(moon);
                    info = [];
                    break;
                case "Flash":
                    let positionFlash: Vector = new Vector(parseInt(info[1]), parseInt(info[2]));
                    let flash: Heart = new Heart(positionFlash);
                    flash.draw(cxt);
                    symbols.push(flash);
                    info = [];
                    break;
            }
        }
    } */
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=connectDatabase.js.map