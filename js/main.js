/*
Задание:
1. Добавьте значения по умолчанию для аргументов функции. Как можно упростить 
или сократить запись функций?

Ответ:
Для оптимизации кода и улучшения быстродействия приложения 
лучше убрать поиск элемента из тела функции, чтобы поиск елемента 
срабатывал однократно после формирования DOM, а не при каждом вызове функции.
Для этого нужно создать переменную вне функции и присвоить ей 
результат поиска - элемент с классом ".products". 
Вот так: 
let elProducts = document.querySelector(".products");
Затем в теле функции использовать уже элемент elProducts.

2. Сейчас после каждого товара на странице выводится запятая. Из-за чего это 
происходит? Как это исправить?

Ответ:
Это происходит из-за разделителя строк.
Чтобы избавиться от лишнего символа - запятой, нужно собрать все строки 
из массива в одну строку без разделителя. Для этого целесообразно использовать 
метод .join("").

*/

"use strict";

const products = [
  { id: 1, title: "Notebook", price: 1000 },
  { id: 2, title: "Mouse", price: 100 },
  { id: 3, title: "Keyboard", price: 250 },
  { id: 4, title: "Gamepad", price: 150 },
];

let elProducts = document.querySelector(".products");

const renderProduct = (title = "TV", price = 120000) => {
  return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
};

const renderProducts = (list) => {
  elProducts.innerHTML = list
    .map((good) => {
      return renderProduct(good.title, good.price);
    })
    .join("");
  console.log(elProducts);
};

renderProducts(products);
