function parseScores(scoresString) {
   var arr = scoresString.split(" ");
   return arr;
}

function buildDistributionArray(scoresArray) {
   const arr = [0,0,0,0,0];

   for (i = 0; i < scoresArray.length; i++) {
       var score = parseInt(scoresArray[i]);
       if (score >= 90 && score <= 100) {
           arr[0]++
       }
       else if (score >= 80 && score <=89) {
           arr[1]++
       }
       else if (score >= 70 && score <=79) {
           arr[2]++
       }
       else if (score >= 60 && score <=69) {
           arr[3]++
       }
       else if (score <= 59) {
           arr[4]++
       }
   }
   return arr;
}

function setTableContent(userInput) {
   var scores = parseScores(userInput);
   var occurance = buildDistributionArray(scores);
   var table = document.getElementById('distributionTable');
   
   if(userInput.length > 0){
       table.innerHTML =`
           <tr>
               <td><div style='height:0px' class='bar0'></div></td>
               <td><div style='height:0px' class='bar1'></div></td>
               <td><div style='height:0px' class='bar2'></div></td>
               <td><div style='height:0px' class='bar3'></div></td>
               <td><div style='height:0px' class='bar4'></div></td>
               </tr>
               <tr>
               <td>A</td>
               <td>B</td>
               <td>C</td>
               <td>D</td>
               <td>F</td>
               </tr>
               <tr>
               <td class="grade"></td>
               <td class="grade"></td>
               <td class="grade"></td>
               <td class="grade"></td>
               <td class="grade"></td>
           </tr>`;
   
       for (j = 0; j < occurance.length; j++) {
           var barNum = document.getElementsByClassName("bar"+j);
           document.getElementsByClassName("grade")[j].innerHTML = occurance[j]+"";
           barNum[0].style.height = (10 * occurance[j])+"px";
       } 
   }
   else{
       table.innerHTML = "<tr><td>No graph to display</td></tr>";
   }
}

function bodyLoaded() {
   // The argument passed to writeTableContent can be changed for 
   // testing purposes
   setTableContent("45 78 98 83 86 99 90 59");
}