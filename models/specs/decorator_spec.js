const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js')


describe('Decorator', function () {

    let decorator;
    let paint;

    beforeEach(function () {

        decorator = new Decorator([]);
        paint = new Paint(5);
    });


    it("should start with an empty paint stock", function () {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [])
    });


    it("should be able to add a can of paint to paint stock", function () {
        decorator.addPaint(paint);
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 1);
    });

    
    // it("should be able to calculate total litres paint it has in stock", function () {

    // });



    // it("should be able to calculate whether is has enough paint to paint a room", function () {

    // });



    // it("should be able to paint room if has enough paint in stock", function () {

    // });

});