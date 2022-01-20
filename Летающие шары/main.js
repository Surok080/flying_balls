var Ball = function (x, y, sx, sy, fc, c) {
	this.x = x;
	this.y = y;
	this.xSpeed = sx;
	this.ySpeed = sy;
	this.fc = fc;
	this.color = c;

};
var circle = function (x, y, radius, fillCircle, color) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	if (fillCircle) {
		ctx.fill();
		ctx.fillStyle = color;
	} else {
		ctx.stroke();
		ctx.strokeStyle = color;
	}
};
Ball.prototype.draw = function () {
	circle(this.x, this.y, 5, this.fc, this.color);
};
Ball.prototype.move = function () {
	this.x += this.xSpeed;
	this.y += this.ySpeed;
};
Ball.prototype.checkCollision = function () {
	if (this.x < 0 || this.x > width) {
		this.xSpeed = -this.xSpeed;
	}
	if (this.y < 0 || this.y > height) {
		this.ySpeed = -this.ySpeed;
	}
};
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var color = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
	'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
	'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
	'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
	'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
	'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
	'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
	'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
	'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
	'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
var bar = [];
for (var i = 0; i < 70; i++) {
	bar[i] = new Ball(Math.floor(Math.random() * width),
		Math.floor(Math.random() * height), (Math.random() * 4) - 2,
		(Math.random() * 4) - 2, (Math.floor(Math.random() * 2)),
		color[Math.floor(Math.random() * (color.length - 1))]);
}
setInterval(function () {
	ctx.clearRect(2, 2, width - 4, height - 4);
	for (var i = 0; i < bar.length; i++) {
		bar[i].draw();
		bar[i].move();
		bar[i].checkCollision();
	}
}, 16);
ctx.strokeStyle = color[Math.floor(Math.random() * (color.length - 1))];
ctx.strokeRect(1, 1, width - 2, height - 2);