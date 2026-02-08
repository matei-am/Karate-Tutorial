"use client";
import Header from "../components/header";

export default function Belts() {
    const belts = [
        {
            color: "White",
            level: "Beginner",
            requirements: [
                "Basic stance (kamae)",
                "Fundamental blocks (uke waza)",
                "Basic punches (tsuki)",
                "Basic kicks (geri)",
                "Understanding of dojo etiquette"
            ],
            description: "The beginning of your karate journey. White belt represents a blank slate and the student's potential."
        },
        {
            color: "Yellow",
            level: "Advanced Beginner",
            requirements: [
                "Proficiency in basic techniques",
                "Understanding of kata fundamentals",
                "Ability to perform basic combinations",
                "Knowledge of counting in Japanese",
                "Demonstrated respect and discipline"
            ],
            description: "Yellow belt represents the first rays of sunlight, symbolizing the beginning of growth and understanding."
        },
        {
            color: "Orange",
            level: "Intermediate",
            requirements: [
                "First complete kata mastery",
                "Intermediate striking techniques",
                "Improved footwork and balance",
                "Sparring fundamentals",
                "Knowledge of self-defense principles"
            ],
            description: "Orange belt represents the rising sun, symbolizing continued development and increased focus."
        },
        {
            color: "Green",
            level: "Upper Intermediate",
            requirements: [
                "Multiple kata proficiency",
                "Advanced striking and blocking",
                "Controlled sparring ability",
                "Teaching basic techniques to lower belts",
                "Physical conditioning and endurance"
            ],
            description: "Green belt represents growth and renewal, showing the student's advancement and deepening knowledge."
        },
        {
            color: "Blue",
            level: "Experienced",
            requirements: [
                "Complex kata mastery",
                "Advanced combinations and transitions",
                "Effective sparring techniques",
                "Understanding of bunkai (kata application)",
                "Mentoring skills and patience"
            ],
            description: "Blue belt represents the sky, symbolizing broadening perspectives and reaching toward higher goals."
        },
        {
            color: "Brown",
            level: "Advanced",
            requirements: [
                "All upper-level kata proficiency",
                "Refined technique and precision",
                "Teaching ability across skill levels",
                "Demonstrated leadership",
                "Deep understanding of karate philosophy",
                "Preparation for black belt examination"
            ],
            description: "Brown belt represents the earth, signifying maturity and the foundation needed for the final step."
        },
        {
            color: "Black",
            level: "Master",
            requirements: [
                "Mastery of all taught kata",
                "Perfect execution of techniques",
                "Teaching and instructing capabilities",
                "Contribution to the dojo community",
                "Understanding of karate philosophy",
                "Passing rigorous physical and technical examination"
            ],
            description: "Black belt represents mastery and the beginning of true understanding. It symbolizes darkness before the dawn—the student has gone beyond the basics and now seeks deeper knowledge."
        },
        {
            color: "Black +",
            level: "Seasoned Master",
            requirements: [
                "Mastery of all taught kata",
                "Perfect execution of techniques",
                "Instruction and examining capabilities",
                "Contribution to the multiple dojo communities",
                "Embodyment of karate philosophy",
                "Passing rigorous physical and technical examination"
            ],
            description: "Black + belt represents a seasoned master who has not only achieved technical proficiency but also embodies the spirit and philosophy of karate. Usually found in examiners or senior instructors, it symbolizes a deep commitment to the martial art and its values. Graded with dan ranks (e.g., 2nd Dan, 3rd Dan), it signifies continued growth and dedication beyond the initial black belt level."
        },
    ];

    return (
        <main className="belts">
            <Header />
            <div className="title-card">
                <h1>Karate Belt System</h1>
                <p>
                    The belt system in karate represents your progression through different levels of skill, discipline, and understanding.
                    Each belt color symbolizes a stage of your martial arts journey.
                </p>
            </div>

            <div className="belt-grid" style={{}}>
                {belts.map((belt, index) => (
                    <div className="belt-card"
                        key={index}
                    >
                        <div className="belt-color-indicator" style={{}}>
                            <div className="belt-color-circle"
                                style={{
                                    backgroundColor: getBeltColor(belt.color),
                                }}
                            ></div>
                            <div>
                                <h2 style={{ margin: 0, fontSize: 20 }}>{belt.color} Belt</h2>
                                <p style={{ margin: 0, color: "#888", fontSize: 14 }}>{belt.level}</p>
                            </div>
                        </div>

                        <p style={{ marginTop: 12, marginBottom: 16, fontStyle: "italic", color: "#555" }}>
                            {belt.description}
                        </p>

                        <h3 style={{ fontSize: 14, marginTop: 16, marginBottom: 8 }}>Requirements:</h3>
                        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8 }}>
                            {belt.requirements.map((req, idx) => (
                                <li key={idx} style={{ fontSize: 14, color: "#555", marginBottom: 4 }}>
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    );
}

function getBeltColor(color: string): string {
    const colors: Record<string, string> = {
        "White": "#ffffff",
        "Yellow": "#fbbf24",
        "Orange": "#f97316",
        "Green": "#22c55e",
        "Blue": "#3b82f6",
        "Brown": "#92400e",
        "Black": "#000000",
        "Black +": "#000000",
    };
    return colors[color] || "#999";
}