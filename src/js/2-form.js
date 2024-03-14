const keyLS = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const data = {
    email,
    message,
  };

  console.log(data);

  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Fill in all fields of the form');
  }
  console.log(data);
  form.reset();
  localStorage.removeItem(keyLS);
}

function onFormInput() {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const data = {
    email,
    message,
  };

  saveToLS(keyLS, data);
}

function saveToLS(key, value) {
  const zip = JSON.stringify(value);
  localStorage.setItem(key, zip);
}
