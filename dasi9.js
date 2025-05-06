var a = prompt("գրիրր a");
    var b = prompt("գրիրր b");
    var c = prompt("գրիրր c");
    var d = b * b - 4 * a * c;
    var result = document.getElementById("result");

    if (d < 0) {
      result.textContent = a + "x^2" + b + "x" + "+" + "(" + c + ")" + " ; " + "no solution";
    }
    if (d == 0) {
      var x = -b / 2 * a;
      result.textContent = a + "x^2" + b + "x" + "+" + "(" + c + ")" + " ; " + "x=" + x;
    }
    if (d > 0) {
      var x1 = (-1 * b + Math.sqrt(d)) / 2 * a;
      var x2 = (-1 * b - Math.sqrt(d)) / 2 * a;
      result.textContent = a + "x^2" + b + "x" + "+" + "(" + c + ")" + " ; " + "x1=" + x1 + " ;" + " x2=" + x2;
    }
