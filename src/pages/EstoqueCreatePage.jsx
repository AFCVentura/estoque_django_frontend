import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";

const EstoqueCreatePage = () => {
  const navigate = useNavigate();

  const baseURL = "http://localhost:8080/api";
  const [validated, setValidated] = useState(false);

  const [localizacao, setLocalizacao] = useState("");
  const [setor, setSetor] = useState("");

  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = (event) => {
    validation(event);
    enviarNovoEstoque();
  };

  const validation = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const enviarNovoEstoque = async () => {
    try {
      setCarregando(true);
      await axios.post(`${baseURL}/estoques/`, {
        localizacao,
        setor,
      });
      redirecionar();
    } catch (error) {
      setErro(error);
    } finally {
      setCarregando(false); 
    }
  };

  const redirecionar = () => {
    navigate("/estoques");
  };

  return (
    <>
      <Container className="text-center mt-5 text-primary">
        <h2>Preencha os campos do novo estoque</h2>
      </Container>
      <Container className="w-50 mt-3 text-primary">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group md="4" controlId="validationCustom01">
                <Form.Label>Localização</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Digite a localização do estoque"
                  value={localizacao}
                  onChange={(e) => {
                    setLocalizacao(e.target.value);
                  }}
                />
                <Form.Control.Feedback>Tudo Certo!</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group md="4" controlId="validationCustom02">
                <Form.Label>Setor</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Digite o setor do estoque"
                  value={setor}
                  onChange={(e) => {
                    setSetor(e.target.value);
                  }}
                />
                <Form.Control.Feedback>Tudo Certo!</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit" className="me-2">
            Enviar
          </Button>
          |
          <Link to="/estoques" className="ms-2">
            Voltar
          </Link>
        </Form>
      </Container>
    </>
  );
};

export default EstoqueCreatePage;
