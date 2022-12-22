import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, X, ArrowCircleUp } from 'phosphor-react';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>

      <Dialog.Title>Nova transação</Dialog.Title>

      <CloseButton>
        <X size={24}/>
      </CloseButton>

      <form action="">
        <input type="text" placeholder="Descrição" required />
        <input type="number" placeholder="Preço" required /> <input type="text" placeholder="Categoria" required />

        <TransactionType>
            <TransactionTypeButton variant="income" value="income">
                <ArrowCircleUp size={24}/>
                Entrada 
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
                <ArrowCircleDown size={24}/>
                Saída
            </TransactionTypeButton>
        </TransactionType>

        <button type="submit">Cadastar</button>
      </form>

      </Content>
    </Dialog.Portal>
  );
}
