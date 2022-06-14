/* global require, module, window */

import XHR from './utils/xhr/index'

var LocalService = {
    XHR: XHR,
    setup: function(settings) {
        return XHR.setup(settings)
    },
    _listener_listed: {}
}

// 避免循环依赖
if (XHR) XHR.LocalService = LocalService

LocalService.listener = function(rurl, rtype, success_callback, error_callback, beforeDone) {
    // 拦截 XHR
    if (XHR) globalThis.XMLHttpRequest = XHR
    if(beforeDone){
        LocalService._listener_listed[rurl + (rtype || '')] = {
            rurl: rurl,
            rtype: rtype,
            template: success_callback,
            error_template: error_callback,
            beforeDone:beforeDone
        }
    }
    else if(error_callback){
        LocalService._listener_listed[rurl + (rtype || '')] = {
            rurl: rurl,
            rtype: rtype,
            template: success_callback,
            error_template: null,
            beforeDone: error_callback
        }
    }else{
        LocalService._listener_listed[rurl + (rtype || '')] = {
            rurl: rurl,
            rtype: rtype,
            template: success_callback,
            error_template: null,
            beforeDone: null
        }
    }
    
    return LocalService
}

export default LocalService