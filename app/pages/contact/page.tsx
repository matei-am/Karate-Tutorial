import Header from "../../components/header";
import Image from "next/image";

export default function Contact(){
     return (

        <div>
        <Header />
        <main>
            <h1>This is my Contact page</h1>
            <p>Nr.Tel: +40771729224
                <br/>
                Email: Mihalachematei5@gmail.com
            </p>
        <Image src="/Poza Matei IG2.jpg" alt="Contact" width={600} height={400} />
        </main>
        </div>
    );
}