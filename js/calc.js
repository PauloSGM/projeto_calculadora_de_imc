

            const calcularBtn = document.getElementById('calcular');
            const a = document.getElementById('peso');
            const b = document.getElementById('altura');

            function mudaCor(){
                document.getElementById('formTeste:texto1').style.fontcolor = '#ed0909';	
                 }

            calcularBtn.addEventListener("click", function () {
                let res = a.value / (b.value * b.value);
                console.log(res);
                var arredondando = parseFloat(res.toFixed(0));
                if (res > 30) { document.getElementById("totalAlto").innerHTML = arredondando + " Seu resultado deu acima do permitido. Procure acompanhamento médico"; }
                else document.getElementById("totalOk").innerHTML = arredondando + "Parabéns! Seu resultado está dentro do limite aceitável. Continue cuidando de seu peso";
                    ;
            });