import { Children, ReactNode, createContext, useEffect, useState } from "react";
import { Transactions } from '../pages/Transactions/index';

interface Transaction {
    id: number;
    description: string;
    type: 'income'  | 'outcome';
    price: number;
    category: string;
    createdAt: string;
  }

  
interface TransactionContexteType{
    transactions: Transaction[];
}

interface TransactionsProviderProps{
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContexteType);
const [ transactions, setTransactions] = useState<Transaction[]>([]);
  async function loadTransactions(){
    const response = await fetch("http://localhost:3000/transactions")
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {    
    loadTransactions();
  }, [])


export function TransactionsProvider({children}: TransactionsProviderProps){
    return(
        <TransactionsContext.Provider value={{ transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}