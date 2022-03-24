import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

const burger = document.querySelector('.burger'),
  menu = document.querySelector('.nav-menu').firstElementChild,
  pageBody = document.querySelector('.page__body'),
  menuLink = document.querySelectorAll('.nav-menu a'),
  loginRight = document.querySelector('.header__right');

menuLink.forEach(function (el) {
  if (window.location.pathname.indexOf(el.getAttribute('href')) > -1) {
    el.classList.add('active');
  }
});

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('transformation');
  pageBody.classList.toggle('lock');
  loginRight.classList.toggle('active');
});


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('header').classList.add('backgroundWhite');
  } else {
    document.querySelector('header').classList.remove('backgroundWhite');
  }
}



let cookies = document.querySelector('.cookies'),
  btnDecline = document.querySelector('.decline'),
  btnAccept = document.querySelector('.accept');


function acceptCookies() {
  localStorage.setItem('accepted', true);
}

function declineCookies() {
  localStorage.setItem('accepted', false);
}

function getCookies() {
  let accepted = localStorage.getItem('accepted');
  if (accepted == 'true') {
    cookies.style.display = 'none';
  } else {
    cookies.style.display = 'block';
  }
}

setTimeout(() => {
  // cookies.style.display = 'block';
  getCookies();

}, 2000);

btnDecline.addEventListener('click', () => {
  declineCookies();
  cookies.style.display = 'none';
});

btnAccept.addEventListener('click', () => {
  acceptCookies();
  cookies.style.display = 'none';
});

const rangeInputs = document.querySelectorAll('input[type="range"]');
const numberInput = document.querySelector('input[type="number"]');

const rangeVal = document.getElementById('rangevalue');

const rangeInput = document.querySelector('.range_container input');
if(rangeInput){
  let  rangeInputValue = +rangeInput.value;
  rangeVal.style.left = (rangeInputValue - 5) + '%';
}

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== 'range') {
    target = document.getElementById('range');
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;
  let positionVal = val;
  if (positionVal < 3) {
    positionVal = 3;
  }
  else if (positionVal > 93) {
    positionVal = 93;
  }
  rangeVal.style.left = (positionVal - 3) + '%';

  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

  rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange);
  });


//numberInput.addEventListener('input', handleInputChange);

const trustingTitle = document.querySelector('.left-trusting__title');
const trustingContent = document.querySelector('.right-trusting__wrap');
const rightTrustingImg = document.querySelector('.right-trusting__img');
const image = document.querySelector('.image');



function getWindowWidth() {
  return window.innerWidth || document.body.clientWidth;
}
function trustingContentMove() {
  if (getWindowWidth() <= 768) {
    trustingTitle.after(trustingContent);
  } else {
    rightTrustingImg.before(trustingContent);
  }
}


function Tabs() {
  let bindAll = function () {
    let menuElements = document.querySelectorAll('[data-tab]');
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  };

  let clear = function () {
    let menuElements = document.querySelectorAll('[data-tab]');
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  };

  let change = function (e) {
    clear();
    if (e.target.classList.contains('quality__item')) {
      e.target.classList.add('active');
    } else {
      e.target.parentNode.classList.add('active');
    }
    let id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  };

  bindAll();
}

var connectTabs = new Tabs();

function mobileTabs() {

  let tab = document.querySelectorAll('[data-tab]');
  let tabContent = document.querySelectorAll('.quality__content');
  let qualityWrap = document.querySelector('.quality__wrap');
  if (getWindowWidth() <= 576) {
    for (let i = 0; i < tabContent.length; i++) {

      let id = tabContent[i].getAttribute('id');
      let tab = document.querySelector(`[data-tab="${id}"]`);

      tab.after(tabContent[i]);
      console.log(document.querySelector(`[data-tab="${id}"]`));
    }
  }
  else {
    for (let i = 0; i < tabContent.length; i++) {
      qualityWrap.append(tabContent[i]);
    }
  }

}


/* let switchMonth = document.querySelector('.price__switch_month');
let switchYear = document.querySelector('.price__switch_year');
let switchInput = document.querySelector('#price');

if (switchInput.checked) {
  switchMonth.classList.add('active');
} else {
  switchMonth.classList.remove('active');
}
 */
mobileTabs();
if (trustingTitle){
  trustingContentMove();
}

document.addEventListener("DOMContentLoaded", function (event) {
  scrollFunction();
});
window.addEventListener("resize", function (event) {
  
  if (trustingTitle){
    trustingContentMove();
  }
  mobileTabs();
});