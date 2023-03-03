import { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';


interface ITransaction {
  id: number;
  title: string;
  type: string
  category: string;
  amount: number;
  createdAt: string;

}


export function TransactionTable() {

  const [transcations, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transcations.map(transaction => (
              <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
