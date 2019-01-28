// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid {
    constructor(length, width, height) {
        this.height = height;
        this.length = length;
        this.width = width;
    }
    calculateVolume() {
        return this.height * this.length * this.width;
    }
    calculateSurfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new Cuboid(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.calculateVolume()); // 100
console.log(cuboid.calculateSurfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
// Test your work by logging out your volume and surface area.

class CubeMaker extends Cuboid {
    constructor(edge) {
        super(edge, edge, edge);
    }
    cubeVolume() {
        return this.height * this.length * this.width;  // edge^3
    }
    cubeSurfaceArea() {
        return 6 * this.height * this.height;           // 6*edge^2
    }
}

const cube = new CubeMaker(5);

console.log(
    'Cube Volume:', 
    cube.calculateVolume(), 
    'or', 
    cube.cubeVolume()
);  // edge^3 or 125
console.log(
    'Cube Surface Area:',
    cube.calculateSurfaceArea(),
    'or',
    cube.cubeSurfaceArea()
);  // 6*edge^2 or 150
