var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testi");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
window.onload = function () {
  setInterval(function () {
    plusSlides(1);
  }, 3000);
};

/*MODAL -------------------------------------------------*/

// Get the modal 
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3= document.getElementById("myModal3");

// Get the button which opens the modal
var btn = document.getElementById("moredetail");
var btn2 = document.getElementById("moredetail2");
var btn3 = document.getElementById("moredetail3");

// Get the span element to close the modal
var span = document.getElementsByClassName("close")[0];

// user click the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

btn2.onclick = function () {
    modal2.style.display = "block";
  };

  btn3.onclick = function () {
    modal3.style.display = "block";
  };

// user clicks on span tag, close the modal
span.onclick = function () {
  modal.style.display = "none";
};
span.onclick = function () {
    modal2.style.display = "none";
  };
  span.onclick = function () {
    modal3.style.display = "none";
  };

// user click anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    
  }
  else if(event.target==modal2)
  {
    modal2.style.display="none";
  }
  else if(event.target==modal3)
  {
    modal3.style.display="none";
  }
};

/*Tabbed buttons -------------------------------------------------*/

const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove active
    tabButtons.forEach(button => {
      button.classList.remove('active');
    });
    // Add active 
    this.classList.add('active');

    // Get tab-pane
    const tabPaneId = this.id.replace('tab-button-', 'tab-pane-');
    const tabPane = document.getElementById(tabPaneId);

    // Hide all tab-panes
    tabPanes.forEach(pane => {
      pane.style.display = 'none';
    });
    // Show the related tab-pane
    tabPane.style.display = 'block';
  });
});

// Show the first tab-pane default
tabPanes[0].style.display = 'block';
tabButtons[0].classList.add('active');


/* Search and show */
const searchInput = document.getElementById('search-inp');
const searchButton = document.getElementById('search-button');
const posts = document.querySelectorAll('.post');

searchButton.addEventListener('click', function() {
  const keyword = searchInput.value.toLowerCase();

  // Hide all posts
  posts.forEach(post => {
    post.style.display = 'none';
  });

  // Show only the posts that matches the keyword
  posts.forEach(post => {
    if (post.textContent.toLowerCase().includes(keyword)) {
      post.style.display = 'block';
    }
  });
});

/* Responsive navbar */
function respnav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  /*sticky navbar*/
  const header = document.getElementById('header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});


/* smooth scroll effect */
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

/* accordion content */
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', function() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

/* carousel repeating script*/
const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.carousel-control-prev');
const next = document.querySelector('.carousel-control-next');

let currentIndex = 0;

items[currentIndex].classList.add('active');

prev.addEventListener('click', function() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  items[currentIndex].classList.add('active');
});

next.addEventListener('click', function() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add('active');
});


/* scroll to top */
let mybutton = document.getElementById("topbtn");

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

/* Header and Footer animation mouse hovers */
const header1 = document.querySelector('.topnav');
const footer = document.querySelector('.footer');

header1.addEventListener('mouseover', function() {
  header1.style.backgroundColor = '#fd0707';
});

header1.addEventListener('mouseout', function() {
  header1.style.backgroundColor = '#333';
});

footer.addEventListener('mouseover', function() {
  footer.style.backgroundColor = '#fd0707';
});

footer.addEventListener('mouseout', function() {
  footer.style.backgroundColor = '#333';
});
