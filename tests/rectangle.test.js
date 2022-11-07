import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle"

test('should properly output rectangle permieter', () => {
    const outputRectanglePermieter = getRectanglePerimeter(2, 3);
    expect(outputRectanglePermieter).toBe(10);
});

test('should properly output rectangle area', () => {
    const outputRectangleArea = getRectangleArea(2, 3);
    expect(outputRectangleArea).toBe(6);
});

test('should properly output rectangle info', () => {
    const outputRectangleInfo = getRectangleInfo(2, 3);
    expect(outputRectangleInfo).toBe(console.log(`The perimeter of a rectangle is ${10} and the area is ${6}`));
});
