var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Semicircle extends AS_Zauberbild.Shape {
        constructor(_position) {
            super(_position);
            this.velocity = new AS_Zauberbild.Vector(0, 0);
            this.rotation = 0;
        }
        draw() {
            AS_Zauberbild.crc2.save();
            AS_Zauberbild.crc2.beginPath();
            AS_Zauberbild.crc2.translate(this.position.x, this.position.y);
            AS_Zauberbild.crc2.arc(0, 0, 20, 0, 1 * Math.PI);
            AS_Zauberbild.crc2.closePath();
            AS_Zauberbild.crc2.lineWidth = 1;
            AS_Zauberbild.crc2.fillStyle = "#F6C135";
            AS_Zauberbild.crc2.fill();
            AS_Zauberbild.crc2.rotate(Math.PI / 2);
            AS_Zauberbild.crc2.strokeStyle = "black";
            AS_Zauberbild.crc2.stroke();
            AS_Zauberbild.crc2.restore();
        }
        move(_timeslice) {
            let offset = new AS_Zauberbild.Vector(340, 20);
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
        rotate(_factor) {
            this.rotation += 5;
        }
    }
    AS_Zauberbild.Semicircle = Semicircle;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Semicircle.js.map