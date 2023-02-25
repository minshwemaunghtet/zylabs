function drawTriangle(size) {
   let output = "";
   for (let i = 1; i <= size; i++) {
     // Add asterisks for this line
     output += "*".repeat(i);
     // Add newline character at the end of each line except the last one
     if (i !== size) {
       output += "\n";
     }
   }
   // Output the triangle to the console
   console.log(output);
 }
 