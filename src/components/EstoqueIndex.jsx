import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const EstoqueIndex = () => {
  const baseURL = "http://localhost:8080/api";

  const [estoques, setEstoques] = useState([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    carregarEstoques();
  }, []);

  const carregarEstoques = async () => {
    try {
      setErro("");
      setCarregando(true);
      const response = await axios.get(`${baseURL}/estoques/`);
      setEstoques(response.data);
    } catch (error) {
      setErro(error);
      console.error("Erro ao buscar os estoques: ", error);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <>
      {erro ? (
        <h1>ERRO: {erro}</h1>
      ) : carregando ? (
        <h1>CARREGANDO...</h1>
      ) : (
        <Table bordered hover>
          <thead>
            <tr>
              <th>Localização</th>
              <th>Setor</th>
            </tr>
          </thead>
          <tbody>
            {estoques.map((item) => (
              <tr key={item.id}>
                <td>{item.localizacao}</td>
                <td>{item.setor}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default EstoqueIndex;
