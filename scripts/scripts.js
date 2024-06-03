document.addEventListener("DOMContentLoaded", function() {
    var formControls = document.querySelectorAll(".form-control");
  
    function handleInput(event) {
      if (event.target.value.length !== 0) {
        event.target.closest(".form-group").classList.add("show-label");
      } else {
        event.target.closest(".form-group").classList.remove("show-label");
      }
    }
  
    formControls.forEach(function(element) {
      if (element.value.length !== 0) {
        element.closest(".form-group").classList.add("show-label");
      }
      element.addEventListener("keyup", handleInput);
      element.addEventListener("keydown", handleInput);
      element.addEventListener("cut", handleInput);
      element.addEventListener("paste", handleInput);
      element.addEventListener("change", handleInput);
      element.addEventListener("focus", handleInput);
      element.addEventListener("drop", handleInput);
    });
  
    var tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
    tooltips.forEach(function(tooltip) {
      tooltip.addEventListener("mouseover", function() {
        tooltip.setAttribute("data-original-title", tooltip.getAttribute("title"));
        tooltip.removeAttribute("title");
      });
      tooltip.addEventListener("mouseout", function() {
        tooltip.setAttribute("title", tooltip.getAttribute("data-original-title"));
        tooltip.removeAttribute("data-original-title");
      });
    });
  });
  // for date picker
  $(document).ready(function () {
    $('#datepicker').datepicker();
});