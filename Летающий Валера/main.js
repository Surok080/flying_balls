var width = canvas.width;
var height = canvas.height;
var Car = function (x, y, sx, sy, sz) {
	this.x = x;
	this.y = y;
	this.xSpeed = sx;
	this.ySpeed = sy;
	this.sz = sz;
	this.draw();
};

Car.prototype.draw = function () {
	var carHtml = '<img src="111.png">';
	this.carElement = $(carHtml); //.hide(0).fadeIn(2000)
	this.carElement.css({
		width: this.sz,
		height: this.sz,
		position: "absolute",
		left: this.x,
		top: this.y
	});
	$("body").append(this.carElement);
};

Car.prototype.moveRight = function () {
	this.x += this.xSpeed;
	this.y += this.ySpeed;
	if (this.x < 0 || this.x > width) {
		this.xSpeed = -this.xSpeed;
	}
	if (this.y < 0 || this.y > height) {
		this.ySpeed = -this.ySpeed;
	}

	this.carElement.css({
		left: this.x,
		top: this.y
	});
};


var bar = [];
for (var i = 0; i < 20; i++) {
	bar[i] = new Car(Math.floor(Math.random() * width),
		Math.floor(Math.random() * height), (Math.random() * 4) - 2, (Math.random() * 4) - 2, (Math.random() * 10) + 15);
}
setInterval(function () {
	for (var i = 0; i < bar.length; i++) {
		bar[i].moveRight();
	}
}, 20);