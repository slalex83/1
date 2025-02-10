document.querySelectorAll('.program-list-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
    item.classList.toggle('active');
  });
});

// document.querySelectorAll('.questions-item').forEach(item => {
//   const itemContainer = item;

//   itemContainer.addEventListener('click', () => {
//     item.classList.toggle('open');
//     itemContainer.classList.toggle('active');
//   });
// });
