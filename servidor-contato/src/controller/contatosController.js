const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

// const getById = (request, response) => {
//   const id = request.params.id;
//   response.status(200).send(model.find(tarefa => tarefa.id == id));
// };

// const add = (request, response, contato) => {
//   let dadosContato = request.body
//     dadosContato.id = Math.random().toString(36).substr(-8)
//       console.log(dadosContato)
//         model.agenda.contatos.push(dadosContato)
//           response.status(200).send()
//   // console.log(request.body)
// }

const add = (request, response) => {
  let contato = request.body
  let baseDados = model.agenda.contatos

  contato.id = Math.random().toString(36).substr(-8)
// Salvar apenas contatos diferentes. Não queremos salvar contatos repetidos na nossa base de dados;
  if (baseDados.find(dado => dado.nome === contato.nome)){
    response.status(400).send("Contato já cadastrado")
} else {
  model.agenda.contatos.push(contato)
  response.status(201).send(contato) //serve para colocar algo dentro do contatos.js
 };
  
} 







module.exports = {
  getAll,
  // getById,
  add
}

