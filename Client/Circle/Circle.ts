namespace AS_Zauberbild {

    export class Circle extends Shape {

        color: String; 
    

        constructor(_position: Vector) {

            super(_position);

            this.velocity = new Vector(0, 0);
            this.velocity.getRandom(200, 70);
            this.color = ["#F3F781", "#FAAC58", "#F78181", "#5882FA", "#01DF01", "#9F81F7"];



        }

        move(_timeslice: number): void {

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

        private recolor(_color: String): void {
            //  let colorArray: string[] = ["#F3F781", "#FAAC58", "#F78181", "#5882FA", "#01DF01", "#9F81F7"];
            let i: number = 0;
            crc2.fillStyle = i === 0 ? '#F3F781' : '#FAAC58';
            crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            if (i === 0)
                i = 1;
            else
                i = 0;
        }
    }

    setInterval(recolor(_color: String), 50); 
}
