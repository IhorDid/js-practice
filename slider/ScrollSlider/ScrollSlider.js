// export default class ScrollSliderTrack {
//   constructor(selector) {
//     //   Отримуємо селектор
//     this.element =
//       typeof selector === 'string'
//         ? document.querySelector(selector)
//         : selector;
//     console.log(this.element);

//     if (!this.element) {
//       throw new Error(`Element ${selector} not found`);
//     }
//     this.currentIndex = 0;
//   }

//   // Наші слайди
//   get slides() {
//     return [...this.element.children];
//   }

//   // Ширина скролу
//   scrollByAmount(amount) {
//     this.element.scrollBy({ left: amount });
//   }

//   scrollToIndex(index) {
//     const targetSlide = this.slides[index];
//     if (targetSlide) {
//       this.element.scrollTo({
//         left: targetSlide.offsetLeft,
//         behavior: 'smooth',
//       });
//       this.currentIndex = index;
//     }
//   }

//   // Наступний слайд
//   getNextSlide() {
//     // const currentScroll = this.element.scrollLeft;
//     // const nextSlide = this.slides.find(
//     //   slide => slide.offsetLeft > currentScroll,
//     // );
//     // if (nextSlide) {
//     //   return nextSlide.offsetLeft - currentScroll;
//     // } else {
//     //   const firstSlide = this.slides[0];
//     //   if (firstSlide) {
//     //     return firstSlide.offsetLeft - currentScroll;
//     //   }
//     //   return 0;
//     // }
//     const newIndex =
//       (this.currentIndex + 1 + this.slides.length) % this.slides.length;
//     this.scrollToIndex(newIndex);
//   }

//   // Попередній слайд
//   getBackSlide() {
//     // const currentScroll = this.element.scrollLeft;
//     // const prevSlide = [...this.slides]
//     //   .reverse()
//     //   .find(slide => slide.offsetLeft < currentScroll);
//     // if (prevSlide) {
//     //   return currentScroll - prevSlide.offsetLeft;
//     // } else {
//     //   const lastSlide = this.slides[this.slides.length - 1];
//     //   if (lastSlide) {
//     //     return currentScroll - lastSlide.offsetLeft;
//     //   }
//     //   return 0;
//     // }
//     const newIndex =
//       (this.currentIndex - 1 + this.slides.length) % this.slides.length;
//     this.scrollToIndex(newIndex);
//   }

//   // Скрол наступного слайду
//   scrollToNext() {
//     this.scrollByAmount(this.getNextSlide());
//   }

//   // Скрол попереднього слайду
//   scrollToBack() {
//     this.scrollByAmount(-this.getBackSlide());
//   }
// }

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

    this.element.innerHTML += this.element.innerHTML;

    this.slideWidth = this.element.children[0].offsetWidth;

    this._teleporting = false;

    this.element.addEventListener('scroll', () => this._checkLoop());
  }

  // Наші слайди
  get slides() {
    return [...this.element.children];
  }

  // Ширина скролу
  scrollByAmount(amount) {
    this.element.scrollBy({ left: amount, behavior: 'smooth' });
  }

  // Наступний слайд
  getNextSlide() {
    return this.slideWidth;
  }

  // Попередній слайд
  getBackSlide() {
    return this.slideWidth;
  }

  // Скрол наступного слайду
  scrollToNext() {
    this.scrollByAmount(this.getNextSlide());
  }

  // Скрол попереднього слайду
  scrollToBack() {
    this.scrollByAmount(-this.getBackSlide());
  }

  // Перевірка для нескінченного скролу
  _checkLoop() {
    if (this._teleporting) return;

    const half = this.element.scrollWidth / 2;
    const x = this.element.scrollLeft;
    const eps = 2;

    if (x >= half - eps) {
      this._teleporting = true;
      this.element.classList.add('no-smooth');
      this.element.classList.add('no-snap');
      this.element.scrollLeft = x - half + 1;
      requestAnimationFrame(() => {
        this.element.classList.remove('no-smooth');
        this.element.classList.remove('no-snap');
        this._teleporting = false;
      });
    } else if (x <= eps) {
      this._teleporting = true;
      this.element.classList.add('no-smooth');
      this.element.classList.add('no-snap');
      this.element.scrollLeft = x + half;
      requestAnimationFrame(() => {
        this.element.classList.remove('no-smooth');
        this.element.classList.remove('no-snap');
        this._teleporting = false;
      });
    }
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
