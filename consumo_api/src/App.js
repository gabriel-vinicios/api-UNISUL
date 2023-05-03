import React, { Component, useState, useEffect } from 'react';
import api from './api'
/* 1. Criaremos uma classe para nossa aplicação e
damos o extends em Component. Observe que agora
é adicionado no import. */
function App() {
  // 3. Criamos um state para armazenar os filmes
  const [filmes, setFilmes] = useState([])
  const [pesquisa, setPesquisa] = useState('start%20trek')
  /* 4. Vamos adicionar um componente para buscar
  os dados na API. */
  useEffect(() => {
    /* 5. Veja que a constante response utiliza o await
    porque usamos async. */
    async function getFilmes(search = 'start%20trek') {
      const encodedURI = search.replace(/ /g, '%20')
    const response = await api.get(encodedURI);
    /* Colocamos o console log para poder inspecionar
    os elementos para debug, mas não é utilizado na
    aplicação*/
    //console.log(response.data);
    // ... Continua .... 
    // 6. jovar os valores recebidos para filmes
    
    setFilmes(response.data);
  }

  getFilmes(pesquisa)
  }, [pesquisa])
  // 2. Criamos nosso render
  return (
    /* 7. Vamos buscar os dados de this.state e jogar para a posição filmes*/
    
      <div>
        <h1>Filmes</h1>
        <input type="text" onChange={(e) => setPesquisa(e.target.value)}/>
        {console.log(filmes)}
        {/* 8. Como temos uma array, então vamos usar um maps para percorrê-la. Vejaj que temos que ver
no resultado da API os atributos que vamos mostrar, como name e url.*/}
        {filmes?.map(filme => (
          <li key={filme.show.id}>
            <h2>
              {filme.show.name}
            </h2>
            <p><a href={filme.show.url} target="_blank">
              {filme.show.url}</a></p>
          </li>
        ))}
      </div>
    );
}
export default App;
