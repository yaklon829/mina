// 簡單的滑動提示
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  slider.addEventListener("wheel", (e) => {
    e.preventDefault();
    slider.scrollLeft += e.deltaY;
  });
});