function getRandomColor() {
    return `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`;
}

function rand(frm, to) {
    return ~~(Math.random() * (to - frm)) + frm;
}

const colors = [];
while (colors.length < 100) {
    colors.push(getRandomColor());
}

export default colors;