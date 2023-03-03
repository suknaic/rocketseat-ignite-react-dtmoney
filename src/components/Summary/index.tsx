import { useContext } from "react";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { TransactionContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function Summary() {

  const data = useContext(TransactionContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="saidas" />
        </header>
        <strong>-R$500,00</strong>
      </div>

      <div className="highligth-background">
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>
        <strong>R$5000,00</strong>
      </div>
    </Container>
  );
}
