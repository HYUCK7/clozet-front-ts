import { useScript } from "@/hooks";
import { RefObject, useRef, useState } from "react";


export default function GoogleLogin({

    handleCredentialResponse = (response : any) => { console.log ("ENCODED JWT ID TOKEN: " + response.credential)},
}) 
  
{  
useScript('https://accounts.google.com/gsi/client',() => {
        
    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      callback: handleCredentialResponse
  })
    window.google.accounts.id.renderButton(
      document.getElementById('buttonDiv') as HTMLButtonElement,
      {
        theme: "outline", size: "large",
        type: 'standard', text: "signin_with"
      }
    )
    
  });

  return (
  <div id="buttonDiv"/>)
  
  //return (<div ref={googleSignInButton as React.RefObject<HTMLDivElement>}></div>)
}


