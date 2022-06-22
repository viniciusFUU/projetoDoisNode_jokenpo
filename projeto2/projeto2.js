const prompt = require('prompt-sync')();

while (true) {
   
    console.log("Primeiramente, escolha em quantas rodadas você tentará acertar.");
    let escolhaJogador = +prompt("Digite em números a quantidade desejada de rodadas: ");

    let vitoria = 0;

    let derrota = 0;

    let empate = 0;



    for (let i = 1; i <= escolhaJogador; i++) {
        let jokenpo = Math.floor(Math.random() * 3);

        console.log(`
            Escolha
            0 para pedra;
            1 para papel;
            2 para tesoura.
        `);
        
        let escolha = +prompt("Faça sua escolha: ")

        console.log(`Sua escolha foi ${escolha} e a do PC foi ${jokenpo}.`);

        if (escolha === 0 && jokenpo === 2) {
            console.log(`Você escolheu pedra e o PC escolheu tesoura. Você venceu!`);
            vitoria++;
        } else if (escolha === 1 && jokenpo === 0) {
            console.log(`Você escolheu papel e o PC escolheu pedra. Você venceu!`);
            vitoria++;
        } else if (escolha === 2 && jokenpo === 1) {
            console.log(`Você escolheu tesoura e o PC escolheu papel. Você venceu!`);
            vitoria++;
        } else if (escolha === jokenpo) {
            console.log(`Você escolheu ${escolha} e o PC escolheu ${jokenpo}. Isso é um empate!`);
            empate++;
        } else {
            console.log("Você perdeu! tente novamente: ");
            derrota++;
        }
    }

    console.log();

    console.log(`Você venceu ${vitoria} vezes.`);
    console.log(`Houveram ${empate} empates`);
    console.log(`Você perdeu ${derrota} vezes.`);

    console.log();

    if (vitoria > derrota) {
        console.log(`Parabens você venceu ${vitoria} vezes. E assim, foi o grande campeão! :D`);
    } else if (derrota > vitoria) {
        console.log(`Você perdeu ${derrota} vezes. Você foi derrotado pelo PC. :C`);
    } else {
        console.log(`Vocês empataram ${empate} vezes. Ninguem venceu.`);
    } 

    console.log();

    let continuar = +prompt("Se você deseja jogar novamente, digite 5. Caso contrário, só aperte enter.  ")

    if (continuar === 5) {
        console.log("Nice, vamos jogar denovo!");
        continue
    }  else {
        console.log("Encerrando aplicação! Obrigado pela partida. :D");
        break;
    }

}