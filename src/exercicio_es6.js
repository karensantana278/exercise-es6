let alunos = [
    {nome: 'Myllena', nota: 8},
    {nome: 'Raul', nota: 10},
    {nome: 'Ana', nota: 7},
    {nome: 'Paulo', nota: 4},
    {nome: 'Maria', nota: 5},
    {nome: 'Fernando', nota: 3},
]

let alunosNaMedia = alunos.filter(aluno => {
    return aluno.nota >= 6
})

alunosNaMedia.forEach( aluno => console.log(`O aluno(a) ${aluno.nome} foi aprovado com a média ${aluno.nota}`) );