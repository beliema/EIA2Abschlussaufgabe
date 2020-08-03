var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Heart extends AS_Zauberbild.Shape {
        constructor(_position) {
            super(_position);
            this.scale = 0.4;
            this.velocity = new AS_Zauberbild.Vector(0, 0);
        }
        draw() {
            AS_Zauberbild.crc2.save();
            //crc2.scale(0.4, 0.4); 
            AS_Zauberbild.crc2.beginPath();
            AS_Zauberbild.crc2.translate(this.position.x, this.position.y);
            AS_Zauberbild.crc2.bezierCurveTo(75, 40, 70, 25, 50, 25);
            AS_Zauberbild.crc2.bezierCurveTo(10, 25, 20, 62.5, 20, 62.5);
            AS_Zauberbild.crc2.bezierCurveTo(22, 80, 40, 102, 75, 120);
            AS_Zauberbild.crc2.bezierCurveTo(105, 110, 130, 80, 130, 62.5);
            AS_Zauberbild.crc2.bezierCurveTo(130, 62.5, 135, 28, 105, 25);
            AS_Zauberbild.crc2.bezierCurveTo(80, 25, 75, 37, 75, 40);
            AS_Zauberbild.crc2.closePath();
            AS_Zauberbild.crc2.fillStyle = "#F5A9A9";
            AS_Zauberbild.crc2.fill();
            AS_Zauberbild.crc2.scale(Math.PI / 0.2);
            AS_Zauberbild.crc2.stroke();
            AS_Zauberbild.crc2.restore();
        }
        move(_timeslice) {
            this.scale += 3;
            let offset = new AS_Zauberbild.Vector(50, 20);
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
    AS_Zauberbild.Heart = Heart;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Heart.js.map