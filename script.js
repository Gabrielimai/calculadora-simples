// Acesse os elementos HTML
const input1 = document.getElementById('numero1');
const input2 = document.getElementById('numero2');
const button = document.getElementById('somar');
const resultado = document.getElementById('resultado');

// Adicione um ouvinte de evento ao botão
button.addEventListener('click', function () {
  // Obtenha os valores dos inputs como números
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  // Verifique se os valores são números válidos
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    // Realize a operação de soma

    resultado.textContent = 'preencha os campos com números válidos!';
  } else {
    const soma = num1 + num2;
    resultado.textContent = `O resultado é:  ${soma}`;
  } // Exiba o resultado
});

const inputDeSub1 = document.getElementById('numero-sub1');
const inputDeSub2 = document.getElementById('numero-sub2');
const buttonSub = document.getElementById('Subtrair');
const resultadoSub = document.getElementById('resultadoSub');

buttonSub.addEventListener('click', function () {
  // Obtenha os valores dos inputs como números
  const sub1 = parseFloat(inputDeSub1.value);
  const sub2 = parseFloat(inputDeSub2.value);
  // Verifique se os valores são números válidos
  if (Number.isNaN(sub1) || Number.isNaN(sub2)) {
    // Realize a operação de soma

    resultadoSub.textContent = 'preencha os campos com números válidos!';
  } else {
    const sub = sub1 - sub2;
    resultadoSub.textContent = `O resultado é:  ${sub}`;
  } // Exiba o resultado
});

const inputDeMult1 = document.getElementById('numero-mult1');
const inputDeMult2 = document.getElementById('numero-mult2');
const buttonMult = document.getElementById('Multiplicar');
const resultadoMult = document.getElementById('resultadoMult');

buttonMult.addEventListener('click', function () {
  // Obtenha os valores dos inputs como números
  const mult1 = parseFloat(inputDeMult1.value);
  const mult2 = parseFloat(inputDeMult2.value);
  // Verifique se os valores são números válidos
  if (Number.isNaN(mult1) || Number.isNaN(mult2)) {
    // Realize a operação de soma

    resultadoMult.textContent = 'preencha os campos com números válidos!';
  } else {
    const mult = mult1 * mult2;
    resultadoMult.textContent = `O resultado é:  ${mult}`;
  } // Exiba o resultado
});

const inputDeDiv1 = document.getElementById('numero-div1');
const inputDeDiv2 = document.getElementById('numero-div2');
const buttonDiv = document.getElementById('Dividir');
const resultadoDiv = document.getElementById('resultadoDiv');

buttonDiv.addEventListener('click', function () {
  // Obtenha os valores dos inputs como números
  const divi1 = parseFloat(inputDeDiv1.value);
  const divi2 = parseFloat(inputDeDiv2.value);
  // Verifique se os valores são números válidos
  if (Number.isNaN(divi1) || Number.isNaN(divi2)) {
    // Realize a operação de soma

    resultadoDiv.textContent = 'preencha os campos com números válidos!';
  } else {
    const div = divi1 / divi2;
    resultadoDiv.textContent = `O resultado é:  ${div}`;
  } // Exiba o resultado
});
