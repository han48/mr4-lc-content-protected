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
        const mode = ctrl.dataset.mode
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                const shadow = ctrl.attachShadow({ mode: mode });
                shadow.innerHTML = xmlHttp.responseText;
            }
        }
        xmlHttp.open("GET", form.action + "?id=" + contentId, true);
        xmlHttp.send(null);
    }
}
