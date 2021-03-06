namespace AS_Zauberbild {

    export class Semicircle extends Shape {
        rotation: number; 
        Velocity: Vector; 
    

        constructor(_position?: Vector) {

            super(_position);

            this.velocity = new Vector ( 0,0); 
            this.radius = new Vector(40, 120);
            this.rotation = 5; 

        }

        public draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.rotate(this.rotation * Math.PI / 180);
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
            
            let offset: Vector = new Vector(340, 20);
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
            
            this.rotation += 5; 
        }
    }
}   