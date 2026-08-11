document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Forms still marked data-mock="true" aren't wired to a real backend yet —
  // show a fake success message instead of actually submitting. Forms without
  // this attribute (e.g. the Brevo-connected Free Resources form) submit for real.
  document.querySelectorAll('form.capture-form[data-mock="true"]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.form-success');
      if (msg) {
        msg.style.display = 'block';
        form.reset();
      } else {
        alert('Thanks! (Form submission is not yet connected to an email service.)');
      }
    });
  });
});
