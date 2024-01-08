"use strict";

var alunos = [{
  nome: 'Myllena',
  nota: 8
}, {
  nome: 'Raul',
  nota: 10
}, {
  nome: 'Ana',
  nota: 7
}, {
  nome: 'Paulo',
  nota: 4
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Fernando',
  nota: 3
}];
var alunosNaMedia = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
alunosNaMedia.forEach(function (aluno) {
  return console.log("O aluno(a) ".concat(aluno.nome, " foi aprovado com a m\xE9dia ").concat(aluno.nota));
});