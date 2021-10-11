import React,{useContext,useEffect} from 'react'
import {context} from '../state_management/Use_context';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import BasicPagination from './Pagination'
import Table_users from './Table_users';
import GoogleMaps from './GoogleMaps';
import {Link} from "react-router-dom";
import ProgresBar from './ProgresBar';
import '../css/main.css'
export default function Main() {
    const { get_users,users,current_page,title,mapsOn,setMapsOn,loading,setLoading}= useContext(context)
    
    useEffect(() => {
        get_users()
      },[current_page]);
    
    return(
        <Container>
          {loading?
          <ProgresBar/>
          :<React.Fragment></React.Fragment>}
         
            <div className='title-warper'>
            <Typography  variant="h3" component="div">
           {title}
         </Typography>
            </div>
             <div>
               <Table_users users={users}/>
             </div>
             
            <div className='pagination-warper'>
                {mapsOn?
                 <div style={{width:'100%'}}>
                   
                   <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                   <GoogleMaps/>
                   </div>
                   <div style={{display:'flex',justifyContent:'center'}}>
                     <Button className='button-homePage' onClick={get_users} variant='outlined'>
                       <Link className='bt-link' style={{textDecoration:'none'}}  to='/'>
                         Back to all users
                       </Link>
                       </Button>
                   </div>
              
                </div>
                :<BasicPagination/> }
               
            </div>

           
        </Container>
    )
}