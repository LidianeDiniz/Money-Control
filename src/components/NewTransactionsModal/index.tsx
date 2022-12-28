import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, X, ArrowCircleUp } from 'phosphor-react';
import *as z from 'zod';
import { NewTransactionButton } from '../Header/styles';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {

  const {
    register, 
    handleSubmit,
    formState: {isSubmitting}
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

 async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
  await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  }
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>

      <Dialog.Title>Nova transação</Dialog.Title>

      <CloseButton>
        <X size={24}/>
      </CloseButton>

      <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <input 
        type="text" 
        placeholder="Descrição" 
        required
        {...register('description')} 

        />

        <input 
        type="number" 
        placeholder="Preço" 
        required
        {...register('price', {valueAsNumber: true})}
         /> 
        
        <input 
        type="text" 
        placeholder="Categoria" 
        required
        {...register('category')}
         />

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

        <button type="submit" disabled={isSubmitting}>Cadastar</button>
      </form>

      </Content>
    </Dialog.Portal>
  );
}
