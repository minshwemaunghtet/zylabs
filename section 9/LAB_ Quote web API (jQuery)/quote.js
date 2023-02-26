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

   let html = "<ol>";
   for (let c = 0; c < count; c++) {
      html += `<li>Quote ${c + 1} - Anonymous</li>`;
   }
   html += "</ol>";

   $("#quotes").html(html);
}
