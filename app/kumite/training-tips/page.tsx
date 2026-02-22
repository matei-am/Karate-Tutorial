import Header from "../../components/header";

const tips = [
    {
        icon: "👣",
        title: "Master Your Footwork",
        description:
            "Footwork is your foundation. Practice quick, balanced movements — advance, retreat, and sidestep without losing your stance. Good footwork keeps you safe and ready to strike.",
        image: "/kumite/tips/kumite-footwork.jpg",
        color: "tips-kumite-red",
    },
    {
        icon: "📏",
        title: "Control Your Distance",
        description:
            "Stay at the right distance from your opponent. Too close and you lose power; too far and you can't throw techniques. Learn to circle and adjust constantly.",
        image: "/kumite/tips/kumite-distance.jpg",
        color: "tips-kumite-blue",
    },
    {
        icon: "⏰",
        title: "Develop Timing",
        description:
            "The best technique at the wrong moment is useless. Watch your opponent's breathing, movements, and guard. Strike when they're transitioning or off-balance.",
        image: "/kumite/tips/kumite-timing.jpg",
        color: "tips-kumite-purple",
    },
    {
        icon: "🔗",
        title: "Throw Combinations",
        description:
            "Don't rely on single techniques. Combine punches with kicks, blocks with counters. Combinations confuse opponents and increase your scoring chances.",
        image: "/kumite/tips/kumite-combos.jpg",
        color: "tips-kumite-green",
    },
    {
        icon: "🛡️",
        title: "Defense First",
        description:
            "A good defense is your best offense. Keep your guard tight, move your head, and anticipate attacks. The best point is one scored while avoiding your opponent's techniques.",
        image: "/kumite/tips/kumite-defense.jpg",
        color: "tips-kumite-orange",
    },
    {
        icon: "👀",
        title: "Read Your Opponent",
        description:
            "Study their patterns. Do they always kick right? Do they drop their guard after a punch? Exploit these habits. Every fighter has tells — find yours and avoid them.",
        image: "/kumite/tips/kumite-read.jpg",
        color: "tips-kumite-cyan",
    },
    {
        icon: "💨",
        title: "Develop Speed",
        description:
            "Speed is power. Train for explosive technique execution. Fast techniques are harder to see, harder to block, and score more points if they land clean.",
        image: "/kumite/tips/kumite-speed.jpg",
        color: "tips-kumite-yellow",
    },
    {
        icon: "💪",
        title: "Build Conditioning",
        description:
            "Kumite is exhausting. Run, do circuit training, and practice kata at high intensity. Your conditioning often outlasts your opponent's in the final seconds.",
        image: "/kumite/tips/kumite-conditioning.jpg",
        color: "tips-kumite-pink",
    },
    {
        icon: "🧠",
        title: "Mental Toughness",
        description:
            "Stay calm under pressure. Control your emotions, focus on your strategy, and don't panic. The fighter with the composure usually wins.",
        image: "/kumite/tips/kumite-mental.jpg",
        color: "tips-kumite-indigo",
    },
    {
        icon: "🤝",
        title: "Respect Your Partner",
        description:
            "Training is not fighting. You and your partner are teammates. Help each other improve, tap when things hurt too much, and always prioritize safety first.",
        image: "/kumite/tips/kumite-respect.jpg",
        color: "tips-kumite-teal",
    },
    {
        icon: "🎯",
        title: "Target Practice",
        description:
            "Drill specific targets repeatedly. Practice hitting the same spot on the face or body until it becomes second nature. Accuracy beats power.",
        image: "/kumite/tips/kumite-target.jpg",
        color: "tips-kumite-rose",
    },
    {
        icon: "📚",
        title: "Study Video",
        description:
            "Watch yourself spar. Watch professionals. Study your weaknesses and their strengths. Observation and analysis are as important as physical training.",
        image: "/kumite/tips/kumite-video.jpg",
        color: "tips-kumite-amber",
    },
];

export default function KumiteTrainingTips() {
    return (
        <main>
            <Header initialUser={null} />
            <div className="kumite-tips-page">
                {/* Title Card */}
                <div className="title-card text-4xl font-bold mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        組手 Kumite: Training Tips
                    </h1>
                    <p style={{marginRight: "3rem", marginLeft: "3rem"}}>
                        Kumite training develops your ability to apply karate techniques under
                        pressure against a live opponent. These twelve tips will sharpen your
                        sparring skills and help you win matches through strategy, fitness, and
                        mental clarity.
                    </p>
                </div>

                {/* Tips Grid */}
                <div className="kumite-tips-grid">
                    {tips.map((tip) => (
                        <div key={tip.title} className={`kumite-tip-card ${tip.color}`}>
                            <div className="tip-card-image">
                                <img
                                    src={tip.image}
                                    alt={tip.title}
                                    className="tip-image"
                                />
                            </div>
                            <span className="tip-icon">{tip.icon}</span>
                            <h2 className="tip-title">{tip.title}</h2>
                            <p className="tip-description">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}