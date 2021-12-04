import React, {useContext, useState, createContext} from 'react'
import { baseUrl } from './App'

    // Athuentication provider
    const useProviders = () =>{
        const [user, setUser] = useState(null)
        const [isAuthenticated, setIsAuthenticated] = useState(false)

        const signIn = (cb, userData)=> {
            setUser(userData)
            setIsAuthenticated(true)
            cb()
        }

        const signOut = cb =>{
            setUser(null)
            setIsAuthenticated(false)
            cb()
        }

        const signUp = (cb, values) =>{
            fetch(`${baseUrl}/users/signup`,{
                method:"POST",
                body: JSON.stringify(values)
            })
            cb()
        }

        return{
            user,
            isAuthenticated,
            signIn,
            signOut,
            signUp
        }
    }

// Context Creater

    const Auth = createContext()

    const useAuth = () => useContext(Auth)

    const Protector = ({children})=> {
        const contextValues = useProviders()
        return (
        <Auth.Provider value={contextValues} >
            {children}
        </Auth.Provider>
    )}

  // get Data after getting the api key
  const getData = async (baseUrl, key) => {
    let fetchingUrl = await fetch(`${baseUrl}/users/profile`, {
      method: "GET",
      headers: { 'auth-token': key },
    });
    let responce = await fetchingUrl.json();

    return responce;
  };

 const addOrder = async (itemId, key) =>{
    let fetchingUrl = await fetch(`${baseUrl}/order/`, {
        method: "POST",
        headers: { 'auth-token': key },
      });
      let responce = await fetchingUrl.json();
  
      return responce;
 }



  export {
        useAuth,
        Protector,
        getData
    }



