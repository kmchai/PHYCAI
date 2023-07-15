// File: PHYCAT_CANVAS.js

/*
 * ver 2.0.0
 *
 * @author Chai Kangmin
 */

var PHYCAT_CANVAS = new Object();

// context - 设备上下文，(cx,cy) - 椭圆中心坐标
PHYCAT_CANVAS.CanvasOval = function(context, cx, cy, x, y, a, b, color, width) {
	context.lineWidth = width;//线条的宽度
	context.beginPath();
    context.ellipse(cx+x, cy-y, a, b, 0, 0, 2 * Math.PI);
    context.strokeStyle = color;
	context.stroke();
}

// context - 设备上下文，(cx,cy) - 椭圆中心坐标
PHYCAT_CANVAS.CanvasFillOval = function(context, cx, cy, x, y, radius, color)
{
	context.beginPath();
    context.arc(cx+x, cy-y, radius, 0, Math.PI*2, true);
    context.closePath();
    context.fillStyle = color;
    context.fill();
}

PHYCAT_CANVAS.CanvasSVG = function(src){
	this.imgObj = new Image();
    this.imgObj.src = src;
}

PHYCAT_CANVAS.CanvasSVG.prototype.draw = function(context,cx,cy,x,y,width,height,angle){
	context.save();
	var ox = cx+x;
	var oy = cy-y;
	context.translate(ox,oy);
	context.rotate(angle);
	context.drawImage(this.imgObj, -width/2, -height/2 ,width,height);
    context.translate(-ox,-oy); 
    context.restore();//恢复状态
}

PHYCAT_CANVAS.CanvasFillRec = function(context, cx, cy, x, y, width, height, angle, color){
	context.save();
	var ox = cx+x;
	var oy = cy-y;
	context.translate(ox,oy);
    context.fillStyle = color;  // 设置或返回用于填充绘画的颜色、渐变或模式              
    context.fillRect(-width/2, -height/2 ,width,height);  // x轴 y轴 宽 和 高 ,绘制“被填充”的矩形 
	context.translate(-ox,-oy); 
    context.restore();//恢复状态
}

PHYCAT_CANVAS.CanvasArc = function(context, cx, cy,r, start, end, color, width)
{
	context.lineWidth = width;//线条的宽度
	context.beginPath();
    context.arc(cx, cy, r, start, end);
	context.closePath();
	context.strokeStyle = color;
	context.stroke();
}

PHYCAT_CANVAS.CanvasLine = function(context, cx, cy, x1, y1, x2, y2, color, width)
{
	context.lineWidth = width;//线条的宽度
	context.beginPath();
	context.moveTo(cx+x1, cy-y1);
	context.lineTo(cx+x2, cy-y2);
    context.closePath();
	context.strokeStyle = color;
	context.stroke();
}

PHYCAT_CANVAS.CanvasText = function(context, cx, cy, text, x, y, color, size, align, baseline, deg)
{
	context.fillStyle = color;
	context.font = size+"px Times New Roman";
	context.textAlign = align;	
	context.textBaseline = baseline;
	context.save();
	var ox = cx+x;
	var oy = cy-y;
	context.translate(ox,oy);
	context.rotate(deg*Math.PI/180);	
	context.fillText(text, 0, 0);
    context.translate(-ox,-oy); 
	context.restore();
}

PHYCAT_CANVAS.CanvasCurve = function(context, cx, cy, points, color, width)
{
	context.lineWidth = width;//线条的宽度
	context.beginPath();
	context.moveTo(cx+points[0].x, cy-points[0].y);
	for(var i=1; i<points.length; i++)
	{
		context.lineTo(cx+points[i].x, cy-points[i].y);
	}
	context.strokeStyle = color;
	context.stroke();
}

PHYCAT_CANVAS.CanvasFillArc = function(context, cx, cy, x, y, r, start, end, color)
{
	context.beginPath();
    context.arc(cx+x, cy-y, r, start, end);
    context.fillStyle = color;  // 设置或返回用于填充绘画的颜色、渐变或模式              
	context.fill();
}

PHYCAT_CANVAS.CanvasDashLine = function(context, cx, cy, x1, y1, x2, y2, pattern, color, width)
{
	context.save();
	context.lineWidth = width;//线条的宽度
	context.setLineDash(pattern);
	context.beginPath();
	context.moveTo(cx+x1, cy-y1);
	context.lineTo(cx+x2, cy-y2);
	context.strokeStyle = color;
	context.stroke();
    context.restore();//恢复状态
}