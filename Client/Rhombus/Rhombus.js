var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Rhombus extends AS_Zauberbild.Shape {
        constructor(_position) {
            super(_position);
            this.velocity = new AS_Zauberbild.Vector(0, 0);
        }
        draw() {
            AS_Zauberbild.crc2.save();
            AS_Zauberbild.crc2.beginPath();
            AS_Zauberbild.crc2.translate(this.position.x, this.position.y);
            AS_Zauberbild.crc2.moveTo(0, 20);
            AS_Zauberbild.crc2.lineTo(20, 0);
            AS_Zauberbild.crc2.lineTo(40, 20);
            AS_Zauberbild.crc2.lineTo(20, 40);
            AS_Zauberbild.crc2.lineTo(0, 20);
            AS_Zauberbild.crc2.stroke();
            AS_Zauberbild.crc2.fillStyle = "white";
            AS_Zauberbild.crc2.fill();
            AS_Zauberbild.crc2.restore();
        }
        move(_timeslice) {
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
        rotate(_factor) {
            this.rotation += 4;
        }
    }
    AS_Zauberbild.Rhombus = Rhombus;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Rhombus.js.map