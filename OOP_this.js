
var cat = {
    name1: "Пушистик",
    name2: "Привет",
    name3: "Оладушек",
    name4: "Пока"
};

cat.catName = function () {
    console.log(this.name2 + " меня зовут " + this.name1 + " я ем " + this.name3);
};

cat.catName();

var dogName = function () {
    console.log(this.dogName2 + " меня зовут " + this.dogName1 + " я сейчас гуляю " + this.dogName3)
};

var dog = {
    dogName1: "Генрих",
    dogName2: "Привет",
    dogName3: "гуляю",
    dogName: dogName
};

var dog2 = {
    dogName1: "Мэри",
    dogName2: "Привет",
    dogName3: "гуляю",
    dogName: dogName
};

dog.dogName();
dog2.dogName();