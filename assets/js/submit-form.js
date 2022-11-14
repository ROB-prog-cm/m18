const form = document.getElementById('form')
const modal = document.getElementById('modal')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.parentNode.removeChild(form)
  modal.style.cssText += 'display: flex;';
})

