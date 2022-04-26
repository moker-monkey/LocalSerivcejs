/* global require, module, window */

var XHR
if (typeof window !== 'undefined') XHR = require('./utils/xhr')

var LocalService = {
    XHR: XHR,
    setup: function(settings) {
        return XHR.setup(settings)
    },
    _listener_listed: {}
}

// 避免循环依赖
if (XHR) XHR.LocalService = LocalService

LocalService.listener = function(rurl, rtype, template, error_template, beforeDone) {
    // 拦截 XHR
    if (XHR) window.XMLHttpRequest = XHR
    LocalService._listener_listed[rurl + (rtype || '')] = {
        rurl: rurl,
        rtype: rtype,
        template: template,
        error_template:error_template,
        beforeDone:beforeDone
    }
    return LocalService
}

module.exports = LocalService