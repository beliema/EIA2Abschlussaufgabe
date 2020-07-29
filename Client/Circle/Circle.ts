namespace AS_Zauberbild {

    export class Circle extends Shape {

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
            
            let r: number = 20;

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, r, 0, 2 * Math.PI);
            crc2.stroke(); 
            
            crc2.fillStyle = "lightgrey";
            crc2.fill();
            crc2.restore();
        }
    }
}