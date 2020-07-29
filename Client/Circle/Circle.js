var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Circle extends AS_Zauberbild.Shape {
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
            let r = 20;
            AS_Zauberbild.crc2.save();
            AS_Zauberbild.crc2.translate(this.position.x, this.position.y);
            AS_Zauberbild.crc2.beginPath();
            AS_Zauberbild.crc2.arc(0, 0, r, 0, 2 * Math.PI);
            AS_Zauberbild.crc2.stroke();
            AS_Zauberbild.crc2.fillStyle = "lightgrey";
            AS_Zauberbild.crc2.fill();
            AS_Zauberbild.crc2.restore();
        }
    }
    AS_Zauberbild.Circle = Circle;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Circle.js.map