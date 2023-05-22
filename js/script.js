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

// Navbar box shadow
const navbar = document.querySelector('.my-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add('nav-shadow');
  } else {
    navbar.classList.remove('nav-shadow');
  }
});

// Underline navbar items
const navLinks = document.querySelectorAll('.navbar-nav a');
const activeIndicator = document.getElementById('active');

function underlineActive() {
  const scrollPosition = window.scrollY;

  navLinks.forEach((link, index) => {
    const section = document.getElementById(link.getAttribute('href').substring(1));
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionBottom - 200) {
      const linkWidth = link.offsetWidth;
      const linkLeft = link.offsetLeft;
      activeIndicator.style.display = 'block';
      activeIndicator.style.width = `${linkWidth + 14}px`;
      activeIndicator.style.left = `${linkLeft - 6}px`;
    } else if (index === 0 && scrollPosition < sectionTop - 200) {
      // Reset active styling when scroll position is above the portfolio section
      activeIndicator.style.width = '0';
      activeIndicator.style.left = `${navLinks[0].offsetLeft - 6}px`;
    }
  });
}

// Check the initial window width
if (window.innerWidth > 600) {
  // Attach the event listener only if the window width is above the threshold
window.addEventListener('scroll', underlineActive);
}


const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarCloseButton = document.querySelector('.navbar-close-button');

navbarToggler.addEventListener('click', () => {
  navbarCloseButton.style.display = 'block';
  navbarCollapse.classList.toggle('show');
});

navbarCloseButton.addEventListener('click', () => {
  navbarCollapse.classList.remove('show');
});
