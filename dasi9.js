var a = prompt("գրիրր a");
    var b = prompt("գրիրր b");
    var c = prompt("գրիրր c");
    var d = b * b - 4 * a * c;
    var result = document.getElementById("result");

    if (d < 0) {
      result.textContent = a + "x^2" + b + "x" + "+" + "(" + c + ")" + " ; " + "D=" + d + " ; " + "no solution";
    }
    if (d == 0) {
      var x = -b / 2 * a;
      result.textContent = a + "x^2" + b + "x" + "+" + "(" + c + ")" + " ; " + "D=" + d + " ; " + "x=" + x;
    }
    if (d > 0) {
      var x1 = (-1 * b + Math.sqrt(d)) / 2 * a;
      var x2 = (-1 * b - Math.sqrt(d)) / 2 * a;
      result.textContent = a + "x^2 + " + b + "x" + "+" + "(" + c + ")" + ";<br> " + "D=" + d + " ;<br> " + "x1=" + x1 + " ; " + " x2=" + x2;
    }
