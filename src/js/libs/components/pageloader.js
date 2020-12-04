export function initPageLoader() {
    window.addEventListener('load', () => {
        const pageloader = document.getElementById('pageloader');
        pageloader.classList.toggle('is-active');
        var pageloaderTimeout = setTimeout(function () {
            pageloader.classList.toggle('is-active');
            clearTimeout(pageloaderTimeout);
        }, 1200);
    })
}