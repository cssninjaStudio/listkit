export function getUrlParams(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

export function switchDemoImages() {
    const targets = document.querySelectorAll('[data-demo-src]');
    
    if (typeof (targets) != 'undefined' && targets != null) {
        for (var i = 0, len = targets.length; i < len; i++) {
            let demoUrl = targets[i].getAttribute('data-demo-src');
            targets[i].setAttribute('src', demoUrl);
        }
    }
}