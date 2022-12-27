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
  console.log(worker);
  console.log(worker.getSalary());