const formData = { email: '', message: '' };

const localKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
populateText();

function handleInput(event) {
  const key = event.target.name;
  formData[key] = event.target.value.trim();
  localStorage.setItem(localKey, JSON.stringify(formData));
}
function populateText() {
  const data = JSON.parse(localStorage.getItem(localKey));
  if (!data) {
    return;
  }
  const { email, message } = form.elements;
  email.value = data.email || '';
  message.value = data.message || '';
  formData.email = data.email || '';
  formData.message = data.message || '';
}

function handleSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localKey);
    formData.email = '';
    formData.message = '';
    form.reset();
  }
}
