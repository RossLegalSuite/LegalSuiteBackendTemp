import Snotify from 'vue-snotify';
import 'vue-snotify/styles/material.css';


import Vue from "vue";
window.Vue = Vue;

Vue.use(Snotify, {
    toast: {
      timeout: 2000,
      showProgressBar: false,
      position: "centerCenter",
    }
});


window.Popper = require('popper.js').default;

window.$ = window.jQuery = require('jquery');

import 'bootstrap';

new Vue({
    el: '#app',
    components: {
        ModalMessage: () => import("./components/modals/ModalMessage"),
    },
});

