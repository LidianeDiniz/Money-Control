import { Summary } from "../../components/Summary";
import { Header } from "../../components/Header";
import { SearchForm } from "./components/SeachForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: 'income'  | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const [ transactions, setTransactions] = useState<Transaction[]>([]);
  async function loadTransactions(){
    const response = await fetch("http://localhost:3000/transactions")
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {    
    loadTransactions();
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
      <SearchForm/>
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return(

                <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighLight variant={transaction.type}>
                {transaction.price}
                </PriceHighLight>
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>

              )
            })}            

           
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
