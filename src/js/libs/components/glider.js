import Glide from '@glidejs/glide';

export function initGlide() {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        autoplay: 2000
    }).mount();
}