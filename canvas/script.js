window.addEventListener('load', () =>{
    //Capturando canvas
    var canvas = document.querySelector('#canvas');
    //Capturar o definir el contexto 2D o 3D
    var contexto = canvas.getContext('2d');

    var crearLineas = document.querySelector('#crearLineas');
    crearLineas.addEventListener('click', () => {
        //Ojo es para limpiar esta monda 
        contexto.clearRect(0,0,200,200);
        //*****
        contexto.beginPath();
        contexto.moveTo(10, 10);
        contexto.lineTo(180, 20);
        contexto.lineWidth = 1;
        contexto.strokeStyle = 'red';
        contexto.stroke();
        contexto.closePath();
    })
    var crearArcos = document.querySelector('#crearArcos');
    crearArcos.addEventListener('click', () => {
        //Ojo es para limpiar esta monda 
        contexto.clearRect(0,0,200,200);
        //*****
        contexto.beginPath();
        // radianes o los angulos con Math.PI = 3.1415....
        //Angulos Math.PI * 2 ==== 360
        //Radianes (Math.PI / 180) * ´Angulo´
        contexto.arc(100, 100, 50, 0, (Math.PI / 180) * 90, true);
        contexto.stroke();
        contexto.closePath();
    })
    var crearCurvaCuadratica = document.querySelector('#crearCurvaCuadratica');
    crearCurvaCuadratica.addEventListener('click', () => {
        //Ojo es para limpiar esta monda 
        contexto.clearRect(0,0,200,200);
        //*****
        contexto.beginPath();
        contexto.moveTo(100,100);
        contexto.quadraticCurveTo(180,20,200,200);
        contexto.stroke();
        contexto.closePath();
    })
    var crearCurvaBezier = document.querySelector('#crearCurvaBezier');
    crearCurvaBezier.addEventListener('click', () => {
        //Ojo es para limpiar esta monda 
        contexto.clearRect(0,0,200,200);
        //*****
        contexto.beginPath();
        contexto.moveTo(10, 180);
        contexto.bezierCurveTo(40,10,190,180,180,20);
        contexto.stroke();
        contexto.closePath();
    })
});