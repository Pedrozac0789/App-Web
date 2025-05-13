
function calculate() {
  var cintura = parseFloat(document.getElementById('cintura').value);
  var quadril = parseFloat(document.getElementById('quadril').value);
  var sexo = document.getElementById('sexo').value;
  
  var rcq = cintura / quadril;
  var risco= '';

  if (sexo === 'male') {
    if (rcq < 0.9) {
      risco = 'Baixo risco de saúde.';
    } else if (rcq >= 0.9 && rcq < 1.0) {
      risco = 'Risco moderado de saúde.';
    } else {
      risco = 'Alto risco de saúde.';
    }
  } else if (sexo === 'female') {
    if (rcq < 0.8) {
      risco = 'Baixo risco de saúde.';
    } else if (rcq >= 0.8 && rcq < 0.85) {
      risco = 'Risco moderado de saúde.';
    } else {
      risco = 'Alto risco de saúde.';
    }
  }

  document.getElementById('result').innerHTML = 'Sua relação cintura-quadril é: ' + rcq.toFixed(2) + '<br>' + 'seu Risco de saúde é: ' + risco;
}