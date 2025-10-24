document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
function formatEmail(form) {
  const name = encodeURIComponent(form.name.value);
  const email = encodeURIComponent(form.email.value);
  const message = encodeURIComponent(form.message.value);

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=chihieya59@gmail.com&su=Portfolio%20Contact%20from%20${name}&body=Name:%20${name}%0AEmail:%20${email}%0A%0AMessage:%0A${message}`;

  window.open(gmailURL, "_blank");

  return false;
}
