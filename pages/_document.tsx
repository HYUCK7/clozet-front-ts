//기본적인 document의 형태
import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return{ ... initialProps}
    }
    render(){
        return(
            <Html>
                <Head/>
                <title>Closet</title>
                <meta charSet="utf-8"></meta>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
export default MyDocument