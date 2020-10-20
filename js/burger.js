const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navigation = document.querySelector(".menu");
  const navLinks = document.querySelectorAll(".menu-list");
  const newsLinks = document.querySelector('.quotes');
  const companyNews = document.querySelector('.company-news');

  burger.addEventListener("click", () => {
    // Открытие/закрытие бургера
    navigation.classList.toggle("nav-active");

    // Выезд списпа меню
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // Анимация бургера
    burger.classList.toggle("toggle");
  });
};
navSlide();