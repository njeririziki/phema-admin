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