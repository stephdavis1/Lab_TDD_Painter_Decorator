const assert = require('assert');
const Room = require('../room.js')


describe('Room', function () {

    let room;

    beforeEach(function () {
        room = new Room(12)
    });


    it("should have an area", function () {
        const actual = room.area;
        assert.strictEqual(actual, 12)
    });


    it("should start unpainted", function () {
        const actual = room.painted;
        assert.strictEqual(actual, false)
    });

    
    it("should be able to be painted", function () {
        room.paintRoom();
        const actual = room.painted;
        assert.strictEqual(actual, true)
    });

});