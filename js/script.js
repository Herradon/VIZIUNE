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


