import { Container} from './styles';
export function TransactionTable()
{
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>R$600</td>
            <td>Desenvolvimento</td>
            <td>20/02/2023</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$300</td>
            <td>Casa</td>
            <td>20/02/2023</td>
          </tr>
         

        </tbody>
      </table>
    </Container>
  )
}