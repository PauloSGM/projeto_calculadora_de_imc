

const calcularBtn = document.getElementById('calcular');
const limpaBtn = document.getElementById('limpar');
const a = document.getElementById('peso');
const b = document.getElementById('altura');

limpaBtn.addEventListener("click", function () {
    document.getElementById("peso").value = "0";
    document.getElementById("altura").value = "0";
    document.getElementById("totalMagro").innerHTML = "";
    document.getElementById("totalNormal").innerHTML = "";
    document.getElementById("totalSobre").innerHTML = "";
    document.getElementById("totalObeso").innerHTML = "";
});

calcularBtn.addEventListener("click", function () {
    document.getElementById("totalMagro").innerHTML = "";
    document.getElementById("totalNormal").innerHTML = "";
    document.getElementById("totalSobre").innerHTML = "";
    document.getElementById("totalObeso").innerHTML = "";
    let res = a.value / (b.value * b.value);
    console.log(res);
    let arredondando = parseFloat(res.toFixed(1));
    if (res < 18) {
        document.getElementById("totalMagro").innerHTML = arredondando + " é o seu resultado. Tenha cuidado. Seu IMC está abaixo do limite aceitável. Procure um especialista.";
    }
    else if (res < 25) {
        document.getElementById("totalNormal").innerHTML = arredondando + " é o seu resultado. Parabéns! Seu IMC está dentro do ideal. Continue cuidando de sua alimentação.";
    }
    else if (res < 30) {
        document.getElementById("totalSobre").innerHTML = arredondando + " é o seu resultado. Tenha cuidado. Seu está IMC um pouco acima do limite aceitável. Procure um especialista.";
    }
    else if (res < 31) {
        document.getElementById("totalSobre").innerHTML = arredondando + " é o seu resultado. Procure a ajuda de um especialista! Seu IMC está <Strong>muito</strong> acima do limite aceitável.";
    }
    else
        document.getElementById("totalObeso").innerHTML = arredondando + " é o seu resultado. Procure a ajuda de um especialista! Seu IMC está <Strong>muito</strong> acima do limite aceitável.";
}); 