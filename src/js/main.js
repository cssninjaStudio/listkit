"use strict";

const feather = require('feather-icons')

import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.store('app', {
    isLoggedIn: false,
})
Alpine.start()

import { env } from './libs/utils/constants'
import './libs/components'
import './libs/forms'
import './libs/sections'
import { initPageLoader } from './libs/components/pageloader/pageloader'
import { switchDemoImages, insertBgImages, insertHrefs, insertPosters, initModals, initVideoPlayers } from './libs/utils/utils'

const showPageloader = initPageLoader()
//document.addEventListener('alpine:init', () => Alpine prefix('data-x-'))

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {

        //Switch demo images
        const changeImages = switchDemoImages();

        //Switch backgrounds
        const changeBackgrounds = insertBgImages(env);
        const changeHrefs = insertHrefs(env);
        const changePosters = insertPosters(env);

        //Feather Icons
        const featherIcons = feather.replace();

        //Modals
        const modals = initModals();

        //Video Players
        const players = initVideoPlayers(env);
        
    }
}

