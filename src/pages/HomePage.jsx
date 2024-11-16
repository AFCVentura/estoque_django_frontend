import React from "react";
import { Container } from "react-bootstrap";
import CardComponent from "../components/CardComponent";

const HomePage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center h-75 flex-column">
      <h1>Bem vindo ao Gerenciador de Estoques 3000</h1>
      <div className="d-flex gap-5">
        <CardComponent
          title="Acessar Estoques"
          description="Clique abaixo para acessar a aba de estoques e visualizar produtos"
          image="https://blog.selfstorage.com.br/wp-content/uploads/2020/02/SS-Self-Storage-Entenda-as-diferencas-entre-armazem-geral-e-self-storage.png"
          url="/estoques"
        />
      </div>
    </Container>
  );
};

export default HomePage;
