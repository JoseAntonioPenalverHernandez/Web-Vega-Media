// =======================================
//  NAVBAR: marcar enlace activo
// =======================================
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // =======================================
  //  ACORDEÓN: cerrar otros paneles al abrir uno
  // =======================================
  const accordionItems = document.querySelectorAll(".accordion-collapse");

  accordionItems.forEach(item => {
    item.addEventListener("show.bs.collapse", () => {
      accordionItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("show");
        }
      });
    });
  });

  // =======================================
  //  FORMULARIO: validación personalizada
  // =======================================
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita envío por defecto
      let errors = [];

      // Nombre obligatorio
      const nombre = document.getElementById("nombre").value.trim();
      if (nombre.length < 3) {
        errors.push("Por favor, introduce tu nombre completo.");
      }

      // Email obligatorio y válido
      const email = document.getElementById("email").value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.push("Introduce un correo electrónico válido.");
      }

      // Teléfono obligatorio y formato 9 dígitos
      const telefono = document.getElementById("telefono").value.trim();
      const telefonoRegex = /^[0-9]{9}$/;
      if (!telefonoRegex.test(telefono)) {
        errors.push("Introduce un número de teléfono válido de 9 dígitos (solo números).");
      }

      // Mensaje obligatorio
      const mensaje = document.getElementById("mensaje").value.trim();
      if (mensaje.length < 5) {
        errors.push("El mensaje debe contener al menos 5 caracteres.");
      }

      // Mostrar errores o enviar formulario
      if (errors.length > 0) {
        alert(errors.join("\n")); // Puedes cambiar alert por mensajes en el DOM
      } else {
        // Aquí iría el envío real del formulario (fetch, AJAX, etc.)
        alert("Formulario enviado correctamente!");
        form.reset(); // Resetea formulario tras enviar
      }
    });
  }
});
