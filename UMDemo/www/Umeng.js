
var Aplus4Native = {
   isAvailable: true,

   // onCallBack
   onCallBack : function(sid, result) {
       console.log("--->>> call onCallBack...");
       console.log("--->>> sid = " + sid);
       var strJson = JSON.stringify(result);
       console.log("--->>> result = " + strJson);
   }
};


var TestCase = {

    dispatch : function(method, sid, callBack, args) {
        var cmd = {
             className : "Umeng4Aplus",
             methodName : method,
             sid: sid,
             callback: callBack,
             params : args
        };
        var jsonStr = JSON.stringify(cmd);
        
        window.webkit.messageHandlers.Umeng4Aplus.postMessage(jsonStr);

     //   window.Umeng4Aplus.CALL(jsonStr);
    },

    /**
     * registerGlobalProperties test function
     */
    registerGlobalProperties : function(sid, callBack, args) {
        //var params = { gpkey1: "gpval1", gpkey2: "gpval2" };
        TestCase.dispatch("registerGlobalProperties", sid, callBack, args);
    },

     /**
      * unregisterGlobalProperty test function
      */
     unregisterGlobalProperty : function(sid, callBack, args) {
         //var args = { key: "gpkey1" };
         TestCase.dispatch("unregisterGlobalProperty", sid, callBack, args);
     },

    /**
     * clearGlobalProperties test function
     */
    clearGlobalProperties : function(sid, callBack) {
        var args = {};
        TestCase.dispatch("clearGlobalProperties", sid, callBack, args);
    },

    /**
     * getGlobalProperty test function
     */
    getGlobalProperty : function(sid, callBack, args) {
        //var args = {key:"gpkey1"};
        TestCase.dispatch("updatePageProperties", sid, callBack, args);
    },

    /**
     * getGlobalProperties test function
     */
    getGlobalProperties : function(sid, callBack) {
        var args = {};
        TestCase.dispatch("getGlobalProperties", sid, callBack, args);
    },

    /**
     * sendPV test function
     */
    sendPV : function(sid, callBack, args) {
        var args = '{"sdkArgs":{"cna":"9e6e2952380e46dab8cc077d4e176a6c","lver":"1.2.0","jsver":"aplus.js","id":"$$_page_start","ts":1617935200984,"r":"/v.gif","_ish5":"1","url":"http://localhost:55273/","page_name":"Demo首页","url_p":{},"refer":"-","refer_p":{},"is_auto":0},"i_cusp":{"aws":1,"page_version":"1.0","homepage_version":"1.0","page_name":"Demo首页"},"_bridgeName":"AtmBridge","_bridgeVersion":"1.0.0"}';
        TestCase.dispatch("sendPV", "12345", "", args);
    },

    /**
     * sendEvent test function
     */
    sendEvent : function(sid, callBack, args) {
        var args = '{"sdkArgs":{"cna":"","lver":"1.2.0","jsver":"aplus.js","id":"banner位曝光","ts":1617874916338,"_ish5":"1","url":"http://localhost:64713/","page_name":"http://localhost:64713/","url_p":{},"refer":"http://localhost:64713/","refer_p":{},"funcId":"2201","is_auto":0},"i_cusp":{"code":"ShowBanner","index":2,"ref_index":2},"_bridgeName":"AtmBridge","_bridgeVersion":"1.0.0"}';
        TestCase.dispatch("sendEvent", "12345", "", args);
    }
};

//测试代码
var env = window.Umeng4Aplus.env();
console.log("--->>> env = " + env);


