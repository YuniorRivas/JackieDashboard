document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.id;
      filterCards(category);
    });
  });
});

function filterCards(category) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (category === 'showAll' || card.classList.contains(category)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
