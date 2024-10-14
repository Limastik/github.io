const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 150, 100);

ctx.fillStyle = 'green';
ctx.fillRect(100, 80, 150, 100);

ctx.fillStyle = 'blue';
ctx.fillRect(150, 110, 150, 100);

function fillGradient(color1, color2) {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}

function createSvgLine(x1, y1, x2, y2, color, width) {
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svgElement = document.createElementNS(svgNamespace, 'svg');
    svgElement.setAttribute('width', '500');
    svgElement.setAttribute('height', '500');

    const line = document.createElementNS(svgNamespace, 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', width);

    svgElement.appendChild(line);
    document.getElementById('svgContainer').appendChild(svgElement);
}

function createSvgRectangle(width, height, fillColor, strokeColor, strokeWidth) {
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svgElement = document.createElementNS(svgNamespace, 'svg');
    svgElement.setAttribute('width', '500');
    svgElement.setAttribute('height', '500');

    const rect = document.createElementNS(svgNamespace, 'rect');
    rect.setAttribute('x', 50);
    rect.setAttribute('y', 50);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('fill', fillColor);
    rect.setAttribute('stroke', strokeColor);
    rect.setAttribute('stroke-width', strokeWidth);

    svgElement.appendChild(rect);
    document.getElementById('svgContainer').appendChild(svgElement);
}
