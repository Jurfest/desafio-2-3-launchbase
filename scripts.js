const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

// cards.map(card => card.addEventListener());
for (let card of cards) {
  card.addEventListener("click", function() {
    const videoId = card.getAttribute('id'); // or just: card.id
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`
  })
}

document.querySelector('.close-modal').addEventListener("click", function() {
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src = ""
})

