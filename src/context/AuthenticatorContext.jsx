import {createContext, useContext, useEffect, useState} from 'react'
import { getFirestore } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";


const AuthenticatorContext = createContext();

export const useAuth = () => useContext(AuthenticatorContext);



export const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null)

    const logIn = (mail,pass)=>{
        const db = getFirestore();
        
        // console.log(mail);
        const q = query(
            collection(db, "users"),
            where("mail", "==", mail),
            where("pass","==",pass)
        );
            
        let newUser
        getDocs(q).then( snapshot => {
            // console.log(snapshot);
                if(!snapshot.empty){

                    newUser = snapshot.docs.map( doc =>  doc.data())
                    // console.log(newUser);
                    setUser( ...newUser )
                }
        })
    }
    

    const logOut = () =>{
        setUser( null )
    }

    const [theme, setTheme] = useState('light')

    
    const themeChange = () =>{
        const newTheme = theme==='dark'?'light':'dark'
        setTheme(newTheme)
  }    



    //en el primer render chequea si el usuario tiene preferencia de colorTheme, y cambia el estado theme
    useEffect( ()=>{
    const prefersTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
      setTheme(prefersTheme)
  },[])



    return(

        <AuthenticatorContext.Provider value={ {user, logIn, logOut, preference:{theme, themeChange}} }>
            {children}
        </AuthenticatorContext.Provider>
    )

} 