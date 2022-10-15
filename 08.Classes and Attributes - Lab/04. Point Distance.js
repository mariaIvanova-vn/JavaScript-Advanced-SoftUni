class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(p1, p2) {
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }
}



let p1 = new Point(1,1);
let p2 = new Point(4,5);

console.log(p1,p2);
console.log(Point.distance(p1,p2));