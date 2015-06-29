/* this fails as the JSON as 0e0 - this is a bug in invokeHttp */
function getJSON1() {
	path = "wl/1";
	
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path
	};
	
	return WL.Server.invokeHttp(input);
}

/* this works , as the invokeHttp is bypassed, and JSON.parse is used - this confirms that the JSON is valid */
function getPlain(interest) {
	path = "wl/1";
	
	var input = {
	    method : 'get',
	    returnedContentType : 'plain',
	    path : path
	};
	
	return JSON.parse((WL.Server.invokeHttp(input)).text);
}


/* one way to avoid the invokeHttp bug */
function getJSON2() {
	path = "wl/2";
	
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path
	};
	
	return WL.Server.invokeHttp(input);
}


