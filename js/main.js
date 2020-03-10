function more() {
  var hero_main = document.getElementById("hero_main");
  var hero_footer = document.getElementById("hero_footer");
  var main_content = document.getElementById("main_content");
  
  if (window.getComputedStyle(hero_main).getPropertyValue("opacity") == 0) {
    //Velocity(hero_main, "reverse", { duration: 1000 });
    Velocity(hero_main, { opacity: 1 }, 1000);
    Velocity(hero_footer, { opacity: 1 }, 1000);
    Velocity(main_content, { opacity: 0 }, 1000);
    hero_main.style.display = "block"
    hero_footer.style.display = "block";
    main_content.style.display = "none";
  } else {
    Velocity(hero_main, { opacity: 0 }, 1000);
    Velocity(hero_footer, { opacity: 0 }, 1000);
    Velocity(main_content, { opacity: 1 }, 1000);
    hero_main.style.display = "none"
    hero_footer.style.display = "none";
    main_content.style.display = "block";
  }
}
