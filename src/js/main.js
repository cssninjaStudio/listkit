"use strict";

const feather = require('feather-icons');
import './store/store';
import 'alpinejs';
import { switchDemoImages, insertBgImages } from './libs/utils/utils';
import { initNavbar } from './libs/components/navbar';

window.initNavbar = initNavbar;

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

