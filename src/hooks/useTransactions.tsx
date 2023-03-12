import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';


interface ITransaction {
  id: number;
  title: string;
  type: string
  category: string;
  amount: number;
  createdAt: string;

}
type TransactionInput  = Omit<ITransaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
  children: ReactNode
}
interface TransactionsContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>
}


const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', transactionInput);
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionContext.Provider>
  )

}

export function useTransaction(): TransactionsContextData {
  const context = useContext(TransactionContext);

  return context;
}