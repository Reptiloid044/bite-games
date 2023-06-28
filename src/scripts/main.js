const englishOption = document.getElementById('english-option');
const arabicOption = document.getElementById('arabic-option');

englishOption.addEventListener('click', () => {
  englishOption.classList.add('hidden');
  arabicOption.classList.remove('hidden');
});

arabicOption.addEventListener('click', () => {
  arabicOption.classList.add('hidden');
  englishOption.classList.remove('hidden');
});

const openReadMore = document.getElementById('readMore-open');
const description = document.getElementById('description');

openReadMore.addEventListener('click', (event) => {
  event.preventDefault();
  description.classList.toggle('open');
  openReadMore.classList.toggle('rotate');
});

const phoneNumberInput = document.getElementById('phone-number');
const validationMessage = document.getElementById('number-validation-message');
const submitButton = document.getElementById('button-validation-green');
const registrationBlock = document.getElementById('registration');
const pinBlock = document.getElementById('pin');
const registrationForm = document.querySelector('.registration__form');
const resetBlock = document.getElementById('reset');

phoneNumberInput.addEventListener('input', () => {
  const phoneNumber = phoneNumberInput.value;

  if (phoneNumber.length === 10) {
    validationMessage.style.display = 'none';
    submitButton.classList.add('green');
  } else {
    validationMessage.style.display = 'block';
    submitButton.classList.remove('green');
  }
});

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

phoneNumberInput.addEventListener('input', () => {
  const phoneNumber = phoneNumberInput.value.replace(/\s/g, '');
  const isValidNumber = phoneNumber.length === 10;

  validationMessage.classList.toggle('valid', isValidNumber);

  if (isValidNumber) {
    submitButton.removeAttribute('disabled');
    validationMessage.style.display = 'none';
  }

  validationMessage.style.display = phoneNumber.length ? 'block' : 'none';

  submitButton.addEventListener('click', handleClick);

  function handleClick() {
    registrationBlock.style.display = 'none';
    pinBlock.style.display = 'flex';
    resetBlock.style.display = 'flex';
  }

  if (isValidNumber === 10) {
    pinBlock.style.display = 'none';
  } else {
    return;
  }

  pinBlock.style.display = phoneNumber.length ? 'block' : 'none';
});

const pinInputs = document.querySelectorAll('.pin__input');
const pinButton = document.getElementById('button-validation-pin');
const pinForm = document.querySelector('.pin__form');

const headerBlock = document.getElementById('headerBlock');
const sectionBlock = document.getElementById('sectionBlock');
const registration = document.getElementById('registrationBlock');
const readMoreBlock = document.getElementById('readMoreBlock');
const mainBlock = document.getElementById('mainBlock');

pinForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

pinInputs.forEach((input) => {
  input.addEventListener('input', () => {
    const pinValues = Array.from(pinInputs).map((input) => input.value);
    const isComplete = pinValues.every((value) => value !== '');
    console.log(pinValues, isComplete);

    if (isComplete) {
      pinButton.removeAttribute('disabled');
      pinButton.classList.add('green');
    } else {
      pinButton.setAttribute('disabled', 'disabled');
      pinButton.classList.remove('green');
    }
  });
});

pinButton.addEventListener('click', handleClick);

function handleClick() {
  mainBlock.style.display = 'block';
  headerBlock.style.display = 'none';
  headerBlock.style.display = 'none';
  sectionBlock.style.display = 'none';
  registration.style.display = 'none';
  readMoreBlock.style.display = 'none';
}

const slides = document.querySelector('.carousel__slides');
const slideImages = slides.getElementsByClassName('carousel__slide-image');
const arrowLeft = document.querySelector('#carousel__arrow-left');
const arrowRight = document.querySelector('#carousel__arrow-right');
const dots = document.querySelectorAll('.carousel__dot');

let currentSlide = 0;

function showSlide(index) {
  for (let i = 0; i < slideImages.length; i++) {
    slideImages[i].classList.remove('active');
  }

  slideImages[index].classList.add('active');

  dots.forEach((dot) => dot.classList.remove('active'));

  dots[index].classList.add('active');
}

arrowLeft.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
  showSlide(currentSlide);
});

arrowRight.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slideImages.length;
  showSlide(currentSlide);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);

const menuLink = document.getElementById('menuLink');
const closeMenu = document.getElementById('closeMenu');
const menuContent = document.getElementById('menuContent');
const bodyElement = document.body;

menuLink.addEventListener('click', () => {
  menuContent.classList.add('show');
  bodyElement.classList.add('prevent-click');
  bodyElement.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  menuContent.classList.remove('show');
  bodyElement.classList.remove('prevent-click');
  bodyElement.style.overflow = 'auto';
});

document.addEventListener('click', (event) => {
  const targetElement = event.target;
  if (!menuContent.contains(targetElement) && !menuLink.contains(targetElement)) {
    menuContent.classList.remove('show');
    bodyElement.classList.remove('prevent-click');
    bodyElement.style.overflow = 'auto';
  }
});
