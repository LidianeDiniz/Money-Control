import { Summary } from "../../components/Summary";
import { Header } from "../../components/Header";
import { SearchForm } from "./components/SeachForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";


export function Transactions() {
  const {transactions} = useContext (TransactionsContext)
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
