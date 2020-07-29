var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Hexagon extends AS_Zauberbild.Shape {
        constructor(_position) {
            super(_position);
            this.velocity = new AS_Zauberbild.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
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
        draw() {
            AS_Zauberbild.crc2.save();
            AS_Zauberbild.crc2.scale(0.6, 0.55);
            AS_Zauberbild.crc2.beginPath();
            AS_Zauberbild.crc2.translate(this.position.x, this.position.y);
            AS_Zauberbild.crc2.moveTo(10, 40);
            AS_Zauberbild.crc2.lineTo(30, 0);
            AS_Zauberbild.crc2.lineTo(80, 0);
            AS_Zauberbild.crc2.lineTo(100, 40);
            AS_Zauberbild.crc2.lineTo(80, 80);
            AS_Zauberbild.crc2.lineTo(30, 80);
            AS_Zauberbild.crc2.lineTo(10, 40);
            AS_Zauberbild.crc2.closePath();
            AS_Zauberbild.crc2.fillStyle = "#9F81F7";
            AS_Zauberbild.crc2.fill();
            AS_Zauberbild.crc2.stroke();
            AS_Zauberbild.crc2.restore();
        }
    }
    AS_Zauberbild.Hexagon = Hexagon;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Hexagon.js.map