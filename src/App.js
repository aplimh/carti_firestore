import React, { useState, useEffect } from "react";
import ListaCarti from "./listacarti.js";
import Adaug from "./adaug";
import Container from "react-bootstrap/Container";
import { db } from "./init.js";

const App = () => {
  const [lista, setLista] = useState([]);

  const getLista = () => {
    let listanoua = [];
    db.collection("cartiCopii")
      .get()
      .then((listadoc) => {
        listadoc.forEach((doc) => {
          let carte = doc.data();
          carte.id = doc.id;
          listanoua = [...listanoua, carte];
        });
        setLista(listanoua);
      });
  };

  useEffect(() => {
    getLista();
  }, []);

  const adaug = (carte) => {
    db.collection("cartiCopii").add(carte);
    getLista();
  };

  const stil = {
    width: "750px",
  };

  return (
    <Container style={stil}>
      <ListaCarti listaCarti={lista} />
      <Adaug transmit={adaug} />
    </Container>
  );
};

export default App;
