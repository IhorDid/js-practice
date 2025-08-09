export default class ScrollSliderTrack {
  constructor(selector) {
    this.element =
      typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;
    console.log(this.element);

    if (!this.element) {
      throw new Error(`Element ${selector} not found`);
    }
  }

  scrollByAmount(amount) {
    this.element.scrollBy({ left: amount });
  }
}

const mySlider = new ScrollSliderTrack('.scroll-slider-track');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
console.log(nextBtn);

nextBtn.addEventListener('click', () => {
  mySlider.scrollByAmount(100);
});
console.log('mySlider', mySlider);
