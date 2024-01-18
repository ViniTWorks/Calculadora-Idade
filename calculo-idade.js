        var anoNascimento = prompt("Insira o ano de seu nascimento");

        while(anoNascimento >= 2024){
            alert('Por favor, insira seu ano de nascimento corretamente.')
            anoNascimento = prompt('Insira o ano de seu nascimento')
        }

        var anoAtual = prompt("Insira o ano atual");

        var idadeFinal = anoAtual - anoNascimento

        alert('A idade final é: '+ idadeFinal);

        