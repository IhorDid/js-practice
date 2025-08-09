export default class ScrollSliderTrack {
  constructor(selector) {
    //   Отримуємо селектор
    this.element =
      typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;
    console.log(this.element);

    if (!this.element) {
      throw new Error(`Element ${selector} not found`);
    }
  }

  // Наші слайди
  get slides() {
    return [...this.element.children];
  }

  // Ширина скролу
  scrollByAmount(amount) {
    this.element.scrollBy({ left: amount });
  }

  // Наступний слайд
  getNextSlide() {
    const currentScroll = this.element.scrollLeft;
    const nextSlide = this.slides.find(
      slide => slide.offsetLeft > currentScroll,
    );
    if (nextSlide) {
      return nextSlide.offsetLeft - currentScroll;
    } else {
      const firstSlide = this.slides[0];
      if (firstSlide) {
        return firstSlide.offsetLeft - currentScroll;
      }
      return 0;
    }
  }

  // Попередній слайд
  getBackSlide() {
    const currentScroll = this.element.scrollLeft;
    const prevSlide = [...this.slides]
      .reverse()
      .find(slide => slide.offsetLeft < currentScroll);
    if (prevSlide) {
      return currentScroll - prevSlide.offsetLeft;
    } else {
      const lastSlide = this.slides[this.slides.length - 1];
      if (lastSlide) {
        return currentScroll - lastSlide.offsetLeft;
      }
      return 0;
    }
  }

  // Скрол наступного слайду
  scrollToNext() {
    this.scrollByAmount(this.getNextSlide());
  }

  // Скрол попереднього слайду
  scrollToBack() {
    this.scrollByAmount(-this.getBackSlide());
  }
}

const mySlider = new ScrollSliderTrack('.scroll-slider-track');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
console.log(nextBtn);
console.log(backBtn);

nextBtn.addEventListener('click', () => {
  mySlider.scrollToNext();
});

backBtn.addEventListener('click', () => {
  mySlider.scrollToBack();
});

console.log(mySlider.slides);
