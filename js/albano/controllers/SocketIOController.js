this.albano = this.albano || {};
(function() {

  function SocketIOController() {
    //properties
    this.url = "";
    this.port = 0;
  }

  var prototype = SocketIOController.prototype;

  prototype.get = function(realm) {

    if (realm === "local")
      realm = "dev";

    this.url = "https://" + realm + "-socket.albano.us";
    this.port = 443;

    // for local development
    this.url = "http://localhost";
    this.port = 8080;

    return this;

  }

  albano.SocketIOController = SocketIOController;

})();
