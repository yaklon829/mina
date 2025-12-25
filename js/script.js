// 平滑滾動（保險用，舊瀏覽器支援）
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 幻燈片自動輪播
let currentIndex = 0;
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const total = images.length;

function showSlide(index) {
  const offset = -index * 100; // 每張圖佔滿 100%
  slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % total;
  showSlide(currentIndex);
}

// 每 3 秒自動切換
setInterval(nextSlide, 3000);
