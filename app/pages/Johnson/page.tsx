import Header from "../../components/header";
import Image from "next/image";
export default function Johnson() {
    return (
        <>
            <Header initialUser={null} />
            <div>
                <main style ={{marginLeft: "50px"}}>
                    <h1>This is my cat, Johnson!</h1>
                    <p>Johnson is my almost 1 year old cat.
                        <br />
                        His Birthday is coming up soon on 23rd of March!.
                        Say Happy Birthday to Johnson!
                    </p>
                </main>
            </div>
            <div style={{ display: "flex", gap: "0px" }}>
                <Image src="/Johnson.jpg" alt="Johnson" width={600} height={400} />
                <Image src="/Johnson2.jpg" alt="Johnson2" width={600} height={400} />
                <Image src="/Johnson3.jpg" alt="Johnson3" width={600} height={400} />
            </div>

        </>
    );
}