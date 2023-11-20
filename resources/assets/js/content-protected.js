function LoadContentProtected(ctrl) {
    let form = null
    let cCtrl = ctrl
    while (cCtrl) {
        cCtrl = cCtrl.parentElement
        if (cCtrl && cCtrl.tagName.toLowerCase() === 'form') {
            form = cCtrl
            break
        }
    }
    if (form) {
        ctrl.innerHTML = ''
        ctrl.oncopy = () => {
            return false;
        }

        const contentId = ctrl.dataset.contentId
        const adoptedStyleSheets = ctrl.dataset.adoptedstylesheets
        const mode = ctrl.dataset.mode
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                const sheet = new CSSStyleSheet();
                sheet.replaceSync(adoptedStyleSheets);

                const shadow = ctrl.attachShadow({ mode: mode });
                shadow.innerHTML = xmlHttp.responseText;
                shadow.adoptedStyleSheets = [sheet];
            }
        }
        xmlHttp.open("GET", form.action + "?id=" + contentId, true);
        xmlHttp.send(null);
    }
}
