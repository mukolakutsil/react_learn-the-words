import React from 'react';

import './App.css';

import ContentBlock from './components/ContentBlock';
import FooterBlock from './components/FooterBlock';
import H1 from './components/H1';
import HeaderBlock from './components/HeaderBlock/index.js';
import Paragraph from './components/Paragraph';

const contentText = `В JavaScript параметры функции, которым при её вызове не передаются значения,
принимают по умолчанию значение undefined.Однако в некоторых случаях может быть полезно задать иное значение по умолчанию.
Именно для таких случаев предназначены параметры по умолчанию.
В прошлом для проверки параметров и задания их значений по умолчанию использовался
код в теле функции, в котором проверялось, не равны ли значения параметров undefined.
В приведённом ниже примере, в случае если при вызове функции значение для параметра b не передавалось,
  его значением становилось undefined, и результатом вычисления a * b в функции multiply получалось
значение NaN.`;

const wordsList = [
  {
    eng: 'between',
    uk: 'між'
  },
  {
    eng: 'high',
    uk: 'високий'
  },
  {
    eng: 'translete',
    uk: 'перекладати'
  },
  {
    eng: 'really',
    uk: 'справді'
  },
  {
    eng: 'something',
    uk: 'що-небудь'
  },
  {
    eng: 'most',
    uk: 'більшість'
  },
  {
    eng: 'another',
    uk: 'інший'
  },
  {
    eng: 'much',
    uk: 'багато'
  },
  {
    eng: 'family',
    uk: 'сім"я'
  },
  {
    eng: 'own',
    uk: 'особистий'
  },
  {
    eng: 'out',
    uk: 'зовні'
  },
  {
    eng: 'leave',
    uk: 'залишати'
  },
];

const contentTitle = "Як ці вправи допоможуть Вам у вивченні англійських слів?";

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
      >
        {contentTitle && <H1 pad={50} >{contentTitle}</H1>}
        {contentText && <Paragraph fz={15} lh={30}>{contentText}</Paragraph>}
      </ContentBlock>

      <ContentBlock
        wordsList={wordsList}
        bgColor="#F0F8FF"
      >
        {contentTitle && <H1 pad={50} >Спробуйте перекласти слова)</H1>}
      </ContentBlock>
      <FooterBlock />
    </>
  );
}

export default App;
