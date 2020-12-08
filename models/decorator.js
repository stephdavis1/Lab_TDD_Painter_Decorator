const Decorator = function (){
    this.stock = [];

}

Decorator.prototype.addPaint = function(paint) {

    this.stock.push(paint);

}

module.exports = Decorator;