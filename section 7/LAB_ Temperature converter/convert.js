window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   cInput.addEventListener("input", () => {
      fInput.value = ""; 
   })

   fInput.addEventListener("input", () => {
      cInput.value = ""; 
   })

   convertButton.addEventListener("click", (e) => {
      e.preventDefault(); 

      if (cInput.value !== "") {
         var tempC = parseFloat(cInput.value);
         if (isNaN(tempC) && cInput.value.search(" C") != -1) { 
            var tempC2 = parseFloat(tempC);
         if (isNaN(tempC2)) {
            errorMessage.innerText = cInput.value + " is not a number";
            errorMessage.style.color = "red";
            return; 
         }
         }
          
         var arr = [];
         if (cInput.value.search(" ") != -1) {
            arr.split(" ");
            var tempF = convertCtoF(arr[0]);
            fInput.value = tempF; 
         }

         else {
            var tempF = convertCtoF(tempC);
            fInput.value = tempF; 
         }
         
         if (tempF > 50) { 
            weatherImage.src = "warm.png"; 
         } else if (tempF >= 32 && tempF <= 50) { 
            weatherImage.src = "cool.png";
         } else { 
            weatherImage.src = "cold.png";
         }
      }
      
      else if (fInput.value !== "" ) {
         var tempF = parseFloat(fInput.value);
         if (isNaN(tempF)) { 
            tempF = parseFloat(fInput.value);
            if (isNaN(tempF)) {
               errorMessage.innerText = fInput.value + " is not a number";
               errorMessage.style.color = "red";
               return; 
            }
          }
         var tempC = convertFtoC(tempF);
         cInput.value = tempC; 

         if (tempF > 50) { 
            weatherImage.src = "warm.png"; 
         } else if (tempF >= 32 && tempF <= 50) {
            weatherImage.src = "cool.png";
         } else {
            weatherImage.src = "cold.png";
         }
      }
   })
}

function convertCtoF(degreesCelsius) {
   return (degreesCelsius * 9/5 + 32);
}

function convertFtoC(degreesFahrenheit) {
   return ((degreesFahrenheit - 32) * 5/9);
}
