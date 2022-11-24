// Задание 5

const form = document.querySelector('.form');
const inputFirst = document.querySelector('.inputfirst');
const inputSecond = document.querySelector('.inputsecond');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');
const error = document.querySelector('.error');

// Добавляем событие загрузки DOM, при выполнении которого,
// из localStorage будут взяты и добавленны в HTMl переданные
// ранее данные
document.addEventListener('DOMContentLoaded', () => {
  let savedSession = localStorage.getItem('images');
  if (savedSession) {
    result.innerHTML = savedSession;
  }
});

// Добавляем событие по нажатию кнопки, при выполнении которого,
// будет выполнена проверка введённых пользователем значений на
// соответствие заданныи условиям, при невыполнении каждого условия,
// в html будет добавленно сообщение об этом, если все условия выполнены,
// то в функцию отправки запроса выполняется с переданными значениями
button.addEventListener('click', (e) => {
  e.preventDefault();
  const valueFirst = Number(inputFirst.value);
  const valueSecond = Number(inputSecond.value);

  if (inputFirst >= 1 && inputFirst <= 10) {
    error.textContent = 'Номер страницы вне диапазона от 1 до 10';
  } else if (inputSecond >= 1 && inputSecond <= 10) {
    error.textContent = 'Лимит вне диапазона от 1 до 10';
  } else if (
    inputFirst >= 1 &&
    inputFirst <= 10 &&
    inputSecond >= 1 &&
    inputSecond <= 10
  ) {
    error.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
  } else {
    getRequest(valueFirst, valueSecond);
  }
});

// Создаём функцию отправки запроса XHR по url с заданными ранее параметрами,
// после получения ответа от сервера, очищаем localStorage, добавляем полученные
// данные в html и записываем в localStorage
function getRequest(page, limit) {
  let reqUrl = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
  console.log(reqUrl);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', reqUrl, true);

  xhr.onload = function () {
    const response = JSON.parse(xhr.response);
    let content = ``;
    localStorage.clear();

    for (let item of response) {
      content += `<img class="img" src="${item.download_url}" alt="" width="300px" height="250px">`;
    }
    localStorage.setItem('images', content);
    result.innerHTML = content;
  };
  xhr.send();
}
