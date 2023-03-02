import React from 'react'
import {useCreateUser} from '../hooks/useFetchUsers'
import { useForm  } from 'react-hook-form'

const CreateUser = () => {

    const {mutateAsync, isError, isLoading:isCreateLoading} = useCreateUser();
    const { register, handleSubmit } = useForm();


    const onSubmit = (data)=>{
        const payload={
            ...data,
            endpoint:'register_investor',
            country_code:'+254',  
            password:'password', 
            password_confirmation:'password',
            role_id:3
        }
        mutateAsync(payload)
        console.log('data', payload)
      }
    return (
        <div  >
        <h3>Create User</h3>
        <form onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-y-8'>
          <label htmlFor="candidate">First name</label>
          <input 
           {...register('first_name')} />
          <label htmlFor="candidate"> Last name</label>
          <input 
           {...register('last_name')} />
          <label htmlFor="votes">Email</label>
          <input  {...register("email")} />
          <label htmlFor="party">Phone</label>
          <input  {...register("phone")} />
          <button type="submit" className='bg-black text-white'>
            Create User
          </button>
        </form>
        <div className="">
   
        </div>
      </div>
      );
}
 
export default CreateUser;