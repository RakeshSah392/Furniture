// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//increment decrement button js
let count = 0;
const value = document.getElementById('value');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');

incBtn.addEventListener('click', () => {
  count++;
  value.textContent = count;
});

decBtn.addEventListener('click', () => {
  count--;
  value.textContent = count;
});
