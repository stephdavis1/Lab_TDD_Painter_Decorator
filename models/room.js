const Room = function (area) {
    this.area = area;
    this.painted = false;
}
Room.prototype.paintRoom = function() {
    return this.painted = true;
};

module.exports = Room;