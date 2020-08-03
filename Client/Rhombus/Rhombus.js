var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Rhombus extends AS_Zauberbild.Shape {
        constructor(_position) {
            super(_position);
            this.velocity = new AS_Zauberbild.Vector(0, 0);
            this.radius = new AS_Zauberbild.Vector(0, 200);
            this.rotation = 10;
        }
        draw() {
            let x;
            let y;
            /* crc2.save();
             crc2.beginPath();
             crc2.translate(this.position.x, this.position.y);
             crc2.rotate(this.rotation * Math.PI / 90);
             crc2.moveTo(0, 20);
             crc2.lineTo(20, 0);
             crc2.lineTo(40, 20);
             crc2.lineTo(20, 40);
             crc2.lineTo(0, 20);
             crc2.stroke();
 
             crc2.fillStyle = "white";
             crc2.fill();
 
             crc2.restore(); */
            AS_Zauberbild.crc2.save();
            AS_Zauberbild.crc2.beginPath();
            AS_Zauberbild.crc2.translate(this.position.x, this.position.y);
            AS_Zauberbild.crc2.rotate(this.rotation * Math.PI / 90); //Rotation-Animation
            AS_Zauberbild.crc2.rotate(45 * Math.PI / 180); //Raute um 45 Grad drehen 
            AS_Zauberbild.crc2.moveTo(0, 20);
            AS_Zauberbild.crc2.fillRect(0, 20, 40, 40);
            AS_Zauberbild.crc2.stroke();
            AS_Zauberbild.crc2.fillStyle = "run";
            AS_Zauberbild.crc2.fill();
            AS_Zauberbild.crc2.restore();
            //Animation zum Farbwechseln 
            let col = function (x, y, r, g, b) {
                AS_Zauberbild.crc2.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                AS_Zauberbild.crc2.fillRect(x, y, 1, 1);
            };
            let R = function (x, y, t) {
                return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t)));
            };
            let G = function (x, y, t) {
                return (Math.floor(180 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)));
            };
            let B = function (x, y, t) {
                return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
            };
            // t = Zeitvariable 
            let t = 0;
            let run = function () {
                for (x = 0; x < 1; x++) {
                    for (y = 40; y <= 40; y++) {
                        col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
                    }
                }
                t = t + 0.300;
                window.requestAnimationFrame(run);
            };
            run();
        }
        move(_timeslice) {
            this.rotation += 2;
            let offset = new AS_Zauberbild.Vector(40, 240);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (AS_Zauberbild.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += AS_Zauberbild.crc2.canvas.height;
            if (this.position.x > (AS_Zauberbild.crc2.canvas.width))
                this.position.x -= (AS_Zauberbild.crc2.canvas.width);
            if (this.position.y > AS_Zauberbild.crc2.canvas.height)
                this.position.y -= AS_Zauberbild.crc2.canvas.height;
        }
    }
    AS_Zauberbild.Rhombus = Rhombus;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Rhombus.js.map