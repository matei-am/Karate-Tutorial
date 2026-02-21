import Header from "../../components/header";

const strategies = [
    {
        id: "one-two-three",
        japanese: "１－２－３",
        name: "The 1-2-3",
        difficulty: "Intermediate",
        timing: "Quick succession",
        description:
            "A fundamental three-part combo: Gizami-zuki (lead punch), Gyaku-zuki (reverse punch), then Mawashi geri (roundhouse kick). Fast and scoring, it overwhelms the opponent with rapid fire before opening them up for the kick.",
        techniques: [
            "Gizami-zuki (lead punch establishing distance)",
            "Gyaku-zuki (powerful reverse punch response)",
            "Mawashi geri (high roundhouse kick for the finish)",
        ],
        image: "/kumite/strategies/kumite-1-2-3.jpg",
    },
    {
        id: "blitz",
        japanese: "電撃攻撃",
        name: "The Blitz",
        difficulty: "Advanced",
        timing: "Fast charge",
        description:
            "Three consecutive Gyaku-zuki punches delivered while rapidly advancing forward. The opponent has no time to counter. Explosive footwork and continuous hip rotation are key. Dangerous at close range.",
        techniques: [
            "Gyaku-zuki #1 (establishing pressure)",
            "Gyaku-zuki #2 (closing distance with hip drive)",
            "Gyaku-zuki #3 (final powerful punch)",
        ],
        image: "/kumite/strategies/kumite-blitz.jpg",
    },
    {
        id: "whirlwind",
        japanese: "旋風",
        name: "The Whirlwind",
        difficulty: "Advanced",
        timing: "Flowing rotation",
        description:
            "A spinning combination of Gyaku-zuki, Mawashi geri, and Ushiro ura mawashi geri (reverse roundhouse kick). Uses continuous hip rotation and body momentum. Looks spectacular but requires perfect balance and timing.",
        techniques: [
            "Gyaku-zuki (anchor the combination)",
            "Mawashi geri (front roundhouse)",
            "Ushiro ura mawashi geri (spinning back roundhouse kick)",
        ],
        image: "/kumite/strategies/kumite-whirlwind.jpg",
    },
    {
        id: "low-high",
        japanese: "下から上",
        name: "Low-to-High",
        difficulty: "Intermediate",
        timing: "Measured",
        description:
            "Start with a low Mae geri (front kick) to the abdomen, forcing the opponent to drop their guard. Follow with a high-level Mawashi geri or Ushiro geri (back kick) aimed at the face while they're vulnerable.",
        techniques: [
            "Mae geri chudan (low kick distraction)",
            "Mawashi geri jodan (high kick to the head)",
        ],
        image: "/kumite/strategies/kumite-low-high.jpg",
    },
    {
        id: "side-angle",
        japanese: "横角度",
        name: "Side-Angle Attack",
        difficulty: "Advanced",
        timing: "Circling",
        description:
            "Move laterally around your opponent using quick footwork, then throw a Yoko geri (side kick) while they're still facing their original direction. Intelligence beats power — change your angle, not just your depth.",
        techniques: [
            "Footwork (pivot and circle)",
            "Yoko geri kekomi (side thrust kick at the moment they're turned)",
        ],
        image: "/kumite/strategies/kumite-side-angle.jpg",
    },
    {
        id: "punch-sweep",
        japanese: "拳と足",
        name: "Punch & Sweep Combo",
        difficulty: "Intermediate",
        timing: "Coordinated",
        description:
            "Deliver a Oi zuki (lunge punch) then immediately follow with a Mae geri to the same side. Both attacks should land almost simultaneously, with the punch masking the kick. Confuses opponents on what's coming.",
        techniques: [
            "Oi zuki (forward punch misdirection)",
            "Mae geri (front kick combo)",
        ],
        image: "/kumite/strategies/kumite-punch-sweep.jpg",
    },
    {
        id: "retreat-counter",
        japanese: "後方反撃",
        name: "Retreat & Counter",
        difficulty: "Beginner",
        timing: "Reactive",
        description:
            "Step back to evade your opponent's attack, then immediately counter with a long-range Gyaku-zuki or Mae geri. The opponent's forward momentum combined with your counter creates a powerful impact.",
        techniques: [
            "Evasive footwork (step back and angle)",
            "Gyaku-zuki or Mae geri counter",
        ],
        image: "/kumite/strategies/kumite-retreat-counter.jpg",
    },
    {
        id: "kick-punch",
        japanese: "蹴りから拳",
        name: "Kick-to-Punch Combo",
        difficulty: "Intermediate",
        timing: "Flowing",
        description:
            "Throw a Mae geri (front kick) to create distance, then as your leg returns, transition into an Oi zuki or Gyaku-zuki. The kick resets your distance and timing for the follow-up punch.",
        techniques: [
            "Mae geri (front kick setup)",
            "Gyaku-zuki (powerful follow-up punch)",
        ],
        image: "/kumite/strategies/kumite-kick-punch.jpg",
    },
];

export default function KumiteStrategies() {
    return (
        <main>
            <Header initialUser={null} />
            <div className="kumite-strategies-page">
                {/* Title Card */}
                <div className="title-card text-4xl font-bold mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        組手 Kumite: Winning Strategies
                    </h1>
                    <p>
                        Kumite success depends on knowing the right combinations at the right
                        moment. These eight popular strategies blend speed, timing, and technique
                        into devastating offensive combinations. Master them, adapt them, and most
                        importantly, apply them when it matters.
                    </p>
                </div>

                {/* Strategy Cards */}
                <div className="kumite-strategies-list">
                    {strategies.map((strategy) => (
                        <div key={strategy.id} className="kumite-strategy-card">
                            <div className="kumite-strategy-inner">
                                {/* Info Side */}
                                <div className="kumite-strategy-info">
                                    <span className="kumite-difficulty-badge">
                                        {strategy.difficulty}
                                    </span>
                                    <h2 className="kumite-strategy-name">
                                        {strategy.japanese} {strategy.name}
                                    </h2>
                                    <span className="kumite-timing">{strategy.timing}</span>
                                    <p className="kumite-strategy-description">
                                        {strategy.description}
                                    </p>
                                    <div className="kumite-techniques">
                                        <h3>Techniques:</h3>
                                        <ul>
                                            {strategy.techniques.map((tech, i) => (
                                                <li key={i}>{tech}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className="kumite-strategy-image-container">
                                    <img
                                        src={strategy.image}
                                        alt={`${strategy.name} demonstration`}
                                        className="kumite-strategy-image h-full w-auto mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Tips Banner */}
                <div className="kumite-strategies-banner">
                    <h2>Keys to Effective Kombinado Strategies</h2>
                    <ul>
                        <li>
                            <strong>Timing Is Everything</strong> — Your best technique is useless
                            if it lands at the wrong moment. Wait for the opening.
                        </li>
                        <li>
                            <strong>Flow Between Techniques</strong> — The transition from one move
                            to the next should be smooth and natural, not forced.
                        </li>
                        <li>
                            <strong>Respect Distance</strong> — Some combos work at close range,
                            others from far away. Know your spacing.
                        </li>
                        <li>
                            <strong>Commit Fully</strong> — Half-committed techniques are
                            predictable and easily blocked. Go all-in.
                        </li>
                        <li>
                            <strong>Practice Against Resistance</strong> — Combos that work on the
                            air mat might fail against a skilled opponent. Drill with partners.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}