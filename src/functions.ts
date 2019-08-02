import Rect, { canvas } from "./rect";

let rectangles: Array<Rect> = [];

addEventListener('resize', () => {
    canvas.c.canvas.width = innerWidth;
    canvas.c.canvas.height = innerHeight;

    init();
});

export function init(): void {
    rectangles = [];
    canvas.c.translate(canvas.c.canvas.width / 2, canvas.c.canvas.height / 2);

    for (let i = 0; i < 30; i++) {
        let x = 0;
        let y = 0;
        let radius = 200;
        let angle = 15;

        rectangles.push(new Rect(x, y, radius, angle));
    }
}

export function animate(): void {
    for (let rect of rectangles) {
        rect.update();
    }
}
