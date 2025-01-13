const scrollBtn = document.querySelector('.bukaundangan'); const Quotes = document.getElementById('quotes'); const Pemelai = document.getElementById('pemelai');
scrollBtn.addEventListener('click', () => { Quotes.style.display = 'flex'; Quotes.scrollIntoView({ behavior: 'smooth' }); Pemelai.style.display = 'flex'; });
let btn_location = document.querySelector(".btn-location")
btn_location.addEventListener("click", () => { window.location.href = "https://maps.app.goo.gl/9LYr3uDbZmoeDrU3A" })
const countdownElement = document.querySelector('.countdown');
const deadline = new Date('2025-12-20T09:00:00');

function countdown() {
  const now = new Date();
  const distance = deadline.getTime() - now.getTime();

  if (distance < 0) {
    countdownElement.innerHTML = 'Waktu habis!';
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
      <div class="box">
        <p>${days}</p>
        <span>Hari</span>
      </div>
      <div class="box">
        <p>${hours}</p>
        <span>Jam</span>
      </div>
      <div class="box">
        <p>${minutes}</p>
        <span>Menit</span>
      </div>
      <div class="box">
        <p>${seconds}</p>
        <span>Detik</span>
      </div>
    `;
  }
}

setInterval(countdown, 1000);

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

window.onresize = function(event) {
    reloadSlider();
};