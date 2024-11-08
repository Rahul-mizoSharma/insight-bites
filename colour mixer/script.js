document.getElementById('mixButton').addEventListener('click', function() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const colorName1 = document.getElementById('colorName1').value.trim() || color1;
    const colorName2 = document.getElementById('colorName2').value.trim() || color2;

    const mixedColor = mixColors(color1, color2);
    document.getElementById('result').style.backgroundColor = mixedColor;

});

function mixColors(color1, color2) {
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);

    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);

    const rMixed = Math.floor((r1 + r2) / 2);
    const gMixed = Math.floor((g1 + g2) / 2);
    const bMixed = Math.floor((b1 + b2) / 2);

    return `#${((1 << 24) + (rMixed << 16) + (gMixed << 8) + bMixed).toString(16).slice(1)}`;
}
