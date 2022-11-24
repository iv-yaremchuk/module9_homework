// Задание 2

const jsonList = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }
`;
// преобразуем json в объект js, выводим результат в консоль
const parserJson = JSON.parse(jsonList);
console.log(parserJson);
