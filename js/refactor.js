const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. EXTRACT CSS
const styleMatch = indexHtml.match(/<style>([\s\S]*?)<\/style>/);
let cssContent = styleMatch ? styleMatch[1] : '';

// Add style.css from root if it hasn't been added yet
let hasRootCSS = false;
if (fs.existsSync('style.css')) {
    cssContent += '\n' + fs.readFileSync('style.css', 'utf8');
    fs.unlinkSync('style.css');
    hasRootCSS = true;
}

if (!fs.existsSync('css')) fs.mkdirSync('css');
fs.writeFileSync('css/style.css', cssContent);

let newIndexHtml = indexHtml.replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="css/style.css">');


// 2. EXTRACT JS
// Vanilla JS block starting with <script> and Navbar scroll
const vanillaScriptMatch = newIndexHtml.match(/<script>\s*\/\* ---------- NAVBAR SCROLL([\s\S]*?)<\/script>/);
let vanillaContent = vanillaScriptMatch ? vanillaScriptMatch[1] : '';
vanillaContent = '/* ---------- NAVBAR SCROLL' + vanillaContent;

// Remove the inline script block and add the external link
if (vanillaScriptMatch) {
    newIndexHtml = newIndexHtml.replace(vanillaScriptMatch[0], '<script src="js/main.js"></script>');
}

if (!fs.existsSync('js')) fs.mkdirSync('js');
fs.writeFileSync('js/main.js', vanillaContent);

// 3. FIX SPLINE JS MODULE URL AND PATH
const moduleScriptMatch = newIndexHtml.match(/<script type="module">([\s\S]*?import \{ Application \} from 'https:\/\/esm\.sh\/\@splinetool\/runtime';[\s\S]*?)<\/script>/);

if (moduleScriptMatch) {
    let splineContent = moduleScriptMatch[1];

    // update url
    splineContent = splineContent.replace(
        /const SCENE_URL = '(.*?)';/,
        "const SCENE_URL = 'https://prod.spline.design/Rpj1GjUKqFdL35uS/scene.splinecode';"
    );

    if (!fs.existsSync('spline')) fs.mkdirSync('spline');
    fs.writeFileSync('spline/spline-scene.js', splineContent);

    // Replace with external tag
    newIndexHtml = newIndexHtml.replace(moduleScriptMatch[0], '<script type="module" src="spline/spline-scene.js"></script>');
}

fs.writeFileSync('index.html', newIndexHtml);
console.log('Refactoring complete.');
