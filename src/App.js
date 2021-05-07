import React from 'react';
import './App.css';
import ContentBlock from './components/ContentBlock';
import FooterBlock from './components/FooterBlock';
import HeaderBlock from './components/HeaderBlock/index.js';

const contentText = `В JavaScript параметры функции, которым при её вызове не передаются значения,
принимают по умолчанию значение undefined.Однако в некоторых случаях может быть полезно задать иное значение по умолчанию.
Именно для таких случаев предназначены параметры по умолчанию.
В прошлом для проверки параметров и задания их значений по умолчанию использовался
код в теле функции, в котором проверялось, не равны ли значения параметров undefined.
В приведённом ниже примере, в случае если при вызове функции значение для параметра b не передавалось,
  его значением становилось undefined, и результатом вычисления a * b в функции multiply получалось
значение NaN.`;

function App() {
  return (
    <>
      <HeaderBlock
        title="Вчіть слова онлайн"
        descr="Використовуйте карточки для швидкого запам'ятовування англійських слів"
      />
      <HeaderBlock
        title="Вчіть)"
        hideBackground
        descr="Використовуйте карточки для швидкого запам'ятовування англійських слів"
      />
      <ContentBlock
        contentTitle="Як ці вправи допоможуть Вам у вивченні англійських слів?"
        contentText={contentText}
      />
      <FooterBlock />
    </>
  );
}

export default App;
