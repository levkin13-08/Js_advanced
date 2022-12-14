class Ready {
    constructor(element) {
        this.name = element.value;
        this.price = +element.dataset['price'];
        this.calories = +element.dataset['calories'];
    }
}

class Burger {
    constructor(size, add, topping) {
        this.size = new Ready(this._select(size));
        this.add = new Ready(this._select(add));
        this.toppings = this._getToppings(topping);
    }

    _getToppings = (name) => {
        let result = [];
        this._selectAll(name).forEach(el => {
            let obj = new Ready(el);
            result.push(obj);
        });
        return result;
    }

    _select = (name) => {
        return document.querySelector(`input[name=${name}]:checked`)
    }

    _selectAll = (name) => {
        return [...document.querySelectorAll(`input[name=${name}]:checked`)];
   }

   sumPrice () {
    let priceSum = this.size.price + this.add.price;
    this.toppings.forEach(el => {
        priceSum += el.price;
    });
    return priceSum;
   }

   sumCalories () {
    let caloriesSum = this.size.calories + this.add.calories;
    this.toppings.forEach (el => {
        caloriesSum += el.calories;
    });
    return caloriesSum;
   }

   showSum(price, calories) {
    document.querySelector(price).textContent = this.sumPrice();
    document.querySelector(calories).textContent = this.sumCalories();
   }
}