const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

// const getById = (request, response) => {
//   const id = request.params.id;
//   response.status(200).send(model.find(tarefa => tarefa.id == id));
// };




const add = (request, response, contato) => {
  let dadosContato = request.body
    dadosContato.id = Math.random().toString(36).substr(-8)
      console.log(dadosContato)
        model.agenda.contatos.push(dadosContato)
          response.status(200).send()
  // console.log(request.body)
}

module.exports = {
  getAll,
  // getById,
  add
}

