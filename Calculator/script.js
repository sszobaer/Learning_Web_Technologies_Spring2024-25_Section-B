function appendValue(val) {
    document.getElementById("display").value += val;
  }

  function clearDisplay() {
    document.getElementById("display").value = '';
  }

  function calculate() {
    try {
      const result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch {0000
      alert("Invalid Expression");
    }
  }