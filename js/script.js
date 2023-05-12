// Form validation
const form = document.querySelector('form');
const emailInput = document.getElementById('user_email');
const mailError = document.querySelector('.error');

const emailCaseChecker = () => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    mailError.innerText = 'Email should be in lower case';
  } else {
    mailError.innerText = '';
    form.submit();
  }
};

form.addEventListener('submit', (e) => {
  emailCaseChecker();
  e.preventDefault();
});

// Local Storage
const nameInput = document.getElementById('user_name');
const messageInput = document.getElementById('user_message');

const store = () => {
  const contactFormData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
};

nameInput.addEventListener('keyup', store);
emailInput.addEventListener('keyup', store);
messageInput.addEventListener('keyup', store);

const contactInfo = JSON.parse(localStorage.getItem('contactFormData'));

if (contactInfo) {
  nameInput.value = contactInfo.name;
  emailInput.value = contactInfo.email;
  messageInput.value = contactInfo.message;
}