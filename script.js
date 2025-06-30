const noBtn = document.querySelector('.yes-btn');

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * 300);
  const y = Math.floor(Math.random() * 300);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
