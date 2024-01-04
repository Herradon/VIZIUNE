// Variables

const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

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

// ANIMATED BOX

document.addEventListener("DOMContentLoaded", function() {
  var animatedBox = document.getElementById("animatedBox");

  window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;

      // Define la posición en la que deseas activar la animación
      var triggerPosition = 300;

      if (scrollPosition > triggerPosition) {
          animatedBox.style.opacity = "1"; // Hace visible la caja
      } else {
          animatedBox.style.opacity = "0"; // Mantiene la caja transparente
      }
  });
});

