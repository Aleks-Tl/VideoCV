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
if (rangeInput) {
  let rangeInputValue = +rangeInput.value;
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
  } else if (positionVal > 93) {
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

// Tabs
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
    if (e.target.classList.contains('quality__item') || e.target.classList.contains('tabs__item')) {
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
  } else {
    for (let i = 0; i < tabContent.length; i++) {
      qualityWrap.append(tabContent[i]);
    }
  }

}

mobileTabs();
if (trustingTitle) {
  trustingContentMove();
}

document.addEventListener("DOMContentLoaded", function (event) {
  scrollFunction();
});
window.addEventListener("resize", function (event) {

  if (trustingTitle) {
    trustingContentMove();
  }
  mobileTabs();
});

// Function show password

function showPassword() {
  const btnShow = document.querySelectorAll('.show-password');
  const input = document.querySelectorAll('.show-pass');
  btnShow.forEach((elem) => {
    elem.addEventListener('click', () => {
      input.forEach((element) => {
        if (element.getAttribute('type') === 'password') {
          element.setAttribute('type', 'text');

        } else {
          element.setAttribute('type', 'password');
        }
      });
    });
  });
}
showPassword();



// Validation

function valideForms(form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      company: "required",
      pass: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    /* messages: {
      name: {
        required: "Fill in this field",
      },
      pass: "Fill in this field",
      email: {
        required: "Fill in this field",
        email: "You entered your email incorrectly"
      }
    } */
  });
};

valideForms('#form-one');
valideForms('#form-two');
valideForms('#form-three');
valideForms('#form-four');
valideForms('#forgot');

// graph


let graphVals = $('#rangevalue').text();

let data = [{
  '': Math.round(graphVals)
},
{
  '': Math.round(graphVals - 10)
},
{
  '': Math.round(graphVals * 0.2)
},
{
  '': Math.round(graphVals * 0.4)
}
];

const barcolor = [
  '#7600FF',
  '#7600FF',
  '#00BF8D',
  '#00BF8D',

];
const graph = {
  barId: 'graphCanvas', // Need To pass canvas id  and mandatory to generate the bar graph
  barData: data, // Bar data in the form of array of object and mandatory to pass atleast 1 value
  barColour: barcolor, // Bar colour as array and the default value is '#020202'
  barStroke: 40, // Bar Stroke as per your requirement and the default value is 50
  barSpaces: 50, // Space between 2 bar graph and the default value is 80
  barInnerPadding: 50, // Padding inside all side of the canvas and the default value is 80
  barDivisionPositionFromLineX: 20, // X-Axis division position from left side of the bar graph and the deafult value is 20
  barDivisionPositionFromLineY: 20, // Y-Axis division position from bottom side of the bar graph and the deafult value is 20
  barAnimation: true, // Used to define the animation from the bottom to top position and the default value is true
  barAnimationSpeed: 1, // Define the animation spedd of the graph and the default value is 1
  barTextFont: "16px Poppins", // Define font size with font family name and the default value is 14px Arial
  barDivision: 5, // Define the division to the Y-Axis and the default value is 5
  barScaleDivisionReqX: true, // Define the scale division marking to the X-Axis and the default value is true
  barScaleDivisionReqY: true, // Define the scale division marking to the Y-Axis and the default value is true
  barScaleDivisionY: 20, // Define the manually setup the Y-Axis division upto the highest value of your array default value is null
  barScaleDivisionStroke: 1, //Define the stroke of scale division and the default value is 1
  barScaleDivisionColour: '#333', //Define the stroke colour of the scale division and the default value is #333
  barAxisLineStroke: 2, //Define the stroke of the X & Y-Axis line and the default value is 1
  barAxisLineColour: '#333', //Define the stroke colour of the X & Y-axis line and the default value is #333
  barMaxHeight: 100 // Define the maximum height of the Y-Axis line of the bar graph and the default value is null
};

generateBarGraph(graph);

let inpVal = $('.range_container input');

inpVal.on('change', function(){
  graphVals = +$('#rangevalue').text();

  graph.barData = [{
    '': graphVals
  },
  {
    '': graphVals - 10
  },
  {
    '': Math.round(graphVals * 0.2)
  },
  {
    '': Math.round(graphVals * 0.4)
  }
  ];

  console.log(graph.barData);
  $('#graphCanvas').remove();
  $('.canvas_wrap').append('<canvas id="graphCanvas" width="350" height="350"></canvas>')
  generateBarGraph(graph);
});

// graph
