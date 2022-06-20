//기본적인 document의 형태
import Footer from "@/components/Footer";
import { Nav } from "@/components/Nav";
import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return{ ... initialProps}
    }
    render(){
        return(
            <Html>
                <Head/>
                <title>Closet</title>
                <meta charSet="utf-8"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = 'anonymous'/>
                <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap" rel="stylesheet"/>
                <script src="https://accounts.google.com/gsi/client" async defer></script>
                <meta
              name="viewport"
              content="width=device-width, user-scalable=no,
              initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"/>
          <script src='https://kit.fontawesome.com/a076d05399.js' crossOrigin='anonymous'></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossOrigin="anonymous"></script>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
                <body>
                    <Main/>
                    <NextScript/>
                    <Footer/>
                </body>
            </Html>
        )
    }
}
export default MyDocument