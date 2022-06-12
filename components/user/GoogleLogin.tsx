import { useScript } from "@/hooks";
import { RefObject, useRef } from "react";

interface Idiv {
    divRef : RefObject<HTMLDivElement>
}

export default function GoogleLogin({
    handleCredentialResponse = (response : any) =>{
    console.log("ENCODED JWT ID TOKEN" + response.credential)
    }
}) {

    interface Idiv {
        googleSignInButton : RefObject<HTMLDivElement>
    }
    const isBrowser = typeof window !== "undefined";
    const googleSignInButton = useRef(document.getElementById("#buttonDiv")!)
    useScript('https://accounts.google.com/gsi/client',() => {
    window.google.accounts.id.initialize({
      client_id: "44815761184-9k90jdnp4r85uo4mcrsh4mqbabbeu7l5.apps.googleusercontent.com",
      callback: handleCredentialResponse
  })
    window.google.accounts.id.renderButton(
      //document.getElementById( "#buttonDiv" )!, <div id = "buttonDiv"></div>
      googleSignInButton.current,
      {
        theme: "outline", size: "large",
        type: 'standard', text: "signin_with"
      }
    )
  });
  return (isBrowser? <div ref={googleSignInButton as React.RefObject<HTMLDivElement>}></div> : null)
}

