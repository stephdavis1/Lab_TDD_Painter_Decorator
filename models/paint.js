const Paint = function (litres) {
    this.litres = litres;
}
Paint.prototype.checkEmpty = function () {
    if (this.litres === 0){
        return true
    } else {
        return false
    }
};

Paint.prototype.emptyPaint = function () {
    this.litres = 0;
  }


module.exports = Paint;