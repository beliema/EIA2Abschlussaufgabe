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
            
            let offset: Vector = new Vector(200, 70);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
            this.position.x += (crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > (crc2.canvas.width))
                this.position.x -= (crc2.canvas.width);
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        public rotate(_factor: number): void {
            this.rotation = _factor;
        }
}}