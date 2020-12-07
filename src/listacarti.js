import React from "react";
import Carte from "./carte";

const ListaCarti = (props) => {
  const lista = props.listaCarti.map((item) => {
    const { src, titlu, text, autpret, id } = item; //  Destructuram obiectul "item"
    return (
      <Carte src={src} titlu={titlu} text={text} autpret={autpret} key={id} />
    );
  });

  const stil = {
    marginTop: "2rem",
    padding: "20px",
  };

  return (
    <>
      <h2 style={stil}>Cărți pentru copii</h2>
      {lista}
    </>
  );
};

export default ListaCarti;
