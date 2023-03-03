import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';



interface ITransaction {
  id: number;
  title: string;
  type: string
  category: string;
  amount: number;
  createdAt: string;

}

interface TransactionProviderProps {
  children: ReactNode
}


export const TransactionContext = createContext<ITransaction[]>([]);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )

}