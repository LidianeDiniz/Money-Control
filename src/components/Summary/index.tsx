import { ArrowCircleUp, ArrowCircleDown, CurrencyCircleDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useContext } from 'react';
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary(){
    const {transactions} = useContext(TransactionsContext)
    console.log(transactions);
    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color='#00b37e' />
                </header>
                <strong>R$17.400,00</strong>

            </SummaryCard>


            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#f75a68' />
                </header>
                <strong>R$17.400,00</strong>

            </SummaryCard>


            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyCircleDollar size={32} color='#fff' />
                </header>
                <strong>R$17.400,00</strong>

            </SummaryCard>
        </SummaryContainer>
    )
}