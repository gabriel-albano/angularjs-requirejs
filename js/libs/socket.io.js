this.albano = this.albano || {};

define([
    'SocketIO',
    'albano/controllers/PrincipalController',
    'albano/controllers/SocketIOController'
], function (io) {

    function SocketMessageReceiver(principal) {

        this.notificationSocket;
        this.user = principal.userId;
        this.org = principal.companyId;
        this.realm = (principal.realm === "local" ? "dev" : principal.realm)
        this.room = this.realm + '_' + this.org;
        this.socket = new albano.SocketIOController().get(this.realm);
        this._connected = false;
        
    }
    
    var prototype = SocketMessageReceiver.prototype;
    
    prototype.connect = function () {
        
        if (this.realm === "" || this.realm === undefined) {
            console.log("No realm yet... skip socket.io connection");
            return;
        }

        // Connect to all namespaces
        console.log("Connect to all namespaces at " + this.socket.url + ':' + this.socket.port.toString());

        this.notificationSocket = io.connect(this.socket.url + ':' + this.socket.port.toString() + '/notification');
        var room = this.room;
        var user = this.user;
        var showNotification = this.showNotification;
        var leaveRoom = this.leaveRoom;
        // Handle Notification Messages
        this.notificationSocket.on('connect', function () {
            if (this._connected)
                return;
            this._connected = true;

            this.emit('HELO', user);

            this.on('HELO', function (msg) {
                console.log(msg);
            });

            //prototype.joinRoom();
            this.emit('addRoom', room, user);

            this.on('notification', function (msg) {
                console.log("Received: " + msg);
                // check is sessionExipation
                if (checkExpired(msg)) 
                    window.location.replace("/login/logout.jsp");
                else
                    showNotification(msg, user);
            });
            this.on('action', function (msg) {
                console.log("Received: " + msg);
                if (checkExpired(msg)) 
                    window.location.replace("/login/logout.jsp");
                else
                    showNotification(msg, user);
            });

            this.on('leaveRoom', function (msg) {
                console.log(msg);
            });
            this.on('addRoom', function (msg) {
                console.log(msg);
            });
            
            function checkExpired(msg) {
                if (JSON.parse(msg)['type'].toLowerCase() === 'sessionexpired') {
                    console.log("Session has expired...redirect to log off");
                    this.emit('leaveRoom', room, user);
                    return true;
                }
                return false;
            }
            
        });
    }

    prototype.leaveRoom = function() {
        // Leave the notification room
        this.notificationSocket.emit('leaveRoom', this.room, this.user);
        this.notificationSocket.on('leaveRoom', function (msg) {
            console.log(msg);
        });
    }
        
    prototype.showNotification = function(m, user) {
        x = JSON.parse(m);
        //console.log(x['id']);
        if (x['userId'] === user) {
            console.log("Notification is for me!");
            if (x['type'].toLowerCase() === 'notification') {
                if (x['appId'] !== "PIPS-Client") {
                    console.log("Showing Notification")
                    document.getElementById('inbox').className = "glyphicon glyphicon-envelope red";
                }
            }
            else if (x['type'].toLowerCase() === 'alert') {
                console.log("Showing Alert")
                showNotificationMessage(x['title'], x['style']);
            }
            else if (x['type'].toLowerCase() === 'popup') {
                console.log("Showing Popup")
                $(".notificationTitle").text(x['title']);
                $(".notificationBody").text(x['message']);
                $("#readMessageModal").modal('show');
            }
            
        }

    }
    
    prototype.logOff = function () {
        this.leaveRoom();
    };
    
    return albano.SocketMessageReceiver = SocketMessageReceiver;
});