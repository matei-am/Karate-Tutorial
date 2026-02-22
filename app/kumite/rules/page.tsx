import Header from "../../components/header";

const rules = [
    {
        icon: "🥊",
        title: "Valid Target Areas",
        description:
            "Techniques must be directed at specific body areas: head (jodan), torso front and back (chudan), and abdomen (gedan). Attacks to other areas are forbidden.",
        image: "/kumite/rules/kumite-targets.jpg",
        color: "rules-red",
    },
    {
        icon: "⚡",
        title: "Ippon & Scoring",
        description:
            "Ippon (1 point) is awarded for clean techniques with good form, speed, and control. Excessive force or bad timing results in no point.",
        image: "/kumite/rules/kumite-scoring.jpg",
        color: "rules-blue",
    },
    {
        icon: "🛑",
        title: "Prohibited Areas",
        description:
            "No attacks to the groin, knees, insteps, throat, or behind the head. Attacks below the belt are strictly forbidden. Throws and sweeps are also prohibited.",
        image: "/kumite/rules/kumite-prohibited.jpg",
        color: "rules-purple",
    },
    {
        icon: "✋",
        title: "Control & Safety",
        description:
            "All techniques must be executed with control. Excessive contact, even to legal areas, results in disqualification. The competitor's safety is paramount.",
        image: "/kumite/rules/kumite-control.jpg",
        color: "rules-green",
    },
    {
        icon: "👊",
        title: "Hand Techniques",
        description:
            "Punches (zuki), backfists (uraken), spear hands (nukite), and open-hand strikes are allowed to the face and body when controlled and focused properly.",
        image: "/kumite/rules/kumite-hands.jpg",
        color: "rules-orange",
    },
    {
        icon: "🦵",
        title: "Kick Techniques",
        description:
            "Kicks are allowed to the face, head, and body (chudan). Kicks performed with good balance and control score higher. Round kicks and front kicks are most common.",
        image: "/kumite/rules/kumite-kicks.jpg",
        color: "rules-cyan",
    },
    {
        icon: "⏱️",
        title: "Match Duration",
        description:
            "Matches typically last 2-3 minutes for seniors, with variations for juniors. Time is divided into clear rounds with brief pauses for scoring assessment.",
        image: "/kumite/rules/kumite-time.jpg",
        color: "rules-yellow",
    },
    {
        icon: "🔴",
        title: "Warning & Fouls",
        description:
            "Shido (warnings) are given for fouls: stepping out of bounds, excessive contact, or illegal techniques. Three shido result in automatic disqualification.",
        image: "/kumite/rules/kumite-fouls.jpg",
        color: "rules-pink",
    },
    {
        icon: "🏆",
        title: "Winning Conditions",
        description:
            "Win by first attaining 3 points, or by majority points if time expires. Knockdown (opponent unable to fight) results in immediate victory.",
        image: "/kumite/rules/kumite-win.jpg",
        color: "rules-indigo",
    },
    {
        icon: "🧑‍⚖️",
        title: "Referee Decisions",
        description:
            "Main referee (shushin) makes all final scoring decisions. Corner referees assist. Their decision is law — no arguments are tolerated.",
        image: "/kumite/rules/kumite-referee.jpg",
        color: "rules-teal",
    },
    {
        icon: "🥋",
        title: "Weight Categories",
        description:
            "Competitions are divided into weight classes: lightweight, middleweight, heavyweight, and open. Divisions ensure fair competition across sizes.",
        image: "/kumite/rules/kumite-weight.jpg",
        color: "rules-rose",
    },
    {
        icon: "🚫",
        title: "Disqualification Offenses",
        description:
            "Automatic disqualification for: excessive contact, attacking a downed opponent, abusive behavior, or three warnings (shido). Respect is non-negotiable.",
        image: "/kumite/rules/kumite-disqualify.jpg",
        color: "rules-amber",
    },
];

export default function KumiteRules() {
    return (
        <main>
            <Header initialUser={null} />
            <div className="kumite-rules-page">
                {/* Title Card */}
                <div className="title-card text-4xl font-bold mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        組手 Kumite: Competition Rules
                    </h1>
                    <p>
                        Kumite is sparring against a partner. Shotokan kumite is a competitive,
                        point-based sport with strict safety guidelines. Understanding the rules
                        ensures fair competition and protects all participants. Every rule exists to
                        keep the art pure and safe.
                    </p>
                </div>

                {/* Rules Grid */}
                <div className="kumite-rules-grid">
                    {rules.map((rule) => (
                        <div key={rule.title} className={`kumite-rule-card ${rule.color}`}>
                            <div className="rule-card-image">
                                <img
                                    src={rule.image}
                                    alt={rule.title}
                                    className="rule-image"
                                />
                            </div>
                            <span className="rule-icon">{rule.icon}</span>
                            <h2 className="rule-title">{rule.title}</h2>
                            <p className="rule-description">{rule.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}