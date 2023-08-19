const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');

let[horas, minutos, segundos] = [0,0,0];
let intervaloDeTiempo;
let estadoCrnometro ='pausado';

function actualizarCronometro(){
  segundos++;
  if(segundos / 60 === 1){
    segundos = 0;
    minutos++;

    if(minutos /60 === 1){
      minutos = 0;
      horas++;
    }
  }

  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(unidadDeTIempo){
  return unidadDeTIempo < 10 ? '0' + unidadDeTIempo : unidadDeTIempo;
}

botonInicioPausa.addEventListener('click', function(){
  if (estadoCrnometro === "pausado"){
    intervaloDeTiempo = window.setInterval(actualizarCronometro,1000);
    botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonInicioPausa.classList.remove('iniciar');
    botonInicioPausa.classList.add('pausar');
    estadoCrnometro= 'andando';
  }else{
    window.clearInterval(intervaloDeTiempo);
    botonInicioPausa.innerHTML='<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
    estadoCrnometro = 'pausado';
  }
});


botonReiniciar.addEventListener('click',function(){
  window.clearInterval(intervaloDeTiempo);
  horas=0 ;
  minutos=0;
  segundos=0;
  //reiniciar
  cronometro.innerText = '00:00:00';
  //actualizar botones
  botonInicioPausa.innerHTML='<i class="bi bi-play-fill"></i>';
  botonInicioPausa.classList.remove('pausar');
  botonInicioPausa.classList.add('iniciar');
  // estado del cronometro
  estadoCrnometro='pausado';
});