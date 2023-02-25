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

// TODO: Modify to use Fetch API
function fetchQuotes(topic, count) {
   const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
 
   fetch(url)
     .then(response => {
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
   })
     
     .then(data => {
      let html = "<ol>";
      data.forEach(quote => {
         html += `<li>${quote.quote} - ${quote.source}</li>`;
      });
      html += "</ol>";
      document.querySelector("#quotes").innerHTML = html;
   })
     
     .catch(error => {
      console.error(error);
      document.querySelector("#quotes").innerHTML = `Topic '${topic}' not found`;
   });
 }
