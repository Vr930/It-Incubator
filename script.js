class Worker {
    constructor(name, surname, rate, days) {
      this._name = name;
      this._surname = surname;
      this._rate = rate;
      this._days = days;
    };
    getSalary() {
      return this._rate * this._days;
    };
    getName() {
      return this._name;
    };
    getSurname() {
      return this._surname;
    };
    getRate() {
      return this._rate;
    };
    getDays() {
      return this._days;
    };
    setRate(value) {
      this._rate = value;
    }
    setDays(value) {
      this._days = value;
    }
  }

  let worker = new Worker('Иван', 'Иванов', 10, 31);

  worker.setRate(20); //увеличим ставку
  worker.setDays(10); //уменьшим дни


  const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);

class Validator{
  constructor() {

  }
  isEmail(str) {
      if(str.indexOf('@') !== -1 && str.indexOf('.') !== -1) {
          return true;
      }
      return false;
  }
  isDate(str) {
     return str.match(/[0-9]{2}\.\d\d\.\d{4}/) === null ? false : true;
  }
  isPhone (str) {
      return str.match(/\+375\ \(\d\d\)\ \d{3}-\d\d-\d\d/) === null ? false : true
  }
  }

  let validator = new Validator();
  console.log(validator.isPhone('+375 (29) 817-68-92'));

  3

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
      "/img/morskoj-bereg.jpg",
      "/img/berez.jpg",
      "/img/fantastika_volk_32929.jpg",
      "/img/fantastika_drakon_15114.jpg",
      "/img/fantastika_skelet_30421.jpg",
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
