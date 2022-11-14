const main = document.getElementById('arrow')
const footer = document.getElementById('to-footer')

main.addEventListener("click", () => {
  window.scroll({top: 900, behavior: 'smooth'});
});
footer.addEventListener("click", () => {
  window.scroll({top: 2000, behavior: 'smooth'});
});
