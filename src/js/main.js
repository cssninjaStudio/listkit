"use strict";

const feather = require('feather-icons');
import './store/store';
import 'alpinejs';
import { switchDemoImages } from './libs/utils/utils';

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {

        //Switch demo images
        const changeImages = switchDemoImages();

        //Feather Icons
        const featherIcons = feather.replace();
        
    }
}

