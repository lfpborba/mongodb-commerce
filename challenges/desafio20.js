db.produtos.update({ nome: "Quarteirão com Queijo" }, { $pop: { ingredientes: -1 } });

db.produtos.find({}, { nome: true, ingredientes: true, _id: false });