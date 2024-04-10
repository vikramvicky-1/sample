document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector("input[name='display']");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.value;

      if (value === "=") {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
      } else if (value === "AC") {
        display.value = "";
      } else if (value === "C") {
        display.value = display.value.slice(0, -1);
      } else {
        display.value += value;
      }
    });
  });
});
