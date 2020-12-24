var form = document.getElementById("form");
var htmlcd = document.getElementById("target");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var opcija = document.getElementById("opcija").value;
  var text = document.getElementById("text").value;
  var htmlcd = document.getElementById("target");
  var pdf = new jsPDF();
  var txtp = [
    "Lorem Ipsum is simply dummy " +
      text +
      " text of the printing and typesetting",
    "industry. Lorem Ipsum has been the industry's standard dummy",
    "text ever since the 1500s, when an unknown printer took a galley",
    "of type and scrambled it to make a type specimen book. It has",
    "survived not only five centuries, but also the leap into electronic",
    "Opcija je " + opcija,
  ];
  //pdf.canvas.height = 10 * 11;
  //pdf.canvas.width = 80 * 8.5;
  //pdf.fromHTML(htmlcd); //Your HTML content goes here
  //pdf.save("test.pdf");
  //pdf.line(20, 20, 60, 20);
  //-----------------------------------------------------------
  //pdf.text(`Ime: ${text} Proba 123450392`, 20, 20);

  pdf.setFont("helvetica");
  pdf.setFontSize(12);
  pdf.text(txtp, 15, 30, { align: "justify", maxWidth: "180" });
  //--------------------------------------------------------------

  pdf.save("output.pdf");
});
