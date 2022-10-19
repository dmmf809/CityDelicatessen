"use strict";

//Mobile Nav
const toggleMenu = () => {
  const toggleMenu = document.querySelector(".nav-bars");
  const navLinks = document.querySelectorAll(".nav-link");
  const navigation = document.querySelector(".nav-menu");
  //Adds active class to the toggle menu and navigation
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
  // For each links clicked, remove 'active' class from the toggle menu and navigation
  navLinks.forEach((n) => {
    n.addEventListener("click", () => {
      toggleMenu.classList.remove("active");
      navigation.classList.remove("active");
    });
  });
};
