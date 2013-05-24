'use strict';

/* Filters */

langApp.filter('sortChars', function () {
    return function (text) {
        return text ? text.split('').sort().join('') : text;
    };
});

