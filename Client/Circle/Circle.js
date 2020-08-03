var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Circle extends AS_Zauberbild.Shape {
        constructor(_position) {
            super(_position);
            this.velocity = new AS_Zauberbild.Vector(0, 0);
            this.velocity.getRandom(200, 70);
            this.color = ["#F3F781", "#FAAC58", "#F78181", "#5882FA", "#01DF01", "#9F81F7"];
        }
        move(_timeslice) {
            let offset = new AS_Zauberbild.Vector(200, 70);
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
        recolor(_color) {
            //  let colorArray: string[] = ["#F3F781", "#FAAC58", "#F78181", "#5882FA", "#01DF01", "#9F81F7"];
            let i = 0;
            AS_Zauberbild.crc2.fillStyle = i === 0 ? '#F3F781' : '#FAAC58';
            AS_Zauberbild.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            if (i === 0)
                i = 1;
            else
                i = 0;
        }
    }
    AS_Zauberbild.Circle = Circle;
    setInterval(recolor(_color, String), 50);
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Circle.js.map