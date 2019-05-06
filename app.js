(function () {
    var agregar = function () {
        var InputNombre = document.getElementById("nombre");
        var InputEmail = document.getElementById("email");
        var InputDestino = document.getElementById('destino');
        var InputPreferencia = document.getElementById('preferencia');
        var InputAdultos=document.getElementById('adultos');
        var InputNinos=document.getElementById('ninos');
        var InputNoches=document.getElementById('noches');

        var nombre = InputNombre.value;
        var email = InputEmail.value;
        var destino = InputDestino.value;
        var preferencia = InputPreferencia.value;
        var adultos = InputAdultos.value;
        var ninos = InputNinos.value;
        var noches = InputNoches.value;


        if (comprobarCampo(nombre, email, destino, preferencia, adultos, ninos, noches)) {
            llenarTabla(nombre, email, destino, preferencia, adultos, ninos, noches);
        }
    };
    document.getElementById("botonazo").addEventListener("click", agregar);

    //función comprobar campos;
    var comprobarCampo = function (nombre, email, destino, preferencia, adultos, ninos, noches) {
        if (nombre === "" ||email == "" || destino === ""||preferencia==""|| adultos==""||ninos==""||noches=="" ) {
            alert("Uno o varios campos están vacíos");
            return false;
        } else {
            return true;
        };
    };
    //función llenar tabla
    var llenarTabla = function (nombre, email, destino, preferencia,adultos,ninos,noches) {
        
        var fila = '<tr><th>' +(document.getElementById("table").childElementCount +1) + '</th><td> ' + nombre + '</td><td>' + email + '</td><td>' + destino + '</td><td>'+ preferencia + '</td><td>' +adultos + '</td><td>' +ninos+ '</td><td>' +noches+ '</td></tr>';
        $('#table tr:last').after(fila);
        alert("Se ha agregado a Viajes buscados.");
    };
}());
