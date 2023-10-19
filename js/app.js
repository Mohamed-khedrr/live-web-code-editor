const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode")
const jsCode = document.getElementById("jsCode")
const HTML_STORAGE = 'html_storage';
const CSS_STORAGE = 'css_storage';
const JS_STORAGE = 'js_storage';

(() => {
    htmlCode.value = autoLoad(HTML_STORAGE) || '<div>\n\n</div>';
    cssCode.value = autoLoad(CSS_STORAGE) || "<style>\n\n</style>";
    jsCode.value = autoLoad(JS_STORAGE) || "<script>\n\n</script>";
    showPreview();
})()





function showPreview() {
    let frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode.value + cssCode.value + jsCode.value);
    frame.close();
}

function show(x) {
    document.getElementById("html").style.display = "none";
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById(x).style.display = "block";
}

function show_all() {
    const htmWindow = document.getElementById("html")
    const cssWindow = document.getElementById("css");
    const jsWindow = document.getElementById("js")
    const resultWindow = document.getElementById("result");
    if (window.innerWidth >= 992) {
        htmWindow.style.display = "block";
        cssWindow.style.display = "block";
        jsWindow.style.display = "block";
        resultWindow.style.display = "block";
    }
    if (window.innerWidth < 992 && htmWindow.style.display == "block") {
        cssWindow.style.display = "none";
        jsWindow.style.display = "none";
        resultWindow.style.display = "none";
    }
}


function autoSave(inputElm, storageKey) {
    localStorage.setItem(storageKey, String(inputElm.value))
}


function autoLoad(storageKey) {
    return localStorage.getItem(storageKey)
}

htmlCode.addEventListener('change', () => autoSave(htmlCode, HTML_STORAGE))
cssCode.addEventListener('change', () => autoSave(cssCode, CSS_STORAGE))
jsCode.addEventListener('change', () => autoSave(jsCode, JS_STORAGE))

