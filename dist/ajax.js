var ajax = {
  request : function(url, method, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open(method, url, true);

    httpRequest.onload = function() {
      if (httpRequest.status >= 200 && httpRequest.status < 400) {
        // Success!
        callback(httpRequest.responseText);
      } else {
        // We reached our target server, but it returned an error
        console.error(httpRequest);
      }
    };

    httpRequest.onerror = function() {
      // There was a connection error of some sort
      console.error(httpRequest);
    };

    httpRequest.send();
  },

  get : function(url,callback) {
    this.request(url, 'GET', callback);
  }
}
