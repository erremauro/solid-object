'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function deepmerge(target, src) {
    var array = Array.isArray(src);
    var dst = array && [] || {};

    if (array) {
        target = target || [];
        dst = dst.concat(target);

        src.forEach(function (item, i) {
            if (typeof dst[i] === 'undefined') {
                dst[i] = item;
                return;
            }

            if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object') {
                dst[i] = deepmerge(target[i], item);
                return;
            }

            if (target.indexOf(item) === -1) {
                dst.push(item);
            }
        });
    } else {
        if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object') {
            Object.keys(target).forEach(function (key) {
                dst[key] = target[key];
            });
        }

        Object.keys(src).forEach(function (key) {
            if (_typeof(src[key]) !== 'object' || !src[key]) {
                dst[key] = src[key];
                return;
            }

            if (!target[key]) {
                dst[key] = src[key];
                return;
            }

            dst[key] = deepmerge(target[key], src[key]);
        });
    }

    return dst;
}

module.exports = deepmerge;