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

//----------------------------------------------------------------------

// CREACIÓN DE VIDEO

var IsCameraAccess = false;

document.addEventListener('DOMContentLoaded', function() {
    const activarCamaraBtn = document.getElementById('activarCamara');
    const video = document.getElementById('video'); 
    

    // permiso y compatibilidad del video 
    

      
     activarCamaraBtn.addEventListener('click', function() {
        if(!IsCameraAccess ){
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

                   
                    navigator.mediaDevices.getUserMedia({ video: true })
                        .then(function(stream) {
        
                            video.srcObject = stream;
                            IsCameraAccess = true;
                            
        
                        })
                        .catch(function(error) {
                            console.error('Error al acceder a la cámara:', error);
                        });
                } else {
                console.error('getUserMedia no es compatible con este navegador');
                }

            }
            else{
                video.style.width = "640px";
        
            }
        });
    
    
});

//CASO NEGATIVO 

document.addEventListener('DOMContentLoaded', function() {
  const videoElement = document.getElementById('video');
  const closeButton = document.getElementById('cerrarCamara');
  let mediaStream = null;

  // CERRAR LA TRANSMISIÓN DE LA CÁMARA

closeButton.addEventListener('click', function() {
      if (video) {
          const tracks = mediaStream.getTracks();
          tracks.forEach(track => track.stop());
          mediaStream = null;
          videoElement.srcObject = null;
      }
  });
});

// FIN DEL CASO NEGATIVO
// Activación del video 

document.addEventListener("DOMContentLoaded", function () {

    var video = document.getElementById("video");
    var closeButton = document.getElementById("cerrarCamara");
  
    closeButton.addEventListener("click", function () {
       
        video.style.width = "0px";

      //video.pause();

     // window.close();

      

      //video.style.display = "none";
    });
  });

 // FINAL DE CREACIÓN DE VIDEO CREACIÓN DE VIDEO


// on click 
