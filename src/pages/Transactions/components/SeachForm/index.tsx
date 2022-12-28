import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormsInputts = z.infer<typeof searchFormSchema>

export function SearchForm (){
  const {
    register,
     handleSubmit,
     formState:{isSubmitting}
    } = useForm<SearchFormsInputts>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransactions(data: SearchFormsInputts){
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  }

    return(
      <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
        <input 
        type="text" 
        placeholder ="Buscar transações" 
        {...register ('query')}
        />

        <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20}/>
        Buscar
        </button>
      </SearchFormContainer>
    )
}