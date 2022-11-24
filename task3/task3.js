// Задание 3

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');
const error = document.querySelector('.error');

let reqUrl = 'https://picsum.photos/v2/list?limit=';

button.addEventListener('click', changeUrl);

// Создаём функцию проверки заданных условий, если проверка пройдена,
// отправляем переданные параметры в функцию отравки запроса, если нет,
// добавляем в html сообщение об этом
function changeUrl(e) {
  e.preventDefault();
  if (Number(input.value) >= 1 && Number(input.value) <= 10) {
    reqUrl += Number(input.value);
    getRequest(reqUrl);
  } else {
    error.textContent = 'число вне диапазона от 1 до 10';
  }
}

// Создаём функцию отправки запроса XHR по url с заданными ранее параметрами,
// добавляем полученный результат в html, сбрасываем заданные параметры для
// корректной работы при последующем использовании
function getRequest(url) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function () {
    const response = JSON.parse(xhr.response);
    response.forEach((elem) => {
      result.innerHTML += `<img class="img" src="${elem.download_url}" alt="" width="300px" height="250px">`;
    });
  };
  xhr.send();

  error.textContent = '';
  input.style.display = 'none';
  button.textContent = 'Повторить';
  button.removeEventListener('click', changeUrl);
}
