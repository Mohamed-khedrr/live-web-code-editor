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
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = "" + document.getElementById("cssCode").value + "";
    var jsCode = "" + document.getElementById("jsCode").value + "";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode + cssCode + jsCode);
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
    if (window.innerWidth >= 992) {
        document.getElementById("html").style.display = "block";
        document.getElementById("css").style.display = "block";
        document.getElementById("js").style.display = "block";
        document.getElementById("result").style.display = "block";
    }
    if (window.innerWidth < 992 && document.getElementById("html").style.display == "block") {
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("result").style.display = "none";
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

