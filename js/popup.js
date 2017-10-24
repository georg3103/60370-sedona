var POPUP_HIDDEN = 'popup--hidden';

var form = document.querySelector('.feedback');
var sendFeedback = document.querySelector('.button');
var popups = Array.prototype.slice.call(document.querySelectorAll('.popup'));
var popupSuccess = document.querySelector('.popup--success');
var popupFail = document.querySelector('.popup--fail');

function checkValidity() {
  sendFeedback.addEventListener('click', function (sending) {
    sending.preventDefault();
    if (form.checkValidity() === false) {
      popupFail.classList.remove(POPUP_HIDDEN);
    }
    else {
      popupSuccess.classList.remove(POPUP_HIDDEN);
    }
  });
}

if (form) {
  checkValidity();
  popups.forEach(function (popup) {
    popup.querySelector('.popup__close').addEventListener('click', function () {
      popup.classList.add(POPUP_HIDDEN);
    });

    window.addEventListener('keyup', function (e) {
      if (e.keyCode === 27) {
        popup.classList.add(POPUP_HIDDEN);
      }
    });
  });
}
