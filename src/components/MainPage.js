import React from 'react';

export default function MainPage() {
  return (
    <React.Fragment>
      <div style={mainStyle}>
      <h2>Welcome to Project Reactomon!</h2>
      <p>Our task was to create a website about Pokemons using API and React.</p>
      </div>
    </React.Fragment>
  );
}

const mainStyle = {
  textAlign: "center",
}
