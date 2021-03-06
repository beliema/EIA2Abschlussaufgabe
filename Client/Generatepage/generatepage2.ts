namespace AS_Zauberbild {
    console.log("Zauberbild-Editor wird geladen!");

    export let crc2: CanvasRenderingContext2D;

    let canvas: HTMLCanvasElement;
    let newCanvas: HTMLButtonElement;
    let saveB: HTMLButtonElement;
    let backgroundColor: HTMLInputElement;

    let semicircleIn: HTMLInputElement;
    let circleIn: HTMLInputElement;
    let rhombusIn: HTMLInputElement;
    let heartIn: HTMLInputElement;
    let hexagonIn: HTMLInputElement;

    let symbole: HTMLDivElement;
    let backgroundImage: ImageData;

    // Variablen zum Abspeichern mit dem Server 
    let canvasData: String[] = [];
    let background: String;
    let url: string = "https://zauberbildabschluss.herokuapp.com";

    let shapes: Shape[] = [];

    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
        console.log("handleLoad-Funktion wird aufgerufen");

        //Canvas definieren

        canvas = <HTMLCanvasElement>document.querySelector(".canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")

        createBackground();

        // Verknüfung der Variablen mit den jeweiligen HTML-Elementen 

        let format: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Zeichenfläche");
        backgroundColor = <HTMLInputElement>document.querySelector("#Farbauswahl");
        symbole = <HTMLDivElement>document.getElementById("Symbol");

        semicircleIn = <HTMLInputElement>document.getElementById("Semicircle");
        circleIn = <HTMLInputElement>document.getElementById("Circle");
        rhombusIn = <HTMLInputElement>document.getElementById("Rhombus");
        heartIn = <HTMLInputElement>document.getElementById("Heart");
        hexagonIn = <HTMLInputElement>document.getElementById("Hexagon");

        newCanvas = <HTMLButtonElement>document.getElementById("neuCanvas");
        saveB = <HTMLButtonElement>document.getElementById("speichern");
        window.setInterval(update, 100);
        alert("Willkommen zum Zauberbild-Editor! Kreiere dein eigenes Zauberbild und speichere es anschließend! Du kannst alte Bilder auch wieder laden. Viel Spaß!");



        // Installation der Listener mit Funktionen 

        format.addEventListener("change", chooseCanvasSize);
        backgroundColor.addEventListener("change", changeCanvasColor);
        newCanvas.addEventListener("click", deleteImage);
        saveB.addEventListener("click", saveImage);
        symbole.addEventListener("change", chooseSymbol);

    }

    function createShapes(): void {
        let _shape: number;

        //Kreis 
        for (let i: number = 0; i < _shape; i++) {
            let x: number = 200;
            let y: number = 70;
            let position: Vector = new Vector(x, y);
            let circle: Circle = new Circle(position);
            circle.draw();
            console.log(shapes);
        }
        //Halbkreis 
        for (let i: number = 0; i < _shape; i++) {
            let x: number = 340;
            let y: number = 300;
            let position: Vector = new Vector(x, y);
            let semicircle: Semicircle = new Semicircle(position);
            semicircle.draw();
            console.log(shapes);

        }

        //Raute
        for (let i: number = 0; i < _shape; i++) {
            let x: number = 40;
            let y: number = 240;
            let position: Vector = new Vector(x, y);
            let rhombus: Rhombus = new Rhombus(position);
            rhombus.draw();
            console.log(shapes);

        }

        //Herz 
        for (let i: number = 0; i < _shape; i++) {
            let x: number = 50;
            let y: number = 20;
            let position: Vector = new Vector(x, y);
            let heart: Heart = new Heart(position);
            heart.draw();
            console.log(shapes);

        }

        //Hexagon 
        for (let i: number = 0; i < _shape; i++) {
            let x: number = 350;
            let y: number = 250;
            let position: Vector = new Vector(x, y);
            let hexagon: Hexagon = new Hexagon(position);
            hexagon.draw();
            console.log(shapes);

        }
    }

    function createBackground(): void { //Erstellung dieser Funktion, da backgroundImage erst dann definiert wurde, wenn ich die HG-Farbe ausgewählt hatte, Zuweisung ImageData so 


        let x: number = 0;
        let y: number = 0;
        let position: Vector = new Vector(x, y);

        backgroundImage = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function chooseCanvasSize(_event: Event): void {

        let format1: HTMLInputElement = <HTMLInputElement>document.getElementById("Format1");
        let format2: HTMLInputElement = <HTMLInputElement>document.getElementById("Format2");
        let format3: HTMLInputElement = <HTMLInputElement>document.getElementById("Format3");

        if (format1.checked == true) {
            canvas.style.height = "500px";
            canvas.style.width = "500px";
            console.log("Canvas-Format 500 x 500 Pixel wird generiert");
        }

        else if (format2.checked == true) {
            canvas.style.height = "400px";
            canvas.style.width = "400px";
            console.log("Canvas-Format 400 x 400 Pixel wird generiert");
        }

        else if (format3.checked == true) {
            canvas.style.height = "600px";
            canvas.style.width = "600px";
            console.log("Canvas-Format 600 x 600 Pixel wird generiert");
        }
    }

    function changeCanvasColor(_event: Event): void {
        console.log(shapes);

        let farbe1: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe1");
        let farbe2: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe2");
        let farbe3: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe3");
        let farbe4: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe4");
        let farbe5: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe5");
        let farbe6: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe6");
        let farbe7: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe7");
        let farbe8: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe8");
        let farbe9: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe9");
        let farbe10: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe10");
        let farbe11: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe11");
        let farbe12: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe12");
        let farbe13: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe13");
        let farbe14: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe14");
        let farbe15: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe15");
        let farbe16: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe16");
        let farbe17: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe17");
        let farbe18: HTMLInputElement = <HTMLInputElement>document.getElementById("Farbe18");

        if (farbe1.checked == true) {
            crc2.fillStyle = "#F2F5A9";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe2.checked == true) {
            crc2.fillStyle = "#F5A9A9";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe3.checked == true) {
            crc2.fillStyle = "#D0A9F5";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe4.checked == true) {
            crc2.fillStyle = "#A9BCF5";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe5.checked == true) {
            crc2.fillStyle = "#A9F5D0";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe6.checked == true) {
            crc2.fillStyle = "#FACC2E";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe7.checked == true) {
            crc2.fillStyle = "#FE2E2E";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe8.checked == true) {
            crc2.fillStyle = "#A901DB";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe9.checked == true) {
            crc2.fillStyle = "#0174DF";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe10.checked == true) {
            crc2.fillStyle = "#04B431";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe16.checked == true) {
            crc2.fillStyle = "white";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe17.checked == true) {
            crc2.fillStyle = "black";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe11.checked == true) {
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "#F2F5A9");
            gradient.addColorStop(1, "#FACC2E");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe12.checked == true) {
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "#F5A9A9");
            gradient.addColorStop(1, "#FE2E2E");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe13.checked == true) {
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "#D0A9F5");
            gradient.addColorStop(1, "#A901DB");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe14.checked == true) {
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "#A9BCF5");
            gradient.addColorStop(1, "#0174DF");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        else if (farbe15.checked == true) {
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "#A9F5D0");
            gradient.addColorStop(1, "#04B431");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
        else if (farbe18.checked == true) {
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "black");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        backgroundImage = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }


    // Funktion, die die Symbole auf den Canvas zeichnet 
    function chooseSymbol(_event: Event): void {
        console.log("Symbol wird gezeichnet");

        let x: number = 100;
        let y: number = 120;

        if (semicircleIn.checked == true) {
            let positionSemicircle: Vector = new Vector(x, y);
            let semicircle: Semicircle = new Semicircle(positionSemicircle);

            semicircle.draw();
            shapes.push(semicircle);
        }

        else if (circleIn.checked == true) {
            let positionCircle: Vector = new Vector(x, y);
            let circle: Circle = new Circle(positionCircle);

            circle.draw();
            shapes.push(circle);
        }

        else if (rhombusIn.checked == true) {
            let positionRhombus: Vector = new Vector(x, y);
            let rhombus: Rhombus = new Rhombus(positionRhombus);

            rhombus.draw();
            shapes.push(rhombus);
        }

        else if (heartIn.checked == true) {
            let positionHeart: Vector = new Vector(x, y);
            let heart: Heart = new Heart(positionHeart);

            heart.draw();
            shapes.push(heart);
        }

        else if (hexagonIn.checked == true) {
            let positionHexagon: Vector = new Vector(x, y);
            let hexagon: Hexagon = new Hexagon(positionHexagon);

            hexagon.draw();
            shapes.push(hexagon);
        }
        createShapes();
    }

    //Animationen über Funktion Update: Orientierung an L09_Classes 
    function update(): void {
        console.log("Update");
        crc2.putImageData(backgroundImage, 0, 0);

        for (let shape of shapes) {
            if (shape instanceof Circle)
                shape.move(1 / 10);
            else if (shape instanceof Hexagon)
                shape.move(1 / 20);
            else if (shape instanceof Semicircle)
                shape.move(1 / 15);
            else if (shape instanceof Rhombus)
                shape.move(1 / 50);
            else if (shape instanceof Heart)
                shape.move(1 / 10);
            shape.draw();
        }
    }

    //Asynchrone Funktion für den Datenaustausch mit dem Server 

    async function saveImage(): Promise<void> {

        let imagename: string | null = prompt("Speichere dein Meisterwerk: ");


        if (imagename != null) {


            // Daten: Formatdaten des Canvas 
            canvasData.push(canvas.width.toString(), canvas.height.toString());
            // Hintergrund-Daten des Canvas 
            canvasData.push(backgroundImage.toString());

            // Daten (Positionen) der Elemente 
            for (let shape of shapes) {
                canvasData.push(shape.position.x.toString(), shape.position.y.toString()); // x & y Daten werden in den Array gepusht 

                if (shape instanceof Semicircle) {
                    canvasData.push("semicircle");
                }
                if (shape instanceof Circle) {
                    canvasData.push("circle");
                }
                if (shape instanceof Rhombus) {
                    canvasData.push("rhombus");
                }
                if (shape instanceof Heart) {
                    canvasData.push("heart");
                }
                if (shape instanceof Hexagon) {
                    canvasData.push("hexagon");
                }
            }

            //Umwandlung des Arrays, um es für Server lesbar zu machen: 
            let dataServer: string = JSON.stringify(canvasData);
            let response: Response = await fetch(url + "?" + dataServer);
            let responsetext: string = await response.text();
            console.log(responsetext);
            alert(responsetext);
        }
    }




    function deleteImage(_event: Event): void {
        // crc2.clearRect(0, 0, canvas.width, canvas.height) hat getan als noch keine Elemente generiert wurden, jedoch dann nicht mehr
        shapes = [];
        console.log("Dein Zauberbild wurde gelöscht :( ")
    }



}




