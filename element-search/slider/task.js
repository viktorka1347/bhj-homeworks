const maxIndex = 5;
let n = 0;

const sliders = document.getElementsByClassName('slider__item');
const dots = document.getElementsByClassName('slider__dot');

const prev = document.getElementsByClassName('slider__arrow_prev')[0];
const next = document.getElementsByClassName('slider__arrow_next')[0];

function setSlide() {
  sliders[n].className = 'slider__item slider__item_active';
  dots[n].className = 'slider__dot slider__dot_active';
}
function clearSlide() {
  sliders[n].className = 'slider__item';
  dots[n].className = 'slider__dot';
}
for (let i = 0; i < maxIndex; i++) {
  dots[i].index = i;
  dots[i].onclick = function() {
    if (n === this.index)
      return;
    clearSlide();
    n = this.index;
    setSlide();
  }
}
prev.onclick = function() {
  clearSlide();
  n--;
  if (n < 0) 
    n = maxIndex - 1;
  setSlide();
}
next.onclick = function() {
  clearSlide();
  n++;
  if (n >= maxIndex) 
    n = 0;
  setSlide();
}