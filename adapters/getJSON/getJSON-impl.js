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

/* this works , as the invokeHttp is bypassed, and JSON.parse is used - this confirms that the JSON is valid
 * this can be a way to avoid the invokeHttp bug */
function getPlain(interest) {
	path = "wl/1";
	
	var input = {
	    method : 'get',
	    returnedContentType : 'plain',
	    path : path
	};
	
	return JSON.parse((WL.Server.invokeHttp(input)).text);
}


/* this is an alternative representation of the payload, the only difference is that 0e0 has been replaced by 0 - this seems
 * to be value that WL.Server.invokeHTTP accepts */
function getJSON2() {
	path = "wl/2";
	
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path
	};
	
	return WL.Server.invokeHttp(input);
}


