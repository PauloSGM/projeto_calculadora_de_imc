

            const calcularBtn = document.getElementById('calcular');
            const a = document.getElementById('peso');
            const b = document.getElementById('altura');

            function mudaCor(){
                document.getElementById(res).style.fontcolor = '#ed0909';	
                 }

            calcularBtn.addEventListener("click", function () {
                let res = a.value / (b.value * b.value);
                console.log(res);
                let arredondando = parseFloat(res.toFixed(0));
                if (res > 30) { document.getElementById("totalAlto").innerHTML = arredondando + " Foi o resultado do seu IMC. Seu resultado deu acima do permitido. Procure acompanhamento médico."; }
                else document.getElementById("totalOk").innerHTML = arredondando + " Foi o resultado do seu IMC. Parabéns! Seu resultado está dentro do limite aceitável. Continue cuidando de seu peso.";
                    ;
            });