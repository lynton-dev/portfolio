function home() {
  var hero_main = document.getElementById("hero_main");
  var hero_footer = document.getElementById("hero_footer");
  var main_content = document.getElementById("main_content");
  var topnav_home = document.getElementById("topnav_home");

  Velocity("stop");
  Velocity(main_content, { opacity: 0 }, { display: "none" }, 1000);
  Velocity(topnav_home, { opacity: 0 }, { display: "none" }, 1000);
  Velocity(hero_main, { opacity: 1 }, { display: "block", delay: 500, duration: 1000 });
  Velocity(hero_footer, { opacity: 1 }, { display: "block", delay: 500, duration: 1000 });
}

function more() {
  var hero_main = document.getElementById("hero_main");
  var hero_footer = document.getElementById("hero_footer");
  var main_content = document.getElementById("main_content");
  var topnav_home = document.getElementById("topnav_home");

  Velocity("stop");
  Velocity(hero_main, { opacity: 0 }, { display: "none" }, 1000);
  Velocity(hero_footer, { opacity: 0 }, { display: "none" }, 1000);
  Velocity(main_content, { opacity: 1 }, { display: "block" , delay: 500, duration: 1000 });
  Velocity(topnav_home, { opacity: 1 }, { display: "block" , delay: 500, duration: 1000 });
}

window.onhashchange = function() {
  if (window.location.hash == "") {
    home();
  } else if (window.location.hash == "#my-works") {
    more();
  }
}
