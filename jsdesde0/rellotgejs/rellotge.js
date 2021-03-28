(function() {
    var acthora = function() {
        var data =new Date();
        var hores = data.getHours();
        var ampm;
        var minuts = data.getMinutes();
        var segons = data.getSeconds();
        var diaSetmana = data.getDay();
        var dia = data.getDate();
        var mes = data.getMonth();
        var year = data.getUTCFullYear();

        var pHores = document.getElementById('hores');
        var pAMPM = document.getElementById('ampm');
        var pMinuts = document.getElementById('minuts');
        var pSegons = document.getElementById('segons');
        var pDiaSetmana = document.getElementById('diaSetmana');
        var pDia = document.getElementById('dia');
        var pMes = document.getElementById('mes');
        var pYear = document.getElementById('year');

        var setmana = ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'];
        pDiaSetmana.textContent = setmana[diaSetmana];

        pDia.textContent = dia;

        var mesos = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre']
        pMes.textContent = mesos[mes];

        pYear.textContent = year;

        if (hores >= 12) {
            hores = hores - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }
        if (hores == 0) {
            hores = 12;
        };

        pHores.textContent = hores;
        pAMPM.textContent = ampm;

        if (minuts < 10){ minuts = "0" + minuts};
        if (segons < 10){ segons = "0" + segons};
        pMinuts.textContent = minuts;
        pSegons.textContent = segons;


    };

    acthora();
    var interval = setInterval(acthora, 1000);

    
}())