var app ={
    initialize: function() {
        this.bindEvents();
    },
	
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('scan').addEventListener('click', this.scan, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

		console.log('Evento recibido: ' + id);
    },

    scan: function() {
        console.log('scaneando');
        
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.scan( function (result) { 

            alert("Result: " + result.text);  

           console.log("resultado: \n" +
                "texto: " + result.text + "\n" +
                "formato: " + result.format);
            document.getElementById("info").innerHTML = result.text; //aqui poner la info en el texto de busqueda
            console.log(result);
           
        }, function (error) { 
            console.log("Scaneo Fallido: ", error); 
        } );
    },

    encode: function() {
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.encode(scanner.Encode.TEXT_TYPE, "http://www.nhl.com", function(success) {
            alert("codificacion exitosa: " + success);
          }, function(fail) {
            alert("codificacion fallida: " + fail);
          }
        );

    }

};