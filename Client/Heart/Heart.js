var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Heart extends AS_Zauberbild.Shape {
        constructor(_position) {
            super(_position);
            this.velocity = new AS_Zauberbild.Vector(0, 0);
        }
        draw() {
            AS_Zauberbild.crc2.save();
            AS_Zauberbild.crc2.scale(0.4, 0.4);
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
            AS_Zauberbild.crc2.stroke();
            AS_Zauberbild.crc2.restore();
        }
        move(_timeslice) {
        }
    }
    AS_Zauberbild.Heart = Heart;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Heart.js.map