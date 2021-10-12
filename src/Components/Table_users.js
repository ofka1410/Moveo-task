
import React,{useContext,useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import {Link} from "react-router-dom";
import {context} from '../state_management/Use_context';


export default function Table_users({users}) {
    const { get_users,setCurrent_page,current_page,setSortDetails}= useContext(context)

   const changeTable=(item)=>{
    
    setSortDetails({
        page:current_page,
        name:item.name.first,
        last:item.name.last
    })
   
    get_users()
   }


    return (
      <div>
      
        <TableContainer style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}  component={Paper}>
        <Table className='table'  size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{height:'50px',backgroundColor:'#7a7d80'}}>
                
              <TableCell className='headers_table'>Picture</TableCell>
              <TableCell className='headers_table' align="center">Full name</TableCell>
              <TableCell className='headers_table' align="center">Email</TableCell>
              <TableCell className='headers_table' align="center">Gender</TableCell>
              <TableCell className='headers_table' align="center">Age</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
              {
                 users.length>0?
                   users.map((item,index)=>{
                     
                      return(
                          <TableRow onClick={()=>changeTable(item)} className='row-of-table' key={item.id.value}>
                            {users.length>1?
                            <React.Fragment>
                       <TableCell className='table_cell'   
                        component="th" scope="row" align="center">
                          <Link className='link-path'  to={{pathname:`/${item.name.first}`,search: `?page=${current_page}`}}>
                           <Avatar src={item.picture.thumbnail}/>
                           </Link>
                        </TableCell>
                        <TableCell onClick={()=>changeTable(item)} className='table_cell'  
                        component="th" scope="row" align="center">
                           <Link className='link-path'  to={{pathname:`/${item.name.first}`,search: `?page=${current_page}`}}>
                             {item.name.first.charAt(0)} {item.name.last}
                        </Link> 
                        </TableCell>
                        <TableCell className='table_cell'  
                        component="th" scope="row" align="center">
                          <a  className='link-path' style={{ textDecoration:'underline',color:'#1958b5'}} href={`mailto:${item.email}`}>{item.email}</a>
                          </TableCell>
                        <TableCell className='table_cell'  component="th" scope="row" align="center">
                        <Link className='link-path'  to={{pathname:`/${item.name.first}`,search: `?page=${current_page}`}}>
                          {item.gender}
                          </Link> 
                          </TableCell>
                        <TableCell className='table_cell'  component="th" scope="row" align="center">
                        <Link className='link-path'  to={{pathname:`/${item.name.first}`,search: `?page=${current_page}`}}>
                          {item.registered.age}
                          </Link>
                          </TableCell>
                            </React.Fragment>


                           :<React.Fragment>
                           <TableCell className='details_cell'   
                        component="th" scope="row" align="center">
                        
                           <Avatar src={item.picture.thumbnail}/>
                        </TableCell>
                        <TableCell onClick={()=>changeTable(item)} className='details_cell'  
                        component="th" scope="row" align="center">
                             {item.name.first.charAt(0)} {item.name.last}
                        </TableCell>
                        <TableCell className='details_cell'  
                        component="th" scope="row" align="center">
                          <a  className='link-path' style={{ textDecoration:'underline',color:'#1958b5'}} href={`mailto:${item.email}`}>{item.email}</a>
                          </TableCell>
                        <TableCell className='details_cell'  component="th" scope="row" align="center">
                       
                          {item.gender}
                       
                          </TableCell>
                        <TableCell className='details_cell'  component="th" scope="row" align="center">
                       
                          {item.registered.age}
                          
                          </TableCell>
                           </React.Fragment> }
                            
                        
                       
                        </TableRow>
                        
                      )
                   })
                  : <React.Fragment></React.Fragment>
              }
          </TableBody>
          </Table>
    </TableContainer>
    </div>
    )
}
