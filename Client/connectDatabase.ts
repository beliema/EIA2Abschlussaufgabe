namespace AS_Zauberbild { 
    let url: "https://zauberbildabschluss.herokuapp.com"; 
    let title: string []; 
    export let canvas: HTMLCanvasElement; 
    export let shapes: Shape[] = [];


    export interface Image { 
        position: Vector; 
        color: string; 
        rotation: number;
        velocity: Vector;
        active: boolean; 
    }

    //Funktion, zum speichern der Canvas-Eigenschaften

    export function saveImage(_title: string): void { 
        let information: Image[] = []; 
        for(let shape of shapes) { 
            let element: Image = {
                "position": shape.position,
                "rotation": shape.rotation,
                "velocity": shape.velocity,          
            };
            information.push(element); 
        }

        sendData(information, _title); 
    }

    //Funktionen die die Daten an die MongoDB schickt

    async function sendData(_infos: Image[], _title: string): Promise<void> {
        let width: string = canvas.width.toString();
        let height: string = canvas.height.toString();
        let canvasinfo: string[] = [width, height];
        let canvasjsn: string = JSON.stringify(canvasinfo);
        let canvasquery: URLSearchParams = new URLSearchParams(canvasjsn);

        let infos: string = JSON.stringify(_infos);  // in JSON String umwandeln, um für Server lesbar zu machen
        let query: URLSearchParams = new URLSearchParams(infos);
        let response: Response = await fetch(url + "?savePicture" + query.toString() + "&" + canvasquery.toString());
        await fetch(url + "?insertName&" + _title);

        let responsetext: string = await response.text();
        console.log(responsetext);
        alert("Bild wurde gespeichert");
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
}
