// typed js
const typed = new Typed(".typing", {
    strings: ["Bot Developer", "penetration tester", "Web Developer"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 40,
  });
  
  // Theme changer
  const themes = [
    "#9affe1",
    "#abff9a",
    "#ff9a9a",
    "#f5ff9a",
    "#9aadff",
    "#ffd280",
    "#adff6b",
    "#6bfaff",
    "#55F7DD",
    "#7BF774",
    "#F770F4",
    "#E2F780",
  ];
  const root = document.querySelector(":root");
  const themeToggle = document.querySelector("#main-name");
  let currentTheme = 0;
  
  const changeTheme = () => {
    currentTheme++;
    if (currentTheme == themes.length) {
      currentTheme = 0;
    }
    root.style.setProperty("--main-accent", themes[currentTheme]);
  };
  themeToggle.addEventListener("click", () => {
    changeTheme();
  });
  
  let scrolling = false;
  window.addEventListener("scroll", () => {
    if (!scrolling) {
      changeTheme();
      scrolling = true;
      setTimeout(() => (scrolling = false), 5000);
    }
  });
  
  const hamburger = document.querySelector("#mobile-menu");
  const tabs = document.querySelector(".navbar__menu");
  //display hamburger menue
  const mobileMenu = () => {
    hamburger.classList.toggle("is-active");
    tabs.classList.toggle("active");
  };
  
  hamburger.addEventListener("click", mobileMenu);
  
  function getYPosition(){
    var top  = window.pageYOffset || document.documentElement.scrollTop
    return top;
    console.log(top)
  }
  
  getYPosition()
  
//highlight active menu
const navLogo = document.querySelector("#navbar__logo");
const highlightMenu = () => {
  const activeElement = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const skillsMenu = document.querySelector("#skills-page");

  let scrollPos = window.scrollY;
  if (window.innerWidth > 960 && scrollPos < 500) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 900) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    skillsMenu.classList.remove("highlight");

    return;
  } else if (window.innerWidth > 960 && scrollPos < 1500) {
    aboutMenu.classList.remove("highlight");
    skillsMenu.classList.add("highlight");
    return;
  }


  if (
    (activeElement && window.innerWidth < 960 && scrollPos < 600) ||
    activeElement
  ) {
    activeElement.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//close mobile menu on item click
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    hamburger.classList.toggle("is-active");
    tabs.classList.remove("active");
  }
};

tabs.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
