$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use $.get() or $.ajax()
   const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
   
      $.get(url, function(response) {
         let html = "<ol>";
         if(response.error) {
            html += response.error;
         } else {
            response.forEach(function(quoteObj) {
               html += `<li>${quoteObj.quote} - ${quoteObj.source}</li>`;
            });
         }
         html += "</ol>";
         $("#quotes").html(html);
      }, "json");

   let html = "<ol>";
   for (let c = 0; c < count; c++) {
      html += `<li>Quote ${c + 1} - Anonymous</li>`;
   }
   html += "</ol>";

   $("#quotes").html(html);
}
