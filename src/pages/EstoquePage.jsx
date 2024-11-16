import { Container } from "react-bootstrap";
import EstoqueIndex from "../components/EstoqueIndex";
import { Link } from "react-router-dom";

const EstoquePage = () => {
  return (
    <>
      <Container className="mt-4">
        <Link className="h4 text-primary" to={"/estoques/create"}>Adicionar novo Estoque</Link>

      </Container>
      {/* Exibe os estoques */}
      <Container className="h-75 mt-4">
        <EstoqueIndex />

      </Container>
    </>
  );
};

export default EstoquePage;
