"use client";

import { useState } from "react";
import Header from "../../components/header";

const techniques = [
    {
        id: "oi-zuki",
        japanese: "追い突き",
        name: "Oi Zuki (Lunge Punch)",
        color: "blue",
        img1: "/oi-zuki-1.jpg",
        img2: "/oi-zuki-2.jpg",
        description:
            "A powerful straight punch delivered while stepping forward. The punching arm and the stepping leg move together, generating momentum from the entire body.",
        steps: [
            "Begin in zenkutsu dachi (front stance)",
            "Step forward with the rear leg into a new front stance",
            "Simultaneously extend the punching fist straight from the hip",
            "Rotate the fist so the palm faces downward at full extension",
            "The non-punching hand pulls back to the hip (hikite)",
            "Hips rotate sharply to add power to the punch",
            "Lock the stance as the punch reaches the target",
        ],
        benefits: [
            "Develops coordinated full-body movement",
            "Builds explosive forward power",
            "Fundamental offensive technique in kata and kumite",
            "Trains hip rotation and weight transfer",
        ],
    },
    {
        id: "gyaku-zuki",
        japanese: "逆突き",
        name: "Gyaku Zuki (Reverse Punch)",
        color: "red",
        img1: "/gyaku-zuki-1.jpg",
        img2: "/gyaku-zuki-2.jpg",
        description:
            "The most commonly used scoring technique in kumite. The punch is delivered with the rear hand while maintaining stance, producing tremendous rotational power from the hips.",
        steps: [
            "Start in zenkutsu dachi with guard up",
            "Drive the rear hip forward with explosive rotation",
            "Extend the rear fist straight toward the target",
            "Rotate the fist to palm-down at full extension",
            "Pull the lead hand back to the hip (hikite)",
            "Keep the front knee stable — do not let it collapse inward",
            "Snap the hip back to recover guard position",
        ],
        benefits: [
            "Most powerful hand technique in karate",
            "Primary scoring technique in sport kumite",
            "Excellent for developing hip rotation power",
            "Can be delivered from a stationary position",
        ],
    },
    {
        id: "mae-geri",
        japanese: "前蹴り",
        name: "Mae Geri (Front Kick)",
        color: "green",
        img1: "/mae-geri-1.jpg",
        img2: "/mae-geri-2.jpg",
        description:
            "A direct, linear kick aimed at the midsection or face. The ball of the foot (koshi) is the striking surface. Speed and snap are more important than raw power.",
        steps: [
            "Lift the kicking knee high toward your chest",
            "Curl your toes back to expose the ball of the foot",
            "Snap the lower leg forward in a whip-like motion",
            "Strike with the ball of the foot (koshi)",
            "Immediately retract the leg back to the chambered position",
            "Return the foot to the ground in a controlled stance",
            "Keep your guard hands up throughout the kick",
        ],
        benefits: [
            "Fast, direct attack to the centerline",
            "Effective at maintaining distance from opponents",
            "Builds hip-flexor strength and flexibility",
            "Versatile — can target jodan, chudan, or gedan",
        ],
    },
    {
        id: "mawashi-geri",
        japanese: "回し蹴り",
        name: "Mawashi Geri (Roundhouse Kick)",
        color: "purple",
        img1: "/mawashi-geri-1.jpg",
        img2: "/mawashi-geri-2.jpg",
        description:
            "A circular kick that travels in an arc to strike the side of the target. It uses the instep (haisoku) or the ball of the foot and is one of the most versatile kicks in karate.",
        steps: [
            "Pivot on the supporting foot so the heel faces the target",
            "Raise the kicking knee to the side, keeping it high",
            "Rotate the hip over while snapping the lower leg toward the target",
            "Strike with the instep or ball of the foot",
            "Follow through with hip rotation for maximum impact",
            "Retract the leg quickly to the chambered position",
            "Re-establish your stance and guard immediately",
        ],
        benefits: [
            "Attacks from an angle, harder to block than linear kicks",
            "High-scoring technique in kumite",
            "Develops hip mobility and rotational power",
            "Effective at all three levels (jodan, chudan, gedan)",
        ],
    },
    {
        id: "age-uke",
        japanese: "上げ受け",
        name: "Age Uke (Rising Block)",
        color: "amber",
        img1: "/age-uke-1.jpg",
        img2: "/age-uke-2.jpg",
        description:
            "A fundamental upward sweeping block used to deflect attacks aimed at the head (jodan level). The forearm rises diagonally across the body to redirect the incoming strike above the head.",
        steps: [
            "Start with the blocking arm across the body at waist level",
            "Sweep the forearm upward in a rising arc",
            "Rotate the forearm so the outer edge faces upward at the finish",
            "The block ends above and slightly in front of the forehead",
            "The opposite hand pulls back sharply to the hip (hikite)",
            "Keep your elbow slightly bent — never fully lock it",
            "Maintain a strong, stable stance throughout",
        ],
        benefits: [
            "Essential defense against jodan (head-level) attacks",
            "Develops strong forearm conditioning",
            "Teaches simultaneous block-and-counter timing",
            "Foundation for many kata sequences",
        ],
    },
    {
        id: "yoko-geri",
        japanese: "横蹴り",
        name: "Yoko Geri Kekomi (Side Thrust Kick)",
        color: "teal",
        img1: "/yoko-geri-1.jpg",
        img2: "/yoko-geri-2.jpg",
        description:
            "A powerful thrusting kick delivered to the side. The striking surface is the edge of the foot (sokuto). It combines reach, power, and stability, making it one of karate's most devastating kicks.",
        steps: [
            "Raise the kicking knee high toward the chest",
            "Pivot on the supporting foot so the heel faces the target",
            "Thrust the foot sideways toward the target",
            "Strike with the edge of the foot (sokuto)",
            "Lean the upper body slightly away for balance",
            "Lock the kicking leg briefly at full extension",
            "Retract the leg and return to a stable stance",
        ],
        benefits: [
            "Extremely powerful — one of the strongest kicks in karate",
            "Long reach keeps opponents at distance",
            "Effective stopping technique against charging opponents",
            "Builds exceptional hip and leg strength",
        ],
    },
];

const colorMap: Record<string, { border: string; heading: string; bg: string }> = {
    blue: { border: "border-blue-500", heading: "text-blue-600", bg: "bg-blue-50" },
    red: { border: "border-red-500", heading: "text-red-600", bg: "bg-red-50" },
    green: { border: "border-green-500", heading: "text-green-600", bg: "bg-green-50" },
    purple: { border: "border-purple-500", heading: "text-purple-600", bg: "bg-purple-50" },
    amber: { border: "border-amber-500", heading: "text-amber-600", bg: "bg-amber-50" },
    teal: { border: "border-teal-500", heading: "text-teal-600", bg: "bg-teal-50" },
};

export default function KihonTechniques() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => setOpenId(openId === id ? null : id);

    return (
        <main>
            <Header initialUser={null} />
            <div className="w-full px-4 py-8 flex flex-col items-center">
                {/* Title */}
                <div className="title-card text-4xl font-bold mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        基本 Kihon: Essential Karate Techniques
                    </h1>
                    <p>
                        Techniques (waza) are the tools of karate. From powerful punches to
                        devastating kicks and solid blocks, these fundamental techniques form the
                        core of every karateka&apos;s training. Select a technique to explore it in
                        detail.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {techniques.map((t) => {
                        const active = openId === t.id;
                        return (
                            <button
                                key={t.id}
                                onClick={() => toggle(t.id)}
                                className={`px-5 py-3 rounded-lg font-semibold transition-all duration-200 border-2 cursor-pointer ${
                                    active
                                        ? `${colorMap[t.color].bg} ${colorMap[t.color].border} ${colorMap[t.color].heading}`
                                        : "bg-white border-gray-300 text-gray-700 hover:border-gray-500"
                                }`}
                            >
                                {t.japanese} {t.name.split("(")[0].trim()}
                            </button>
                        );
                    })}
                </div>

                {/* Expanded Technique Detail */}
                {techniques.map((t) => {
                    if (openId !== t.id) return null;
                    const c = colorMap[t.color];
                    return (
                        <section
                            key={t.id}
                            className={`w-full mb-12 border-l-4 ${c.border} pl-6 animate-[fadeIn_0.3s_ease]`}
                        >
                            <h2 className={`text-3xl font-bold mb-4 ${c.heading} text-center`}>
                                {t.japanese} {t.name}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start w-full">
                                {/* Left image */}
                                <div className="w-full flex justify-center">
                                    <img
                                        src={t.img1}
                                        alt={`${t.name} demonstration 1`}
                                        className="w-[18em] h-auto mx-auto rounded-lg shadow-md bg-gray-200"
                                    />
                                </div>

                                {/* Content */}
                                <div className={`${c.bg} p-6 rounded-lg w-full text-center`}>
                                    <p className="text-lg mb-4">{t.description}</p>
                                    <h3 className="text-xl font-semibold mb-3">How to Execute:</h3>
                                    <ul className="space-y-2 ml-4 list-disc text-center">
                                        {t.steps.map((s, i) => (
                                            <li key={i}>{s}</li>
                                        ))}
                                    </ul>
                                    <h3 className="text-xl font-semibold mt-4 mb-3">
                                        Key Benefits:
                                    </h3>
                                    <ul className="space-y-2 ml-4 list-disc">
                                        {t.benefits.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right image */}
                                <div className="w-full flex justify-center">
                                    <img
                                        src={t.img2}
                                        alt={`${t.name} demonstration 2`}
                                        className="w-[18em] h-auto mx-auto rounded-lg shadow-md bg-gray-200"
                                    />
                                </div>
                            </div>
                        </section>
                    );
                })}

                {/* General Tips */}
                <section className="bg-gray-100 p-8 rounded-lg text-center w-full max-w-4xl">
                    <h2 className="text-2xl font-bold mb-4 text-center">
                        Training Tips for All Techniques
                    </h2>
                    <ul className="space-y-3 list-disc ml-4">
                        <li>
                            <strong>Kime (Focus):</strong> Every technique must finish with a sharp,
                            decisive focus of energy at the point of impact.
                        </li>
                        <li>
                            <strong>Hip Rotation:</strong> Power comes from the hips, not the arms
                            or legs alone. Drive every technique with your core.
                        </li>
                        <li>
                            <strong>Hikite (Pulling Hand):</strong> Always pull the opposite hand
                            back sharply — it generates equal and opposite force.
                        </li>
                        <li>
                            <strong>Breathing:</strong> Exhale sharply (kiai) on the moment of
                            impact. Never hold your breath.
                        </li>
                        <li>
                            <strong>Repetition:</strong> Perform each technique hundreds of times to
                            develop muscle memory and speed.
                        </li>
                        <li>
                            <strong>Form First:</strong> Always prioritize correct form over speed
                            or power. Speed and power come naturally with good technique.
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}