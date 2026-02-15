import Header from "../../components/header";

const tips = [
    {
        icon: "🪞",
        title: "Use a Mirror",
        text: "Practise in front of a mirror to check your stances, hand positions, and overall symmetry. Visual feedback accelerates correction.",
        color: "tips-rose",
    },
    {
        icon: "🐢",
        title: "Go Slow First",
        text: "Perform the entire kata at half speed. Focus on correct form, breathing, and stance transitions before adding power and rhythm.",
        color: "tips-sky",
    },
    {
        icon: "👁️",
        title: "Visualise Opponents",
        text: "Every technique has a target. Imagine real attackers — where they stand, how they strike, and how your kata responds.",
        color: "tips-amber",
    },
    {
        icon: "🫁",
        title: "Breathe with Purpose",
        text: "Exhale on every strike and block. Use a sharp kiai on the key techniques. Never hold your breath through combinations.",
        color: "tips-emerald",
    },
    {
        icon: "🔁",
        title: "Repeat, Then Repeat Again",
        text: "Perform each kata dozens of times per session. Muscle memory only develops through relentless, mindful repetition.",
        color: "tips-violet",
    },
    {
        icon: "📐",
        title: "Master the Embusen",
        text: "Learn the exact floor pattern of every kata. You should always return to your starting point — if you don't, something is off.",
        color: "tips-orange",
    },
    {
        icon: "📹",
        title: "Record & Review",
        text: "Film yourself performing kata, then watch it back. Compare your recording to reference videos. You'll spot errors you can't see in real-time.",
        color: "tips-indigo",
    },
    {
        icon: "🤝",
        title: "Learn the Bunkai",
        text: "Study the applications (bunkai) of each technique in your kata. Understanding the context and purpose makes the movements make sense.",
        color: "tips-pink",
    },
    {
        icon: "💪",
        title: "Practice with Power",
        text: "After mastering form, add kime (focus) and speed. Strike and block as if facing real opponents. Power comes naturally with perfect technique.",
        color: "tips-teal",
    },
];

export default function PracticeTips() {
    return (
        <main>
            <Header initialUser={null} />
            <div className="tips-page">
                {/* Title Card */}
                <div className="title-card text-4xl font-bold mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        型 Kata: Practice Tips
                    </h1>
                    <p>
                        Knowing a kata&apos;s sequence is only the beginning. How you practise
                        determines how fast you improve. These six tips will sharpen your form,
                        deepen your understanding, and bring your kata to life.
                    </p>
                </div>

                {/* Tips Grid */}
                <div className="tips-grid">
                    {tips.map((tip) => (
                        <div key={tip.title} className={`tip-card ${tip.color}`}>
                            <span className="tip-icon">{tip.icon}</span>
                            <h2 className="tip-title">{tip.title}</h2>
                            <p className="tip-text">{tip.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
