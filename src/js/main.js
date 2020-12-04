"use strict";

const feather = require('feather-icons');
import './store/store';
import 'alpinejs';
import { initPageLoader, pageloader } from './libs/components/pageloader';
import { switchDemoImages, insertBgImages } from './libs/utils/utils';
import { initNavbar } from './libs/components/navbar';
import { initNavbarMobile } from './libs/components/navbar-mobile';
import { initFeaturedHosts } from './libs/components/featured-hosts';

window.initNavbar = initNavbar;
window.initNavbarMobile = initNavbarMobile;
window.initFeaturedHosts = initFeaturedHosts;

const showPageloader = initPageLoader();

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {

        //Switch demo images
        const changeImages = switchDemoImages();

        //Switch backgrounds
        const changeBackgrounds = insertBgImages();

        //Feather Icons
        const featherIcons = feather.replace();
        
    }
}

