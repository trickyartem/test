import Canvas from "./canvas";

export const canvas = new Canvas();

class Rect {
    constructor(private x: number, private y: number, private radius: number, private angle: number) { }

    draw() {
        canvas.c.beginPath();
        canvas.c.strokeStyle = 'white';
        canvas.c.rotate(this.angle * Math.PI / 180);
        canvas.c.rect(this.x, this.y, this.radius, this.radius);
        canvas.c.stroke();
        canvas.c.closePath();
    }

    update() {
        this.draw();
    }
}

export default Rect;