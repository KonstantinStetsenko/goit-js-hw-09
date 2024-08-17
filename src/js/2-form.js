let formData = { email: '', message: '' };

const form = document.querySelector('form');
const input = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

// Восстановление данных из localStorage при загрузке страницы
const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
  input.value = savedData.email;
  textarea.value = savedData.message;
}
form.addEventListener('input', eveyn => {
  if (input.value.trim() !== '' || textarea.value.trim() !== '') {
    formData.email = input.value.trim();
    formData.message = textarea.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});
form.addEventListener('submit', evt => {
  formData.email = input.value.trim();
  formData.message = textarea.value.trim();
  // localStorage.setItem(localStorageKey, JSON.stringify(formData));
  evt.preventDefault();

  if (input.value !== '' && textarea.value !== '') {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    window.alert('Пожалуйста, заполните все поля');
  }
});
