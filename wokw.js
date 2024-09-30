document.addEventListener('DOMContentLoaded', function () {
    const span = document.getElementById("toggle-span");
    const img = document.getElementById("image");
  
    let isRotating = false;
  
    span.addEventListener("click", () => {
    
      if (img.style.display === "none" || img.style.display === "") {
        img.style.display = "block"; 
        img.classList.add("rotate"); 
        isRotating = true;
      } else if (isRotating) {
        
        img.classList.remove("rotate");
        img.style.display = "none";
        isRotating = false;

      } else {
        img.classList.add("rotate");
        isRotating = true;

      }
    });
  });
  