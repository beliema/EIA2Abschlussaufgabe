namespace AS_Zauberbild {

    export class Semicircle extends Shape {
        rotation: number; 
        Velocity: Vector; 
    

        constructor(_position?: Vector) {

            super(_position);

            this.velocity = new Vector ( 0,0); 
            this.rotation = 0; 

        }

        public draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0,  0, 20, 0, 1 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 1;
            crc2.fillStyle = "#F6C135";
            crc2.fill();
            crc2.rotate(Math.PI / 2);
            crc2.strokeStyle = "black";
            crc2.stroke();

            crc2.restore(); 
        }

        public move(_timeslice: number): void {
            
            this.rotation += 5; 
        }
    }
}   