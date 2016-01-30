module.exports = function () {
    /* STYLES */
    require('../../node_modules/angular-material/angular-material.scss');
    /* Material Design Icons */
    require('../../node_modules/material-design-icons/iconfont/material-icons.css');
    require('../styles/main.scss');
    /* JS */
    require('angular');
    require('angular-route');
    //for angular-material
    require('angular-animate');
    require('angular-aria');
    require('angular-material');

    require('angular-scroll');
    require('angular-touch');

    require('angular-timeline/dist/angular-timeline.js');
    require('angular-timeline/dist/angular-timeline.scss');

    require('angular-inview/angular-inview')
};
