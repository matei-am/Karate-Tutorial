import Header from "../../components/header";
import Image from "next/image";
import { FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
export default function Contact() {
    const contactIcons = [
        {
            instagram: "/instagram-icon.png",
            link: "https://www.instagram.com/matei_a.m/"
        },

        {
            email: "/email-icon.png",
            link: "mailto: mihalachematei5@gmail.com"
        },
       
            
        {
            phone: "/phone-icon.png",
            link: "tel: +40771729224"
        },
       
    ];
    return (

        <div>
            <Header initialUser={null} />
            <main className="contact-page">
               <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem", paddingTop: "24px", borderRadius:"24px", textAlign: "center", color: "#f3f3f3", marginRight: "3rem", marginLeft: "3rem" }}>
                    <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem", textAlign: "center" }}>
                        Thanks for reaching out! I look forward to connecting with you.
                    </h1>
                    <p>
                        
                        If you are interested in learning more about my work, have questions about the site, or just want to say hello, please feel free to contact me through any of the following channels:
                        <div className="contact-icons" style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem", paddingTop: "24px", borderRadius:"24px", textAlign: "center", color: "#f3f3f3" }}>
                        <a href="https://www.instagram.com/matei_a.m/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={50} />
                        </a>
                        <a href="mailto: mihalachematei5@gmail.com">
                            <FaEnvelope size={50} />
                        </a>
                        <a href="tel: +40771729224">
                            <FaPhone size={50} />
                        </a>
                        </div>
                    </p>
                    <Image
                    src="/matei-poza.jpg"
                    alt="Contact"
                    width={600}
                    height={400} 
                    style={{ display: "block", margin: "0 auto", marginTop: "8rem", borderRadius: "8px" }} 
                />
                </div>
                <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem", paddingTop: "24px", borderRadius:"24px", textAlign: "center", color: "#f3f3f3" }}>
                    Best regards, Matei Mihalache
                </div>
            </main>
        </div>
    );
}