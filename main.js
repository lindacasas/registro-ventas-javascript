const products = {
  "Aqua": 200,
  "Emoción": 180,
  "Alegría": 160,
  "Frescura": 150
};

let juanaSales = [];
let pedroSales = [];

function register() {
  juanaSales = [
    parseInt(document.getElementById('juana-aqua').value),
    parseInt(document.getElementById('juana-emocion').value),
    parseInt(document.getElementById('juana-alegria').value),
    parseInt(document.getElementById('juana-frescura').value)  
  ];

  pedroSales = [
    parseInt(document.getElementById('pedro-aqua').value),
    parseInt(document.getElementById('pedro-emocion').value),
    parseInt(document.getElementById('pedro-alegria').value),
    parseInt(document.getElementById('pedro-frescura').value)
  ];

  if (juanaSales.some(isNaN) || pedroSales.some(isNaN)) {
    alert("Por favor, ingrese valores numéricos en todos los campos");
    return;
  } else if (juanaSales.some(num => num < 0) || pedroSales.some(num => num < 0)) {
    alert("Por favor, ingrese valores positivos en todos los campos");
    return;
  } else {
    alert("Registro exitoso");
    clear();
  }
}

function employeeOfMonth() {
  if (juanaSales.length <1 && pedroSales.length <1) {
    alert("Primero debe registrar los valores de todas las ventas");
    return;
  }

  if (hasNaN(juanaSales) || hasNaN(pedroSales) || hasNegative(juanaSales) || hasNegative(pedroSales)) {
    alert("Primero debe registrar los valores de todas las ventas");
    return;
  }

  document.querySelector('.container-result').style.display = 'block';

  const calculateTotal = (sales) => {
    let total = 0;
    for (let i = 0; i < sales.length; i++) {
      total += sales[i] * products[Object.keys(products)[i]];
    }
    return total;     
  };

  const juanaTotal = calculateTotal(juanaSales);
  const pedroTotal = calculateTotal(pedroSales);

  let resultText = "";
  resultText += "<strong> Cantidad de productos vendidos por Juana:</strong><br>";
  for (let productName in products) {
    resultText += ` * ${productName}: ${juanaSales[Object.keys(products).indexOf(productName)]}<br>`;
  }
  resultText += "<br>";
  resultText += "<strong>Cantidad de productos vendidos por Pedro:</strong><br>";
  for (let productName in products) {
    resultText += ` * ${productName}: ${pedroSales[Object.keys(products).indexOf(productName)]}<br>`;
  }
  resultText += "<br>";
  resultText += "Total de dinero recolectado por Juana:<br><strong>" + juanaTotal + " USD</strong><br>";
  resultText += "Total de dinero recolectado por Pedro:<br><strong>" + pedroTotal + " USD</strong><br>";
  resultText += "<br>";

  if (juanaTotal > pedroTotal) {
    resultText += "El empleado del mes es: <strong>Juana</strong>";
  } else if (pedroTotal > juanaTotal) {
    resultText += "El empleado del mes es: <strong>Pedro</strong>";
  } else {
    resultText += "<strong>Hubo un empate en la cantidad de dinero recolectado por Juana y Pedro</strong>";
  }

  document.getElementById('results').innerHTML = resultText;
}

function hasNaN(array) {
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      return true;
    }
  }
  return false;
}

function hasNegative(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]<0) {
      return true;
    }
  }
  return false;
}

function clear(){
  document.getElementById('juana-aqua').value="";
  document.getElementById('juana-emocion').value="";
  document.getElementById('juana-alegria').value="";
  document.getElementById('juana-frescura').value="";
  document.getElementById('pedro-aqua').value="";
  document.getElementById('pedro-emocion').value="";
  document.getElementById('pedro-alegria').value="";
  document.getElementById('pedro-frescura').value="";
}