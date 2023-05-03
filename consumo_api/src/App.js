import React, { Component, useState, useEffect } from 'react';
import api from './api'

function App() {
  const [filmes, setFilmes] = useState([])
  const [pesquisa, setPesquisa] = useState('start%20trek')

  useEffect(() => {
    async function getFilmes(search = 'start%20trek') {
      const encodedURI = search.replace(/ /g, '%20')
      const response = await api.get(encodedURI);

      setFilmes(response.data);
    }

    getFilmes(pesquisa)
  }, [pesquisa])

  return (

    <div>
      <h1>Filmes</h1>
      <input type="text" onChange={(e) => setPesquisa(e.target.value)} />
      {console.log(filmes)}

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
