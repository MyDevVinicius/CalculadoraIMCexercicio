let btnCalculator = document.getElementById('btn-calculator').addEventListener('click', Calculator);

function Calculator() {
    let NameUser = document.getElementById('NameUser').value.trim();
    let heightUser = parseFloat(document.getElementById('heightUser').value);
    let WeightUser = parseFloat(document.getElementById('WeightUser').value);

    let Boxresult = document.getElementById('Box-result');
    Boxresult.innerHTML = ''; // Limpa resultados anteriores

    if (NameUser === "" || isNaN(heightUser) || isNaN(WeightUser)) {
        let ErrorName = document.createElement('p');
        ErrorName.innerHTML = 'Preencha os campos para continuar';
        Boxresult.appendChild(ErrorName);
    } else {
        let Resultado = WeightUser / (heightUser * heightUser);
        let IMC = ""

        if(Resultado < 16.9 ){
           IMC = "Muito Abaixo do Peso"
        }else if(Resultado > 17 && Resultado < 18.4){
            IMC = "Abaixo do Peso"
        }
        else if(Resultado > 18.5 && Resultado < 24.9){
            IMC = "Peso Normal"
        }
        else if(Resultado > 25 && Resultado < 29.9){
            IMC = "Acima do Peso"
        }
        else if(Resultado > 30 && Resultado < 34.9){
            IMC = "Obesidade grau I"
        }
        else if(Resultado > 35 && Resultado < 40){
            IMC = "Obesidade grau II"
        }
        else if(Resultado > 40){
             IMC = "Obesidade grau III"
        }



        let Result = document.createElement('p');
        Result.innerHTML = `Olá ${NameUser}, seu IMC foi calculado! <br> O resultado é: ${Resultado.toFixed(2)} -  ${IMC}`;
        Boxresult.appendChild(Result);
    }
}
