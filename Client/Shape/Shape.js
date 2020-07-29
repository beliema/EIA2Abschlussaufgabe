var AS_Zauberbild;
(function (AS_Zauberbild) {
    class Shape {
        constructor(_position) {
            this.expendable = false;
            this.position = _position;
            this.radius = new AS_Zauberbild.Vector(0, 0);
        }
        draw() {
            //error default; 
        }
        move(_timeslice) {
            let offset = new AS_Zauberbild.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        rotate(_factor) {
            this.rotation = _factor;
        }
    }
    AS_Zauberbild.Shape = Shape;
})(AS_Zauberbild || (AS_Zauberbild = {}));
//# sourceMappingURL=Shape.js.map