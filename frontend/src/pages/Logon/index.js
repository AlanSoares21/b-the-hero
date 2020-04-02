import React, {useState} from 'react';
//icones
import {FiLogIn} from 'react-icons/fi';

//dom
import {Link , useHistory} from 'react-router-dom';

//api
import api from '../../services/api';

//css
import './style.css';

//imgens
import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

export default function Logon() {

  const history = useHistory();

  const [id, setId] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('session',{id});

      localStorage.setItem('ongId',id);
      localStorage.setItem('ongName',response.data.name);
      history.push('/profile');
    } catch (e) {
      alert('Falha no login, Id invalido');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="Be the Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input placeholder="Sua ID"
            value={id} onChange={ e => setId(e.target.value)}
            />
          <button className="button" type="submit">Entrar</button>
          <Link to="./register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImage} alt="Heores" />

    </div>
  );
}
