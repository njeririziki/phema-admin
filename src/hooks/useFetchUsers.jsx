import axios from "../utils/Api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getUsers = async ()=>{
    const response = await axios.get('/admin/all-users')
    return response;
  }
  
  export const useGetUsers = ()=>{
    return useQuery({
      queryKey:["Users"],
      queryFn:getUsers
    })
  }
  const createUser = async (payload)=>{
    const {endpoint,first_name, last_name, email, country_code, phone, 
        password, password_confirmation,role_id } = payload;
      
    const response =  await axios.post(
        `/admin/${endpoint}`,
          {  
            first_name,
            last_name,
            email,
            phone: country_code.replace('+', '').concat(phone),
            password,
            password_confirmation,
            role_id,
        })
    return response
  }
  
  export const useCreateUser = ()=>{
    const queryClient = useQueryClient()
    return useMutation(createUser, {
      onError:(error)=>{
        console.log('error', error)
       // const {data} = error.response;
        // destructuring the array object to get the error messages 
        // let messageArray = Object.values(data)
        // return alert(messageArray?.toString())
      },
      onSuccess:()=>{
        queryClient.invalidateQueries("Users")
        console.log('User registered successfully');
      }
    })
  }
  const deactivateUser=(payload) =>{
    const response= axios.post('/admin/update-account',payload)
    return response
   }
   export const useDeactivateUser = ()=>{
     const queryClient = useQueryClient()
     return useMutation(deactivateUser, {
       onError:(error)=>{
         console.log('error', error)
       
       },
       onSuccess:()=>{
         queryClient.invalidateQueries("Users")
         console.log('User deactivated');
       }
     })
   }