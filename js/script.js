//pago

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('en breves le enviaremos la factura a su correo', 'success')
  })
}



// ANIMATED BOX 1-- 

document.addEventListener("DOMContentLoaded", function() {
  var animatedBox = document.getElementById("animatedBox");

  window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;
      console.log(scrollPosition);

      // Define la posición en la que deseas activar la animación
      var triggerPosition = 500;

      if (scrollPosition > triggerPosition) {
          animatedBox.style.opacity = "1";
      } 
      else {
          animatedBox.style.opacity = "0"; 
      }
  });
});

// CARRUSEL PARA IMÁGENES 

/*Cargador de eventos al iniciar la página*/
window.addEventListener('load',iniciar,false);

/*Contador inicializado en cero*/
var contador=0;

function iniciar(){
    setInterval('cambiarImg()',5000);
}

 var obj=document.getElementById('slider');
var obj2=obj.getElementsByTagName('img');

function cambiarManual(sentido)
{
  if (sentido=="DER") {
    obj2[contador].style.opacity=0;
    if (contador<obj2.length-1) 
    {
      contador++;
      obj2[contador].style.opacity=1;
      console.log('Contador vale ' + contador + ' Longitud ' + obj2.length);
    }
    else
    {
      contador=0;
      obj2[contador].style.opacity=1;
      console.log('Contador vale ' + contador + ' Longitud ' + obj2.length);
    }
  }
  else if (sentido=="IZQ") 
  {
    obj2[contador].style.opacity=0;
    if (contador!=0) 
    {
      contador--;
      obj2[contador].style.opacity=1;
    }
    else
    {
      contador=obj2.length-1;
      obj2[contador].style.opacity=1;
    }
  }
}

function cambiarImg(){	        

    if(contador==obj2.length){
        for(var i=0; i<obj2.length; i++){
            obj2[i].style.opacity='0';
            contador--;
        }
        obj2[contador].style.opacity='1';
    }
    else
    {
      obj2[contador].style.opacity='1';
      contador++;
    }
    
}