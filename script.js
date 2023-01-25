// let rows = document.querySelectorAll('.row');

let sliderSpan = document.getElementById('sliderSpan');
let slider = document.getElementById('slider')
sliderSpan.innerText = slider.value;

// Update slider value each time the slider is dragged
slider.oninput = () => {
  sliderSpan.innerText = slider.value;
  document.getElementById('board').remove();
  newBoard(slider.value);
}
// Iterate through each row
// rows.forEach(row => {
//   // For each row, create a div square 4 times
//   for (let i = 0; i < 4; i++) {
//     let square = document.createElement('div')
//     // Add class 'square' to the created square
//     square.classList.add('square')
//     square.addEventListener('mouseover', event => {
//       event.target.style.backgroundColor = 'green';

//       // Reset color after a short period of time
//       setTimeout(() => {
//         event.target.style.backgroundColor = '';
//       }, 2000);
//     });
//     row.appendChild(square);
//   }
// });

// Create an n x n square divs
function newBoard(n) {
  let board = document.createElement('div')
  board.id = 'board'

  for (let i = 0; i < n; i++) { // rows
    for (let j = 0; j < n; j++) { // columns
      let square = document.createElement('div')
      square.classList.add('square');

      square.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'yellow';

        setTimeout(() => {
          event.target.style.backgroundColor = '';
        }, 2000);
      })

      board.appendChild(square);
    }
  }

  board.style.gridTemplateColumns = `repeat(${n}, auto)`
  board.style.gridTemplateRows = `repeat(${n}, 30px)`

  document.body.appendChild(board)
}

newBoard(slider.value)