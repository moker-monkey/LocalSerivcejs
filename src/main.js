/* global require, module, window */

import XHR from './utils/xhr/index'

var LocalService = {
    XHR: XHR,
    setup: function (settings) {
        return XHR.setup(settings)
    },
    _listener_listed: {}
}

// 避免循环依赖
if (XHR) XHR.LocalService = LocalService

LocalService.listener = function (rurl, rtype, service) {
    // 拦截 XHR
    if (XHR) globalThis.XMLHttpRequest = XHR
    LocalService._listener_listed[rurl + (rtype || '')] = {
        rurl: rurl,
        rtype: rtype,
        service: service
    }

    return LocalService
}

export default LocalService