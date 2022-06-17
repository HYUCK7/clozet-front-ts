import { useScript } from "@/hooks";
import { RefObject, useRef, useState } from "react";


export default function GoogleLogin({
    /*
    handleCredentialResponse = (response : any) =>{
    console.log("ENCODED JWT ID TOKEN" + response.credential)
    }
    */
    handleCredentialResponse = (response : any) => { console.log ("ENCODED JWT ID TOKEN: " + response.credential)},
}) 
  
{  //const googleSignInButton = useRef(document.getElementById("#buttonDiv")!)
  
  useScript('https://accounts.google.com/gsi/client',() => {
        
    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      callback: handleCredentialResponse
  })
    window.google.accounts.id.renderButton(
      //document.getElementById( "#buttonDiv" )!, <div id = "buttonDiv"></div>
      //googleSignInButton.current,
      document.getElementById('buttonDiv') as HTMLButtonElement,
      {
        theme: "outline", size: "large",
        type: 'standard', text: "signin_with"
      }
    )
    const button = document.getElementById('signout_button') as HTMLButtonElement
    button.onclick = () =>{
    window.google.accounts.id.disableAutoSelect()
    }
  });

  return (
  <><div id = "buttonDiv"></div>
  <div id = "signout_button"></div></>)
  
  //return (<div ref={googleSignInButton as React.RefObject<HTMLDivElement>}></div>)
}