import Header from "../../components/header";

const katas = [
    {
        id: "heian-shodan",
        japanese: "平安初段",
        name: "Heian Shodan",
        belt: "White / Yellow",
        moves: 21,
        description:
            "The first kata learned in Shotokan. It introduces basic blocks (gedan barai, age uke), the lunge punch (oi zuki), and the front stance (zenkutsu dachi). It teaches you to move in straight lines with confidence.",
        video: "https://www.youtube.com/embed/q1Rg8rUpjjw?si=TrdY4TDRqWZWO6Ty",
    },
    {
        id: "heian-nidan",
        japanese: "平安二段",
        name: "Heian Nidan",
        belt: "Yellow / Orange",
        moves: 26,
        description:
            "Builds on Shodan by adding side kicks (yoko geri), back-fist strikes (uraken), and the back stance (kokutsu dachi). It introduces the concept of changing stances mid-combination.",
        video: "https://www.youtube.com/embed/rgs1ysn0R-0?si=TZyAetPawO1E8O9n",
    },
    {
        id: "heian-sandan",
        japanese: "平安三段",
        name: "Heian Sandan",
        belt: "Orange / Green",
        moves: 20,
        description:
            "Introduces the horse stance (kiba dachi), simultaneous block-and-strike techniques, and the elbow strike (empi uchi). The shortest of the Heian series but technically demanding.",
        video: "https://www.youtube.com/embed/1MrRmimBJoA?si=oRZ-7A8D1UHfxCTp",
    },
    {
        id: "heian-yondan",
        japanese: "平安四段",
        name: "Heian Yondan",
        belt: "Green / Blue",
        moves: 27,
        description:
            "Features open-hand techniques (shuto uke), knee kicks (hiza geri), and the cross-arm block (juji uke). It demands greater balance and introduces slow, tension-filled movements alongside fast combinations.",
        video: "https://www.youtube.com/embed/k72E1u962Qg?si=XoDgKF3AaZh5CvGj",
    },
    {
        id: "heian-godan",
        japanese: "平安五段",
        name: "Heian Godan",
        belt: "Blue / Purple",
        moves: 23,
        description:
            "The most advanced Heian kata. It includes a jump (tobi), the cross block in a crouching position, and fluid transitions between stances. Mastery of this kata is typically required before reaching brown belt.",
        video: "https://www.youtube.com/embed/JA0Ym97vjLg?si=_z1cLoZgsZbFduqX",
    },
    {
        id: "bassai-dai",
        japanese: "披塞大",
        name: "Bassai Dai",
        belt: "Brown / Black",
        moves: 42,
        description:
            "Meaning 'to storm a fortress,' Bassai Dai is one of the most popular Shotokan katas. It emphasises powerful hip rotation, strong blocks converting to attacks, and changes from defensive to offensive attitude. Often the first choice for Shodan examination.",
        video: "https://www.youtube.com/embed/Qpt3W7Y06Kg?si=JZ-d9BYTaNL2HIk1",
    },
    {
        id: "jion",
        japanese: "慈恩",
        name: "Jion",
        belt: "Brown / Black",
        moves: 47,
        description:
            "Named after the Jion Buddhist temple, this kata focuses on strong, grounded techniques and direct power. It uses many fundamental techniques in complex combinations, making it an excellent test of kihon mastery under pressure.",
        video: "https://www.youtube.com/embed/KErsdtTwqM8?si=G0gLqqsIvaWdwenf",
    },
    {
        id: "empi",
        japanese: "燕飛",
        name: "Empi",
        belt: "Brown / Black",
        moves: 37,
        description:
            "Meaning 'flight of the swallow,' Empi is characterised by fast, dynamic movements including a dramatic 360-degree turn and jump. It alternates between high and low positions with quick directional changes, reflecting the darting flight of a swallow.",
        video: "https://www.youtube.com/embed/IInNlHZQUrE?si=oZy-XuMaX3ZVbyAm",
    },
    {
        id: "kanku-dai",
        japanese: "観空大",
        name: "Kanku Dai",
        belt: "Brown / Black",
        moves: 65,
        description:
            "The longest standard Shotokan kata. Its name means 'viewing the sky' — the opening move involves looking up through the hands. Kanku Dai contains nearly every technique found in the Heian series and is considered the most comprehensive kata in the syllabus.",
        video: "https://www.youtube.com/embed/5Hgi2vi9EbA?si=kiDLKW5j3kSM2kt5",
    },
];

export default function KataList() {
    return (
        <main>
            <Header initialUser={null} />
            <div className="kata-page">
                {/* Title Card */}
                <div className="title-card text-4xl font-bold mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        型 Kata: Shotokan Forms
                    </h1>
                    <p>
                        Kata are pre-arranged sequences of techniques performed against imaginary
                        opponents. Each kata tells a story of combat and encodes generations of
                        martial wisdom. In Shotokan karate, kata training develops timing, breathing,
                        rhythm, and the ability to transition between techniques with power and
                        precision.
                    </p>
                </div>

                {/* Kata List */}
                <div className="kata-list">
                    {katas.map((kata) => (
                        <div key={kata.id} className="kata-card">
                            <div className="kata-card-inner">
                                {/* Info Side */}
                                <div className="kata-info">
                                    <span className="kata-belt-badge">{kata.belt}</span>
                                    <h2 className="kata-name">
                                        {kata.japanese} {kata.name}
                                    </h2>
                                    <span className="kata-moves">{kata.moves} movements</span>
                                    <p className="kata-description">{kata.description}</p>
                                </div>

                                {/* Video Side */}
                                <div className="kata-video-container">
                                    <iframe
                                        className="kata-video"
                                        src={kata.video}
                                        title={`${kata.name} demonstration`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Banner */}
                <div className="kata-banner">
                    <h2>How to Practice Kata</h2>
                    <ul>
                        <li>
                            <strong>Learn the embusen</strong> — the performance line or floor
                            pattern of the kata.
                        </li>
                        <li>
                            <strong>Start slow</strong> — focus on correct form, stance transitions,
                            and breathing before adding speed.
                        </li>
                        <li>
                            <strong>Visualise opponents</strong> — every block, strike, and kick
                            has a purpose. Imagine the attacker.
                        </li>
                        <li>
                            <strong>Use kime</strong> — each technique should finish with a sharp
                            focus of energy.
                        </li>
                        <li>
                            <strong>Record yourself</strong> — compare your form against the videos
                            above and refine continuously.
                        </li>
                        <li>
                            <strong> © No copyright infringement intended </strong> — All copyright belongs to the original creators of the kata and the performers in the videos. This page is for educational purposes only.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}