namespace AS_Zauberbild {

    export class Shape {

        public position: Vector; 
        public velocity: Vector; 
        public expendable: boolean = false; 
        public size: number; 
        public radius: Vector; 
        public rotation: number;

        constructor(_position: Vector) {
            this.position = _position;
            this.radius = new Vector(0, 0);
        }

        public  draw() {
            //error default; 
        }

        public move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }

        public rotate(_factor: number): void {
            this.rotation = _factor;
        }
}}