var formula = prompt("Գրիր հավասարման տեսակը (գծային կամ քառակուսային)");
var result = document.getElementById("result");

if (formula === "գծային") {
  var k = parseFloat(prompt("Գրիր k (kx + b = y)"));
  var b = parseFloat(prompt("Գրիր b (" + k + "x + b = y)"));
  var y = parseFloat(prompt("Գրիր y (" + k + "x + " + b + " = y)"));

  if (isNaN(k) || isNaN(b) || isNaN(y)) {
    result.innerHTML = "Սխալ մուտքագրում։ Մուտքագրիր թվեր։";
  } else if (k === 0) {
    result.innerHTML = k + "x + " + b + " = " + y + "<br>Լուծում չկա (k = 0)";
  } else {
    var x = (y - b) / k;
    result.innerHTML = k + "x + " + b + " = " + y + "<br>x = " + x;
  }
}

else if (formula === "քառակուսային") {
  var a = parseFloat(prompt("Գրիր a (ax² + bx + c = 0)"));
  var b = parseFloat(prompt("Գրիր b (" + a + "x² + bx + c = 0)"));
  var c = parseFloat(prompt("Գրիր c (" + a + "x² + (" + b + ")x + c = 0)"));

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    result.innerHTML = "Սխալ մուտքագրում։ Մուտքագրիր թվեր։";
  } else if (a === 0) {
    result.innerHTML = "Սա քառակուսային չէ (a = 0)";
  } else {
    var d = b * b - 4 * a * c;
    var equationText = a + "x² + (" + b + ")x + (" + c + ") = 0";

    if (d < 0) {
      result.innerHTML = equationText + "<br>Լուծում չկա (արմատ չկա)";
    } else if (d === 0) {
      var x = -b / (2 * a);
      result.innerHTML = equationText + "<br>x = " + x;
    } else {
      var x1 = (-b + Math.sqrt(d)) / (2 * a);
      var x2 = (-b - Math.sqrt(d)) / (2 * a);
      result.innerHTML = equationText + "<br>x₁ = " + x1 + " ; x₂ = " + x2;
    }
  }
}

else {
  result.innerHTML = "Սխալ մուտքագրված հավասարման տեսակ։ Մուտքագրիր 'գծային' կամ 'քառակուսային'";
}

