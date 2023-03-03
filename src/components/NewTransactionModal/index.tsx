import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';

import { api } from '../../services/api';


interface NewTransactionModalProps {
  isOpen: boolean;
  OnRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, OnRequestClose}: NewTransactionModalProps)
{
  // dados do FORM
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const [type, setType] = useState('');
  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {title, value, category, type };

    api.post('/transactions', data );
  }
  
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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastra Transação</h2>
        
        <input type="text"
          placeholder='Titulo'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input type="number"
          placeholder='Valor'
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={()=>{setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor='green'
          >
              <img src={incomeImg} alt="Entrada" />
              <span>Entreda</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={()=>{setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
              <img src={outcomeImg} alt="Saida" />
              <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text"
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />


        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>

  )
}