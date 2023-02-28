let timerId = null;

window.addEventListener("DOMContentLoaded", function() {
   document.addEventListener("click", startAnimation);
});

function startAnimation(e) {

   // Get mouse coordinates
   clearInterval(timerId);
   let clickX = e.clientX;
   let clickY = e.clientY;  
   
   // TODO: Modify the code below
   moveImage(clickX, clickY);   
}

function moveImage(x, y) {
   const img = document.querySelector("img");
            
   // Determine location of image
   let imgX = parseInt(img.style.left);
   let imgY = parseInt(img.style.top);

   // Determine (x,y) coordinates that center the image 
   // around the clicked (x, y) coords
   const centerX = Math.round(x - (img.width / 2));
   const centerY = Math.round(y - (img.height / 2));

   // TODO: Add code here
   timerId = setInterval(function () {
      // Moving the image in the x direction.
      if (imgX < centerX) {
         imgX++;
      } else if (imgX > centerX) {
         imgX--;
      }
      
      // Moving the image in the y direction.
      if (imgY < centerY) {
         imgY++;
      } else if (imgY > centerY) {
         imgY--;
      }

      // Set the new position of the image using CSS
      img.style.left = imgX + "px";
      img.style.top = imgY + "px";
      // Stop the timer when the image has reached the target position.
      if (imgX === centerX && imgY === centerY) {
         clearInterval(timerId);
      }
  }, 10);
}