const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

buttons.forEach(function (btn) {
      btn.addEventListener("click", (e) => {
            calculate(e.target.value);
      });
});

function setDisplay(val) {
      display.value = val;
}

function calAndDisplay() {
      var newDisplay;
      try {
            newDisplay = eval(display.value);
      } catch (e) {
            alert("bad input");
            setDisplay("");
            return;
      }

      if (display.value !== "") setDisplay(newDisplay);
}

function calculate(val) {
      if (val === "=") {
            calAndDisplay(val);
            return;
      }
      if (val === "AC") {
            setDisplay("");
            return;
      }

      display.value = display.value + val;
}
