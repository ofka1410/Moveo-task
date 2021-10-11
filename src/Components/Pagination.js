import React,{useContext,useEffect,useState} from 'react'
import {context} from '../state_management/Use_context';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function  BasicPagination() {
    const { get_users,users,setCurrent_page}= useContext(context)

    
    return(
        <Stack className='page-select' onChange={(e)=>{setCurrent_page(e.target.textContent)}}  spacing={2}>
        <Pagination className='page-select' onChange={(e)=>{setCurrent_page(e.target.textContent)}} onClick={get_users}  count={10} />
      
      </Stack>
    )
}