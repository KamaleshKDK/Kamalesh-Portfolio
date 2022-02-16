function closeMenu(e) {
  document.getElementsByClassName("menu-wrap")[0].getElementsByClassName("toggler")[0].checked = !1
}

function validate() {
  var e = document.getElementById("name").value, n = document.getElementById("subject").value, t = document.getElementById("email").value, o = document.getElementById("message").value, a = document.getElementById("error_message")
  a.style.padding = "10px"
  console.log(o.length);
  var l
  if (o.length <= 50) {
    return l = "Enter More Than 50 Characters", a.style.background = "#ff3e55", a.innerHTML = l, a.style.marginTop = "15px", !1;
  }
  return e.length < 5 ? (l = "Enter a Valid Name", a.style.background = "#ff3e55", a.innerHTML = l, a.style.marginTop = "15px", !1) : n.length < 10 ? (l = "Enter a Correct Subject", a.style.background = "#ff3e55", a.innerHTML = l, !1) : -1 === t.indexOf("@") || t.length < 6 ? (l = "Enter a Valid Email", a.style.background = "#ff3e55", a.innerHTML = l, a.style.marginTop = "15px", !1) : o.length <= 100 ? (l = "Enter More Than 100 Characters", a.style.background = "#ff3e55", a.innerHTML = l, a.style.marginTop = "15px", !1) : (l = "Your Email Has Been Sent", a.style.background = "#00b33c", a.innerHTML = l, a.style.marginTop = "15px", !0)
}

function media1000() {
  x.matches ? document.getElementById("message").rows = "3" : document.getElementById("message").rows = "4"
}

var $header_top = $(".header-top")
$("#fullpage").fullpage({ sectionSelector: ".vertical-scrolling", slideSelector: ".horizontal-scrolling", navigation: !0, navigationPosition: "left", scrollingSpeed: 800, autoScrolling: !0, scrollHorizontally: !0, fitToSection: !0, recordHistory: !0, dragAndMove: !0, slidesNavigation: !0, controlArrows: !1, anchors: ["home", "about", "skills", "projects", "contact"], menu: "#menu", afterSlideLoad: function (e, n, t, o) { "fourthSection" == e && 1 == o && ($.fn.fullpage.setAllowScrolling(!1, "up"), $header_top.css("background", "transparent"), $nav.css("background", "transparent"), $(this).css("background", "#374140"), $(this).find("h2").css("color", "white"), $(this).find("h3").css("color", "white"), $(this).find("p").css({ color: "#ff3e55", opacity: 1, transform: "translateY(0)" })) }, onSlideLeave: function (e, n, t, o) { "fourthSection" == e && 1 == t && ($.fn.fullpage.setAllowScrolling(!0, "up"), $header_top.css("background", "rgba(0, 47, 77, .3)"), $nav.css("background", "rgba(0, 47, 77, .25)")) } })

const scrollDown = document.getElementById("scrollDown"), scrollUp = document.getElementById("scrollUp")
window.onload = function () {
  switch (location.hash) {
    case "#home": scrollDown.style.transform = "translateY(0%)"
      break
    case "": scrollDown.style.transform = "translateY(0%)"
      break
    default: scrollDown.style.transform = "translateY(180%)"
  }
}, window.onhashchange = function () {
  switch (location.hash) {
    case "#home": scrollDown.style.transform = "translateY(0%)"
      break
    default: scrollDown.style.transform = "translateY(180%)"
  }
}, document.getElementById("menu-links").addEventListener("click", closeMenu, !1)
var x = window.matchMedia("(max-width: 1000px)")
media1000(x), x.addListener(media1000)

//Particles

particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 2.2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": false });
var count_particles, stats, update;
stats = new Stats; stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
  stats.begin(); stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update);
};
requestAnimationFrame(update);


