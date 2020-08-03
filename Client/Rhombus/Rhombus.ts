namespace AS_Zauberbild {

    export class Rhombus extends Shape {

        rotation: number; 
        Velocity: Vector; 


        constructor(_position: Vector) {

            super(_position);

            this.velocity = new Vector(0, 0);
            this.radius = new Vector(0, 200);
            this.rotation = 10; 

        }

        public draw(): void {

            let x: number; 
            let y: number; 

           /* crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.rotate(this.rotation * Math.PI / 90);
            crc2.moveTo(0, 20);
            crc2.lineTo(20, 0);
            crc2.lineTo(40, 20);
            crc2.lineTo(20, 40);
            crc2.lineTo(0, 20);
            crc2.stroke();

            crc2.fillStyle = "white";
            crc2.fill();

            crc2.restore(); */ 

            crc2.save();
            crc2.beginPath(); 
            crc2.translate(this.position.x, this.position.y);
            crc2.rotate(this.rotation * Math.PI / 90); //Rotation-Animation
            crc2.rotate(45 * Math.PI / 180); //Raute um 45 Grad drehen 
            crc2.moveTo(0, 20); 
            crc2.fillRect(0,20, 40,40); 
            crc2.stroke(); 

            crc2.fillStyle = "run";
            crc2.fill(); 
            crc2.restore();

            //Animation zum Farbwechseln 

            let col = function(x: number, y: number, r: string | number, g: string | number, b: string | number) {
                crc2.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                crc2.fillRect(x, y, 1,1);
              }
              let R = function(x: number, y: number, t: number) {
                return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
              }
              
              let G = function(x: number, y: number, t: number) {
                return( Math.floor(180 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
              }
              
              let B = function(x: number, y: number, t: number) {
                return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
              }
              // t = Zeitvariable 
              let t = 0;
              
              let run = function() {
                for(x=0;x<1;x++) {
                  for(y=40;y<=40;y++) {
                    col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
                  }
                }
                t = t + 0.300;
                window.requestAnimationFrame(run);
              }
              
              run();
              
              

        }

        public move(_timeslice: number): void { 
        
            this.rotation += 2; 

            let offset: Vector = new Vector(40, 240);
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



    }
} 
