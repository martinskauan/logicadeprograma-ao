const prompt = require('prompt-sync')();

function main() {
    const alunos = [];
    let maiorNota = 0;

    while (true) {
        const nome = prompt("Digite o nome do aluno (ou 'Fim' para encerrar): ");
        if (nome.toLowerCase() === "fim") {
            break;
        }
        const nota = parseFloat(prompt(`Digite a nota de ${nome}: `));

        if (nota > maiorNota) {
            maiorNota = nota;
        }

        alunos.push({ nome: nome, nota: nota });
    }

    const alunosDestaque = alunos.filter(aluno => aluno.nota >= 7);

    console.log("\nMaior nota da turma:", maiorNota.toFixed(2));

    if (maiorNota >= 7) {
        console.log("Alunos em destaque na turma:");
        alunosDestaque.forEach(aluno => {
            console.log(`${aluno.nome} - Nota: ${aluno.nota.toFixed(2)}`);
        });
    } else {
        console.log("Não há alunos em destaque na turma.");
    }
}

main();
