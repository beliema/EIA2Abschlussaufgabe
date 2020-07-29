var AS_Zauberbild;
(function (AS_Zauberbild) {
    console.log("Zauberbild-Editor wird geladen!");
    let canvas;
    let newCanvas;
    let saveB;
    let backgroundColor;
    let semicircleIn;
    let circleIn;
    let rhombusIn;
    let heartIn;
    let hexagonIn;
    let deleteShape;
    let symbole;
    let backgroundImage;
    let background;
    let shapes = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("handleLoad-Funktion wird aufgerufen");
        let canvas = document.querySelector(".canvas");
        if (!canvas)
            return;
        AS_Zauberbild.crc2 = canvas.getContext("2d");
        createBackground();
        // deleteShape = true;
        // Verknüfung der Variablen mit den jeweiligen HTML-Elementen 
        let format = document.querySelector("div#Zeichenfläche");
        backgroundColor = document.querySelector("#Farbauswahl");
        symbole = document.getElementById("Symbol");
        semicircleIn = document.getElementById("Semicircle");
        circleIn = document.getElementById("Circle");
        rhombusIn = document.getElementById("Rhombus");
        heartIn = document.getElementById("Heart");
        hexagonIn = document.getElementById("Hexagon");
        newCanvas = document.getElementById("neuCanvas");
        saveB = document.getElementById("speichern");
        window.setInterval(update, 100);
        // Installation der Listener 
        format.addEventListener("change", (_event) => {
            let format1 = document.getElementById("Format1");
            let format2 = document.getElementById("Format2");
            let format3 = document.getElementById("Format3");
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
        });
        backgroundColor.addEventListener("change", (_event) => {
            console.log(shapes);
            let farbe1 = document.getElementById("Farbe1");
            let farbe2 = document.getElementById("Farbe2");
            let farbe3 = document.getElementById("Farbe3");
            let farbe4 = document.getElementById("Farbe4");
            let farbe5 = document.getElementById("Farbe5");
            let farbe6 = document.getElementById("Farbe6");
            let farbe7 = document.getElementById("Farbe7");
            let farbe8 = document.getElementById("Farbe8");
            let farbe9 = document.getElementById("Farbe9");
            let farbe10 = document.getElementById("Farbe10");
            let farbe11 = document.getElementById("Farbe11");
            let farbe12 = document.getElementById("Farbe12");
            let farbe13 = document.getElementById("Farbe13");
            let farbe14 = document.getElementById("Farbe14");
            let farbe15 = document.getElementById("Farbe15");
            let farbe16 = document.getElementById("Farbe16");
            let farbe17 = document.getElementById("Farbe17");
            let farbe18 = document.getElementById("Farbe18");
            if (farbe1.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#F2F5A9";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe2.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#F5A9A9";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe3.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#D0A9F5";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe4.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#A9BCF5";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe5.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#A9F5D0";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe6.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#FACC2E";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe7.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#FE2E2E";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe8.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#A901DB";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe9.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#0174DF";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe10.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "#04B431";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe16.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "white";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe17.checked == true) {
                AS_Zauberbild.crc2.fillStyle = "black";
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe11.checked == true) {
                let gradient = AS_Zauberbild.crc2.createLinearGradient(0, 0, 0, AS_Zauberbild.crc2.canvas.height);
                gradient.addColorStop(0, "#F2F5A9");
                gradient.addColorStop(1, "#FACC2E");
                AS_Zauberbild.crc2.fillStyle = gradient;
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe12.checked == true) {
                let gradient = AS_Zauberbild.crc2.createLinearGradient(0, 0, 0, AS_Zauberbild.crc2.canvas.height);
                gradient.addColorStop(0, "#F5A9A9");
                gradient.addColorStop(1, "#FE2E2E");
                AS_Zauberbild.crc2.fillStyle = gradient;
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe13.checked == true) {
                let gradient = AS_Zauberbild.crc2.createLinearGradient(0, 0, 0, AS_Zauberbild.crc2.canvas.height);
                gradient.addColorStop(0, "#D0A9F5");
                gradient.addColorStop(1, "#A901DB");
                AS_Zauberbild.crc2.fillStyle = gradient;
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe14.checked == true) {
                let gradient = AS_Zauberbild.crc2.createLinearGradient(0, 0, 0, AS_Zauberbild.crc2.canvas.height);
                gradient.addColorStop(0, "#A9BCF5");
                gradient.addColorStop(1, "#0174DF");
                AS_Zauberbild.crc2.fillStyle = gradient;
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe15.checked == true) {
                let gradient = AS_Zauberbild.crc2.createLinearGradient(0, 0, 0, AS_Zauberbild.crc2.canvas.height);
                gradient.addColorStop(0, "#A9F5D0");
                gradient.addColorStop(1, "#04B431");
                AS_Zauberbild.crc2.fillStyle = gradient;
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            else if (farbe18.checked == true) {
                let gradient = AS_Zauberbild.crc2.createLinearGradient(0, 0, 0, AS_Zauberbild.crc2.canvas.height);
                gradient.addColorStop(0, "white");
                gradient.addColorStop(1, "black");
                AS_Zauberbild.crc2.fillStyle = gradient;
                AS_Zauberbild.crc2.fillRect(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
            }
            backgroundImage = AS_Zauberbild.crc2.getImageData(0, 0, canvas.width, canvas.height);
        });
        newCanvas.addEventListener("click", (_event) => {
            AS_Zauberbild.crc2.clearRect(0, 0, canvas.width, canvas.height);
        });
        symbole.addEventListener("change", (_event) => {
            console.log("Symbol wird gezeichnet");
            let x = 100;
            let y = 120;
            if (semicircleIn.checked == true) {
                let positionSemicircle = new AS_Zauberbild.Vector(x, y);
                let semicircle = new AS_Zauberbild.Semicircle(positionSemicircle);
                semicircle.draw();
                shapes.push(semicircle);
            }
            else if (circleIn.checked == true) {
                let positionCircle = new AS_Zauberbild.Vector(x, y);
                let circle = new AS_Zauberbild.Circle(positionCircle);
                circle.draw();
                shapes.push(circle);
            }
            else if (rhombusIn.checked == true) {
                let positionRhombus = new AS_Zauberbild.Vector(x, y);
                let rhombus = new AS_Zauberbild.Rhombus(positionRhombus);
                rhombus.draw();
                shapes.push(rhombus);
            }
            else if (heartIn.checked == true) {
                let positionHeart = new AS_Zauberbild.Vector(x, y);
                let heart = new AS_Zauberbild.Heart(positionHeart);
                heart.draw();
                shapes.push(heart);
            }
            else if (hexagonIn.checked == true) {
                let positionHexagon = new AS_Zauberbild.Vector(x, y);
                let hexagon = new AS_Zauberbild.Hexagon(positionHexagon);
                hexagon.draw();
                shapes.push(hexagon);
            }
        });
        createShapes();
    }
    function createShapes() {
        let _shape;
        //Kreis 
        for (let i = 0; i < _shape; i++) {
            let x = 200;
            let y = 70;
            let position = new AS_Zauberbild.Vector(x, y);
            let circle = new AS_Zauberbild.Circle(position);
            circle.draw();
            //shapes.push(circle);
            console.log(shapes);
            //Halbkreis 
            for (let i = 0; i < _shape; i++) {
                let x = 340;
                let y = 20;
                let position = new AS_Zauberbild.Vector(x, y);
                let semicircle = new AS_Zauberbild.Semicircle(position);
                semicircle.draw();
                console.log(shapes);
            }
            //Raute
            for (let i = 0; i < _shape; i++) {
                let x = 40;
                let y = 240;
                let position = new AS_Zauberbild.Vector(x, y);
                let rhombus = new AS_Zauberbild.Rhombus(position);
                rhombus.draw();
                console.log(shapes);
            }
            //Herz 
            for (let i = 0; i < _shape; i++) {
                let x = 50;
                let y = 20;
                let position = new AS_Zauberbild.Vector(x, y);
                let heart = new AS_Zauberbild.Heart(position);
                heart.draw();
                console.log(shapes);
            }
            //Hexagon 
            for (let i = 0; i < _shape; i++) {
                let x = 350;
                let y = 250;
                let position = new AS_Zauberbild.Vector(x, y);
                let hexagon = new AS_Zauberbild.Hexagon(position);
                hexagon.draw();
                console.log(shapes);
            }
        }
    }
    function createBackground() {
        let x = 0;
        let y = 0;
        let position = new AS_Zauberbild.Vector(x, y);
        backgroundImage = AS_Zauberbild.crc2.getImageData(0, 0, AS_Zauberbild.crc2.canvas.width, AS_Zauberbild.crc2.canvas.height);
    }
    //Animationen über Funktion Update: Orientierung an L09_Classes 
    function update() {
        console.log("Update");
        AS_Zauberbild.crc2.putImageData(backgroundImage, 0, 0);
        for (let Shape of shapes) {
            if (Shape instanceof AS_Zauberbild.Circle)
                Shape.move(1 / 10);
            else if (Shape instanceof AS_Zauberbild.Hexagon)
                Shape.move(1 / 20);
            else if (Shape instanceof AS_Zauberbild.Semicircle)
                Shape.move(1 / 10);
            else if (Shape instanceof AS_Zauberbild.Rhombus)
                Shape.move(1 / 50);
            else if (Shape instanceof AS_Zauberbild.Heart)
                Shape.move(1 / 10);
            Shape.draw();
        }
    }
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=generatepage2.js.map