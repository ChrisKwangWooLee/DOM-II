// Your code goes here

// 1. mouseover
let logoHeading = document.querySelector('.container .logo-heading');
logoHeading.addEventListener('mouseover', function(event) {
    event.target.style.color = 'pink';
});

// 2. mouseleave
logoHeading.addEventListener('mouseleave', event => {
    event.target.style.color = 'black';
})

// 3. keydown
function keyPressed(e) {
  logoHeading.textContent = logoHeading.textContent + ` ${e.code.substring(3, 5).toLowerCase()}`
  console.log(e.code);
}
document.addEventListener('keydown', keyPressed);


// 4. wheel
let welcome = document.querySelector('.content-destination img');
welcome.addEventListener('wheel', function(event) {
    event.target.style.transform = 'scale(1.3)';
    event.target.style.transition = 'transform 1s';
})

// 5. load
window.addEventListener('load', event => {
    console.log('website has been loaded');
})
 
// 6. resize
const output = document.querySelector('.text-content h2')
window.addEventListener('resize', () => {
    output.textContent = `Width: ${window.innerWidth.toString()}  Height: ${window.innerHeight.toString()}`;
})

//7. scroll
let last_known_scroll_position = 0;
let ticking = false;
const scrollOutput = document.querySelector('.intro h2');

function doSomething(scroll_position) {
    // Do something with the scroll position
    scrollOutput.textContent = `Scroll position: ${scroll_position}`;
}

window.addEventListener('scroll', event => {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
        });
        ticking = true;
    }
})

//8. select
// function handleSelect(e) {
//     const selectOutput = document.querySelector('.intro p');
//     const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
//     console.log(selection)
//     selectOutput.textContent = `Your selection has ${selection} characters.`;
// }

// const input = document.querySelector('input');
// console.log(input);
// input.addEventListener('select', handleSelect);

// 9. dbclick

const handledbClick = event => {
    event.target.style.opacity = '0.3';
    event.target.style.transition = 'opacity 0.6s';
}

const busImg = document.querySelector('.intro img');
busImg.addEventListener('dblclick', handledbClick);

// 10. readystatechange
let loadingHandler = function() {
    console.log('Second state: this is when loading happens');
}
console.log(`First state: ${document.readyState}`);
if (document.readyState === 'loading') {
    loadingHandler();
} else {
    console.log('Loading complete')
}
document.addEventListener('readystatechange', () => {
    console.log(`Third state: ${document.readyState}, this is after state change`);
}); 

// 11. drag / drop   ISSUE!!
let dragImage = document.querySelectorAll('img');
console.log(dragImage);

dragImage.forEach(el => {
    el.addEventListener('dragstart', event => {
        event.target.style.opacity = '0.3';
    });
});




// 11. Drag and Drop REFERENCE!
var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

});

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
});

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
});

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
});

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "footer") {
    event.target.style.background = "purple";
  }

});

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "footer") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "footer") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);



// stop propagation
let parent = document.querySelector('.content-section');
let child = document.querySelector('.text-content');

child.addEventListener('click', event => {
    event.target.style.background = 'pink';
    console.log('Child color change');
    event.stopPropagation();
})

parent.addEventListener('click', event => {
    event.target.style.background = 'purple';
    console.log('Parent color change')
})


// prevent default
let navItems = document.querySelectorAll('.nav .nav-link');
navItems.forEach(el => {
    el.addEventListener('click', event => {
        if (el.className !== 'animation') {
            event.preventDefault();
            console.log('prevent default activated')
        }
    })
});

