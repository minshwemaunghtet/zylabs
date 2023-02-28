window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest

   var url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
   var httpRequest = new XMLHttpRequest();
   httpRequest.addEventListener("load", responseReceivedHandler);
   httpRequest.responseType = "json";
   httpRequest.open("GET", url);
   httpRequest.send();
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler() {
   var res = "";

   if(this.response.error) {
      res = this.response.error;
   }
   
   else {
      res += "<ol>";
   
      for (let c = 0; c < this.response.length; c++) {
         res += `<li>${this.response[c].quote} - ${this.response[c].source}</li>`;
      }
      res += "</ol>";
   }

   document.getElementById("quotes").innerHTML = res;
}