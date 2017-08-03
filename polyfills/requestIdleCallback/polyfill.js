(function(global){
	// <Global>.requestIdleCallback
	var rafPrefix;
	if('mozRequestIdleCallback' in global){
		rafPrefix = 'moz';
	} else if ('webkitRequestIdleCallback' in global){
		rafPrefix = 'webkit';
	} else if ('msRequestIdleCallback' in global){
		rafPrefix = 'ms';
	}
	if(rafPrefix){
		global.requestIdleCallback = function(callback){
		    return global[rafPrefix + 'RequestIdleCallback'](callback);
		};
		global.cancelIdleCallback = global[rafPrefix + 'CancelIdleCallback'];
	} else {
		global.requestIdleCallback = function(callback){
			if(typeof callback !== 'function'){
				throw new TypeError(callback + ' is not a function');
			}
			return setTimeout(function(){
				var start = Date.now();
				callback({
					didTimeout: false,
					timeRemaining: function(){
						return Math.max(0, 50 - (Date.now() - start));
					}
				});
			}, 1);
		};
		global.cancelIdleCallback = function(id){
			clearTimeout(id);
		};
	}
}(this));
