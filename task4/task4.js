// Задание 4

const form = document.querySelector('.form');
const inputFirst = document.querySelector('.inputfirst');
const inputSecond = document.querySelector('.inputsecond');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');
const error = document.querySelector('.error');

// Добавляем метод, регистрирующий нажатие на кнопку, при нажатии проверяем
// переданные значения на соответствие условиям, если условия соблюдени, то
// делаем запрос по url с заданными параметрами, в зависимости от результата,
// добавляем результат в html или выводим ошибку в консоль, если условия
// не соблюдены добавляем сообщение об этом в html
button.addEventListener('click', (e) => {
  e.preventDefault();
  const valueFirst = Number(inputFirst.value);
  const valueSecond = Number(inputSecond.value);
  if (
    valueFirst >= 100 &&
    valueFirst <= 300 &&
    valueSecond >= 100 &&
    valueSecond <= 300
  ) {
    fetch(`https://picsum.photos/${valueFirst}/${valueSecond}`)
      .then((response) => {
        result.innerHTML = `<img class="img" src="${response.url}" alt="" width="300px" height="250px">`;
      })
      .catch(() => {
        console.log('Что-то пошло не так');
      });
  } else {
    error.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
  }
});
