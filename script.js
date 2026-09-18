/* =========================
   MENÚ MOBILE
========================= */

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}

const galleryTriggers = document.querySelectorAll(".project-gallery-trigger");

galleryTriggers.forEach(trigger => {

  trigger.addEventListener("click", () => {

    const galleryName = trigger.dataset.gallery;
    const gallery = galleries[galleryName];

    if (!gallery || gallery.length === 0) {
      return;
    }

    currentGallery = gallery;
    currentIndex = 0;

    openGallery();

  });

});

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

/* =========================
   GALERÍA
========================= */
const galleries = {

  consultorio: [

    {
      src: "ingreso-consultorio.png",
      alt: "Pantalla de ingreso al sistema"
    },

    {
      src: "dashboard.png",
      alt: "Dashboard del sistema"
    },

    {
      src: "hc.png",
      alt: "Historia clínica"
    },

    {
      src: "hc2.png",
      alt: "Administración del sistema"
    },

    {
      src: "consulta.png",
      alt: "Consulta de historia clínica"
    }

  ],

  angular: [

    {
      src: "tienda-deco1.png",
      alt: "Página principal de la tienda"
    },

    {
      src: "tienda-deco2.png",
      alt: "Listado de productos de la tienda"
    },

    {
      src: "tienda-deco3.png",
      alt: "Carrito de compras desarrollado en Angular"
    },

    {
      src: "tienda-deco4.png",
      alt: "Detalle del carrito de compras"
    }

  ],

    interfaces: [

    {
      src: "numbers1.png",
      alt: "Página principal de Más amigos, más diversión"
    },

    {
      src: "numbers2.png",
      alt: "Sección del sitio web infantil"
    },

    {
      src: "numbers3.png",
      alt: "Interfaz del sitio web"
    },

    {
      src: "numbers4.png",
      alt: "Vista responsive del sitio web"
    }

  ]

};

const modal = document.getElementById("gallery-modal");
const galleryImage = document.getElementById("gallery-image");
const galleryCounter = document.getElementById("gallery-counter");

const closeButton = document.getElementById("gallery-close");
const prevButton = document.getElementById("gallery-prev");
const nextButton = document.getElementById("gallery-next");

let currentGallery = [];
let currentIndex = 0;


/* Abrir galería */

document.querySelectorAll("[data-gallery]").forEach(button => {

  button.addEventListener("click", () => {

    const galleryName = button.dataset.gallery;

    currentGallery = galleries[galleryName] || [];
    currentIndex = 0;

    if (!currentGallery.length) {
      return;
    }

    updateGallery();

    modal.classList.add("active");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

  });

});


/* Actualizar imagen */

function updateGallery() {

  const image = currentGallery[currentIndex];

  galleryImage.src = image.src;
  galleryImage.alt = image.alt;

  galleryCounter.textContent =
    `${currentIndex + 1} / ${currentGallery.length}`;

}


/* Cerrar */

function closeGallery() {

  modal.classList.remove("active");

  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

}


closeButton.addEventListener("click", closeGallery);


/* Anterior */

prevButton.addEventListener("click", () => {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = currentGallery.length - 1;
  }

  updateGallery();

});


/* Siguiente */

nextButton.addEventListener("click", () => {

  currentIndex++;

  if (currentIndex >= currentGallery.length) {
    currentIndex = 0;
  }

  updateGallery();

});


/* Cerrar haciendo click fuera */

modal.addEventListener("click", event => {

  if (event.target === modal) {
    closeGallery();
  }

});


/* Teclado */

document.addEventListener("keydown", event => {

  if (!modal.classList.contains("active")) {
    return;
  }

  if (event.key === "Escape") {
    closeGallery();
  }

  if (event.key === "ArrowLeft") {
    prevButton.click();
  }

  if (event.key === "ArrowRight") {
    nextButton.click();
  }

});
