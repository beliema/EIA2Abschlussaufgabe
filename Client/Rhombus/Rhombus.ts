namespace AS_Zauberbild {

    export class Rhombus extends Shape {

        rotation: number; 
        Velocity: Vector; 


        constructor(_position?: Vector) {

            super(_position);

            this.velocity = new Vector(0, 0);

        }

        public draw(): void {

    

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(0, 20);
            crc2.lineTo(20, 0);
            crc2.lineTo(40, 20);
            crc2.lineTo(20, 40);
            crc2.lineTo(0, 20);
            crc2.stroke();

            crc2.fillStyle = "white";
            crc2.fill();

            crc2.restore();


        }

        public move(_timeslice: number): void {

            this.rotation += 4; 
        }


    }
} 
