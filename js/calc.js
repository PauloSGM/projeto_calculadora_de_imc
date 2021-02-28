

const calcularBtn = document.getElementById('calcular');
const a = document.getElementById('peso');
const b = document.getElementById('altura');

calcularBtn.addEventListener("click", function () {
    document.getElementById("totalAlto").innerHTML = "";
    document.getElementById("totalBaixo").innerHTML = "";
    document.getElementById("totalOk").innerHTML = "";
    let res = a.value / (b.value * b.value);
    console.log(res);
    let arredondando = parseFloat(res.toFixed(1));
    if (res > 30) {
        document.getElementById("totalAlto").innerHTML = arredondando + " é o resultado do seu IMC. Seu resultado deu acima do permitido. Procure acompanhamento médico.";
    }
    else if (res < 18) {
        document.getElementById("totalBaixo").innerHTML = arredondando + " é o resultado do seu IMC. Tenha cuidado. Seu resultado está abaixo do limite aceitável. Procure um especialista.";
    }
    else document.getElementById("totalOk").innerHTML = arredondando + " é o resultado do seu IMC. Parabéns! Seu resultado está dentro do limite aceitável. Continue cuidando de seu peso.";
});