namespace AS_Zauberbild {

    export class Hexagon extends Shape {

        constructor(_position?: Vector) {

            super(_position);

            this.velocity = new Vector(0,0); 
        }

        move(_timeslice: number): void {
            
            let offset: Vector = this.velocity.copy();
           
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
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

       
        public draw(): void {

            crc2.save(); 
            crc2.scale(0.6, 0.55); 
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(10,40);
            crc2.lineTo(30,0);
            crc2.lineTo(80,0);
            crc2.lineTo(100,40);
            crc2.lineTo(80,80);
            crc2.lineTo(30,80);
            crc2.lineTo(10,40);
            crc2.closePath(); 

            crc2.fillStyle = "#9F81F7";
            crc2.fill();
            crc2.stroke(); 
            
            crc2.restore(); 
        }
    }
}