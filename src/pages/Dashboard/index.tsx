import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rails/rails.png"
          alt="Rails"/>
          <div>
            <strong>Rails</strong>
            <p>Ruby on Rails (Rails) is a web application framework written in Ruby.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rails/rails.png"
            alt="Rails" />
          <div>
            <strong>Rails</strong>
            <p>Ruby on Rails (Rails) is a web application framework written in Ruby.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rails/rails.png"
            alt="Rails" />
          <div>
            <strong>Rails</strong>
            <p>Ruby on Rails (Rails) is a web application framework written in Ruby.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

      </Repositories>
    </>
  );
};

export default Dashboard;
