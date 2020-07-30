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

            this.rotation += 4; 
        }


    }
} 
