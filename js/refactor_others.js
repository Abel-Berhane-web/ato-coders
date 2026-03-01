const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Extract inline CSS
    const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
    if (styleMatch) {
        let cssContent = styleMatch[1];
        fs.appendFileSync('css/style.css', '\n' + cssContent);
        // Remove the style block and add the link
        content = content.replace(/<style>[\s\S]*?<\/style>/, '');
        changed = true;
    }

    // Also check if <link rel="stylesheet" href="css/style.css"> is missing and add it
    // But wait, if they don't have CSS, adding it is good anyway
    if (!content.includes('css/style.css') && content.includes('</head>')) {
        content = content.replace('</head>', '    <link rel="stylesheet" href="css/style.css">\n</head>');
        changed = true;
    }

    // Extract inline vanilla JS
    const scriptRegex = /<script(?![^>]*src=)(?![^>]*type="module")>([\s\S]*?)<\/script>/g;
    const scriptBlocks = content.match(scriptRegex);
    if (scriptBlocks) {
        for (let b of scriptBlocks) {
            const innerMatch = b.match(/<script(?![^>]*src=)(?![^>]*type="module")>([\s\S]*?)<\/script>/);
            if (innerMatch && innerMatch[1].trim()) {
                fs.appendFileSync('js/main.js', '\n' + innerMatch[1]);
            }
            content = content.replace(b, '');
            changed = true;
        }
    }

    // Add the script tag if not present
    if (changed && !content.includes('js/main.js') && content.includes('</body>')) {
        content = content.replace('</body>', '    <script src="js/main.js"></script>\n</body>');
    }

    if (changed) {
        fs.writeFileSync(file, content);
        console.log(`Refactored ${file}`);
    }
}

console.log('processed other files');
