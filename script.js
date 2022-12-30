
  // let str = "Любо, братцы, любо!";
  // let result = str.match(/любо/i);
  // console.log(result);
  let slider1 = createSlider();
let slider2 = createSlider();

slider1.start("itk-slider1");
slider2.start("itk-slider2");

function createSlider() {
  let newSlider = {
    leftButton: null, // document.querySelector('.slider__leftButton'),
    rightButton: null, // document.querySelector('.slider__rightButton'),
    img: null, // document.querySelector('.image'),
    arr: [
      "img/morskoj-bereg.jpg",
      "img/berez.jpg",
      "img/fantastika_volk_32929.jpg",
      "img/fantastika_drakon_15114.jpg",
      "img/fantastika_skelet_30421.jpg",
    ],
    curentIndex: 0,
    getLeft: function (event) {
      this.curentIndex--;
      this.img.src = this.arr[this.curentIndex];
      if (this.curentIndex === 0) {
        this.leftButton.disabled = true;
      }
      this.rightButton.disabled = false;
    },
    getRight: function (event) {
      this.curentIndex++;
      this.img.src = this.arr[this.curentIndex];
      this.leftButton.disabled = false;
      if (this.curentIndex === this.arr.length - 1) {
        this.rightButton.disabled = true;
      }
      this.leftButton.disabled = false;
    },
    start: function (elId) {
      let el = document.querySelector("#" + elId);
      this.leftButton = el.querySelector(".slider__leftButton");
      this.rightButton = el.querySelector(".slider__rightButton");
      this.img = el.querySelector(".image");
      let that = this;
      this.rightButton.addEventListener("click", function (event) {
        that.getRight(event);
      });
      this.leftButton.addEventListener("click", function (event) {
        that.getLeft(event);
      });
      this.leftButton.disabled = true;
    },
  };
  return newSlider;
};