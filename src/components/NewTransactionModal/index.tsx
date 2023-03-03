import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
interface NewTransactionModalProps {
  isOpen: boolean;
  OnRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, OnRequestClose}: NewTransactionModalProps)
{
  
  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={OnRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className='react-modal-close' type='button' onClick={OnRequestClose}>
        <img src={closeImg} alt="fechar modal" />
      </button>
      <Container>
        <h2>Cadastra Transação</h2>
        
        <input type="text" placeholder='Titulo' />
        <input type="number" placeholder='Valor' />

        <TransactionTypeContainer>
          <button type='button'>
              <img src={incomeImg} alt="Entrada" />
              <span>Entreda</span>
          </button>
          <button type='button'>
              <img src={outcomeImg} alt="Saida" />
              <span>Saida</span>
          </button>
          
        </TransactionTypeContainer>

        <input type="number" placeholder='Categoria' />


        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>

  )
}