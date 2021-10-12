import { useState,createContext } from "react";
import {useLocation} from "react-router-dom";
export const context = createContext()
function ContextProvider(props){
     const [current_page,setCurrent_page]=useState(1)
    const [users,setUsers]=useState([])
    const [mapsOn,setMapsOn]=useState(false)
    const [title,setTitle]=useState('All Users')
    const[loading,setLoading]=useState(false)
    //const location = useLocation();
    const [sortDetails,setSortDetails]=useState({
        page:0,
        name:'',
        last:''

    })
  
const get_users= async()=>{
    setLoading(true)
    try{
       if(window.location.pathname ==`/`){
        setMapsOn(false)
        setTitle('All Users')
        const res= await fetch(`https://randomuser.me/api/?page=${current_page}&results=10&seed=abc`)

        const data = await res.json()
        console.log(data)
        setUsers([])
        setUsers(data.results)
        setLoading(false)
      }
       else{
        user_details()
       }
        
    }
    catch(err){
        console.log(err)

    }      
}
     
        const user_details=async()=>{
            setLoading(true)
     
                try{
                    let name=window.location.pathname
                    name= name.substring(1)
                    const res3= await fetch(`https://randomuser.me/api/${window.location.search}&results=10&seed=abc`)
                    const data3 = await res3.json()
                    const foundUrl = data3.results.find(el=>el.name.first === name)
                    if(Object.keys(foundUrl).length !== 0){
                        let arr=[]  
                        arr.push(foundUrl)
                        console.log(arr)
                        setUsers([])
                        setTitle('User Details')
                       setUsers(arr)
                     
                       setMapsOn(true) 
                       setLoading(false)
                    }
                    else{
                        setLoading(false)
                     return;
                    }
                }
                catch(err){
                    console.log(err)
                }
            
       }



    const value={
        get_users,users,setCurrent_page,current_page,
        title,sortDetails,setSortDetails,setTitle,
        title,mapsOn,setMapsOn,loading,setLoading
    }  


return(
    <context.Provider value={value}>
        {props.children}
    </context.Provider>
        )

}
export default ContextProvider;