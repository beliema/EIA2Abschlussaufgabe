namespace AS_Zauberbild {

    export class Heart extends Shape {
        
        scale: number; 
        size: number; 
        Velocity: Vector; 
        
    
        constructor(_position?: Vector) {

            super(_position);
           // this.scale = 0.4;

            this.velocity = new Vector ( 0,0); 

        }

        draw(): void {     
            
                crc2.save(); 
                crc2.scale(0.4, 0.4); 
                crc2.beginPath();
                crc2.translate(this.position.x, this.position.y);
                crc2.bezierCurveTo(75, 40, 70, 25, 50, 25);
                crc2.bezierCurveTo(10, 25, 20, 62.5, 20, 62.5);
                crc2.bezierCurveTo(22, 80, 40, 102, 75, 120);
                crc2.bezierCurveTo(105, 110, 130, 80, 130, 62.5);
                crc2.bezierCurveTo(130, 62.5, 135, 28, 105, 25);
                crc2.bezierCurveTo(80, 25, 75, 37, 75, 40);
                crc2.closePath(); 
                crc2.fillStyle = "#F5A9A9";
                crc2.fill();
                crc2.stroke(); 

                crc2.restore(); 
        }

        public move (_timeslice: number): void {

            let offset: Vector = new Vector(50, 20);
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

        private resize(_timeslice:number): void {

        }
    }

}