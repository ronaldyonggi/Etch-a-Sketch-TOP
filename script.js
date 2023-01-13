let rows = document.querySelectorAll('.row');

// Iterate through each row
rows.forEach(row => {
  // For each row, create a div square 4 times
  for (let i = 0; i < 4; i++) {
    let square = document.createElement('div')
    // Add class 'square' to the created square
    square.classList.add('square')
    square.addEventListener('mouseover', event => {
      event.target.style.backgroundColor = 'green';

      // Reset color after a short period of time
      setTimeout(() => {
        event.target.style.backgroundColor = '';
      }, 2000);
    });
    row.appendChild(square);
  }
});