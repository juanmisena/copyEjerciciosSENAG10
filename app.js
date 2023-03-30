document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      let navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
      document.querySelector('.go-top').style.display = "flex";
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      document.body.style.paddingTop = 0;
      document.querySelector('.go-top').style.display = "none";
    }
  });
  document.querySelector('.go-top').addEventListener('click', (e) => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
});