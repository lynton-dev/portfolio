function home() {
  var hero_main = document.getElementById("hero_main");
  var hero_footer = document.getElementById("hero_footer");
  var main_content = document.getElementById("main_content");
  
  if (window.getComputedStyle(hero_main).getPropertyValue("opacity") == 0) {
    Velocity(main_content, { opacity: 0 }, { display: "none" }, 1000);
    Velocity(hero_main, { opacity: 1 }, { display: "block", delay: 500, duration: 1000 });
    Velocity(hero_footer, { opacity: 1 }, { display: "block", delay: 500, duration: 1000 });
  }
}

function more() {
  var hero_main = document.getElementById("hero_main");
  var hero_footer = document.getElementById("hero_footer");
  var main_content = document.getElementById("main_content");
  
  if (window.getComputedStyle(hero_main).getPropertyValue("opacity") != 0) {
    Velocity(hero_main, { opacity: 0 }, { display: "none" }, 1000);
    Velocity(hero_footer, { opacity: 0 }, { display: "none" }, 1000);
    Velocity(main_content, { opacity: 1 }, { display: "block" , delay: 500, duration: 1000 });
  }
}
