document.getElementById('indentButton').addEventListener('click', function() {
    const codeInput = document.getElementById('codeInput').value;
    const indentedCode = indentCode(codeInput);
    document.getElementById('indentedOutput').textContent = indentedCode;
});

function indentCode(code) {
    const lines = code.split('\n');
    let indentedLines = [];
    let indentLevel = 0;

    lines.forEach(line => {
        const trimmedLine = line.trim();

        // Decrease indent level for closing braces
        if (trimmedLine.startsWith('}')) {
            indentLevel--;
        }

        // Add the current line with the appropriate indentation
        indentedLines.push('    '.repeat(indentLevel) + trimmedLine);

        // Increase indent level for opening braces
        if (trimmedLine.endsWith('{')) {
            indentLevel++;
        }
    });

    return indentedLines.join('\n');
}
