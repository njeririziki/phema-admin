import React,{useEffect,useState} from 'react';


const PlainList = ({title,data,tableFunction,buttonFunction,resultsNumber}) => {
   
   const [listData, setListData] = useState([])
  const [investmentsPageTable, setInvestmentsPageTable] = useState(1)
  const resultsPerPage = resultsNumber?resultsNumber: 3;
  const totalResults = data.length

  useEffect(() => {
    setListData(data.slice((investmentsPageTable - 1) * resultsPerPage, investmentsPageTable * resultsPerPage))
   }, [data,investmentsPageTable,resultsPerPage])

  function onPageChangeInvestmentsTable(p) {
    setInvestmentsPageTable(p)
   }

    const styles={
        cardDetailsContainer: `
        p-4
        grid 
        gap-2 
        grid-cols-1  
        rounded-md    
        divide-y
        divide-gray-200
        `,
        farmsTable:`
        bg-white
        dark:bg-gray-700
        pt-4
        mb-2
        rounded-md
         `,
        smalltext:`
        mt-2
        text-sm
        text-gray-600 dark:text-gray-200
        
        `,
        headerText:`
        ml-8
        mb-2
        text-base font-semibold
        text-gray-600 dark:text-gray-200
        `
    }

    return (
       
        <ul className={styles.farmsTable} onClick={tableFunction}>
        <li className='border-b dark:border-gray-500'>
        <h2 className={styles.headerText}>{title}</h2>
     
        </li>
        {listData.map((items,index)=>(
        
          <li className='flex items-center justify-between p-4 border-b dark:border-gray-500' 
        key={index}  onClick={()=>buttonFunction(items)}>
      <h3 className='font-semibold text-base text-gray-600 dark:text-gray-300 '>{items.col1}</h3>
      {/* <h3 className={styles.smalltext}>{items.col3}</h3> */}
      <h3 className={styles.smalltext}>{items.col2} </h3>
      <h3 className={styles.smalltext}>{items.col3} </h3>
     
   
       </li>
        ))}
        <li className='p-2'>
       
        </li>
    
      </ul>
      );
}
 
export default PlainList;