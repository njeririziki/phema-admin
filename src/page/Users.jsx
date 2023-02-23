import { isError } from '@tanstack/react-query';
import React, {useEffect,useState} from 'react'
import PlainList from '../components/Table';
import { useGetUsers } from '../hooks/useFetchUsers';
import axios from '../utils/Api';


const transactionsArray=[
    {
   col1:'Njeri',
   col2: '16/06/2022',
   col3:'+  234,000'},
]

const UsersManagement = () => {
    const {isLoading, data} = useGetUsers()
  

    if(isLoading){
        console.log('...loading')
        return <div>Loading...</div>
      }
     
    
     const reassignedData= data?.data?.map((items)=>{
        return{
         col3: items.id,
         col1:items.first_name + ' ' + items.last_name,
         col2:items.phone,
        }  
      })
       console.log(reassignedData)
              
    return ( 
      
        <div>
          
            <PlainList data={reassignedData} title="All users"/>
        </div>
      
     );
}
 
export default UsersManagement;