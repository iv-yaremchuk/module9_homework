// Задание 1

const parserXml = new DOMParser();

const xmlList = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

// Создаём парсер для xml, находим все ноды student
const xmlDom = parserXml.parseFromString(xmlList, 'text/xml');
const studentNodes = xmlDom.querySelectorAll('student');

let result = {
  list: [],
};

// Используя цикл проходим по всем нодам, содержимое присваиваем переменным
studentNodes.forEach((elem) => {
  let fullnameNode = elem.querySelector('name');
  let firstnameNode = elem.querySelector('first').textContent;
  let secondnameNode = elem.querySelector('second').textContent;
  let ageNode = Number(elem.querySelector('age').textContent);
  let profNode = elem.querySelector('prof').textContent;
  let langNode = fullnameNode.getAttribute('lang');

  // Записываем результат парсинга в созданный заранее список
  result.list.push({
    name: `${firstnameNode} ${secondnameNode}`,
    age: ageNode,
    prof: profNode,
    lang: langNode,
  });
});

console.log(result);
