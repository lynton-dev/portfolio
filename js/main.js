var hero_main = document.getElementById("hero_main");
var hero_footer = document.getElementById("hero_footer");
var main_content = document.getElementById("main_content");
var topnav_home = document.getElementById("topnav_home");

// Get the modal
var modal = document.getElementById("modal");
// Get the modal content container
var modalContent = document.getElementById("modal-content");
// Get the <span> element that closes the modal
var modalClose = document.getElementById("modal-close");
// Get the modal title <span> element
var modalTitle = document.getElementById("modal-title");
// Get the modal image
var modalImg = document.getElementById("modal-img");
// Get the modal image link
var modalImgLink = document.getElementById("modal-img-link");

function home() {
  Velocity("stop");
  Velocity(main_content, { opacity: 0, display: "none" }, 500);
  Velocity(topnav_home, { opacity: 0, display: "none" }, 500);
  Velocity(hero_main, { opacity: 1, display: "block" }, { delay: 500, duration: 500 });
  Velocity(hero_footer, { opacity: 1, display: "block" }, { delay: 500, duration: 500 });
}

function more() {
  Velocity("stop");
  Velocity(hero_main, { opacity: 0, display: "none" }, 500);
  Velocity(hero_footer, { opacity: 0, display: "none" }, 500);
  Velocity(main_content, { opacity: 1, display: "block" }, { delay: 500, duration: 500 });
  Velocity(topnav_home, { opacity: 1, display: "block" }, { delay: 500, duration: 500 });
}

window.onload = function () {
  if (window.location.hash == "") {
    home();
    hero_main.style.display = "block";
    hero_footer.style.display = "block";
  } else if (window.location.hash == "#my-works") {
    more();
  }
}

window.onhashchange = function() {
  Velocity("stop");
  modal.style.display = "none";
  modal.style.opacity = 0;

  if (window.location.hash == "") {
    home();
  } else if (window.location.hash == "#my-works") {
    more();
  }
}

// Check for Navigation Timing API support
if (window.performance) {
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    // This page is reloaded
    restorePageState();
  } else if (performance.navigation.type == performance.navigation.TYPE_BACK_FORWARD) {
    // Back or forward
    restorePageState();
  } else {

  }
}

function restorePageState() {
  // Restore page state from url hash
  Velocity("stop");
  modal.style.display = "none";
  modal.style.opacity = 0;

  if (window.location.hash == "") {
    hero_main.style.display = "block";
    hero_footer.style.display = "block";
    main_content.style.display = "none";
    topnav_home.style.display = "none";
    hero_main.style.opacity = 1;
    hero_footer.style.opacity = 1;
    main_content.style.opacity = 0;
    topnav_home.style.opacity = 0;
  } else if (window.location.hash == "#my-works") {
    hero_main.style.display = "none";
    hero_footer.style.display = "none";
    main_content.style.display = "block";
    topnav_home.style.display = "block";
    hero_main.style.opacity = 0;
    hero_footer.style.opacity = 0;
    main_content.style.opacity = 1;
    topnav_home.style.opacity = 1;
  }
}

/* Modal functions - Start */
function openImgModal(src, title) {
  if (modal != null && modal.style.display == "none"){
    modalTitle.innerHTML = title;
    modalImg.src = src;
    modalImgLink.href = src;

    Velocity("stop");
    // Show modal and reset scroll position to the top
    Velocity(modal, { opacity: 1, display: "block"} , { duration: 500, begin: () => { modalContent.scrollTop = 0; } });
    modal.style.display = "block";
    modal.style.opacity = 1;
  }
}

// When the user clicks on <span> (x), close the modal
modalClose.onclick = function() {
  closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

function closeModal() {
  if (modal != null && modal.style.display != "none"){
    Velocity("stop");
    Velocity(modal, { opacity: 0, display: "none" }, 500);
    //modal.style.display = "none";
  }
}
/* Modal functions - End */
