/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const collapsibles = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapsibles.length; i++)
 {
   collapsibles[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var otherContent = this.nextElementSibling;
     if (otherContent.style.display === "flex")
     {
       otherContent.style.display = "none";
       otherContent.style.maxHeight = "0";
     } else
     {
       otherContent.style.display = "flex";
       otherContent.style.maxHeight = "100%";
     }
   })
 }
 

const observer = new IntersectionObserver((entries) =>
{
  entries.forEach((entry) => 
  {
    console.log(entry);
    if(entry.isIntersecting)
    {
      entry.target.classList.add('show');
    } else
    {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});