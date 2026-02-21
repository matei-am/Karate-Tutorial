"use client";

import { useState } from "react";
import Header from "../../components/header";

const basics = [
    {
        id: "dojo-kun",
        japanese: "道場訓",
        name: "Dojo Kun (Training Hall Rules)",
        color: "blue",
        img1: "/kihon/basics/dojo-kun-1.jpg",
        img2: "/kihon/basics/dojo-kun-2.jpg",
        description:
            "The Dojo Kun is a set of guiding principles recited at the end of every training session. They shape the character and mindset of every karateka beyond the physical techniques.",
        points: [
            "Seek perfection of character (人格完成に努むること)",
            "Be faithful and sincere (誠の道を守ること)",
            "Endeavor to excel (努力の精神を養うこと)",
            "Respect others (礼儀を重んずること)",
            "Refrain from violent behaviour (血気の勇を戒むること)",
        ],
        takeaway:
            "Karate begins and ends with respect. The Dojo Kun reminds us that true martial arts mastery is as much about character as it is about combat.",
    },
    {
        id: "obi",
        japanese: "帯",
        name: "Obi (Belt System & Ranking)",
        color: "amber",
        img1: "/kihon/basics/obi-system-1.jpg",
        img2: "/kihon/basics/obi-system-2.jpg",
        description:
            "The coloured belt (obi) system represents a karateka's progression. Beginners start at white belt and advance through coloured belts (kyu ranks) toward the coveted black belt (dan ranks).",
        points: [
            "White belt (10th–9th kyu) — beginner, purity, a blank page",
            "Yellow / Orange belt (8th–7th kyu) — first rays of understanding",
            "Green belt (6th–5th kyu) — growth and development of skills",
            "Blue / Purple belt (4th–3rd kyu) — deepening knowledge",
            "Brown belt (2nd–1st kyu) — maturity and readiness",
            "Black belt (1st dan and above) — mastery of fundamentals, beginning of true study",
        ],
        takeaway:
            "A black belt is not the end — it signifies that the student has mastered the basics and is now ready to truly learn.",
    },
    {
        id: "rei",
        japanese: "礼",
        name: "Rei (Etiquette & Bowing)",
        color: "green",
        img1: "/kihon/basics/rei-1.jpg",
        img2: "/kihon/basics/rei-2.jpg",
        description:
            "Rei (bowing) is the physical expression of respect in karate. It is performed at the start and end of every class, kata, and sparring match, and when entering or leaving the dojo.",
        points: [
            "Ritsurei — standing bow, a 30-degree forward inclination",
            "Zarei — kneeling bow (seiza position), forehead touches hands on floor",
            "Bow when entering and leaving the dojo",
            "Bow to your partner before and after kumite",
            "Bow to the instructor (sensei ni rei) and to the front of the dojo (shomen ni rei)",
        ],
        takeaway:
            "Bowing is never a sign of submission. It is a mutual sign of respect, gratitude, and humility that connects every practitioner to karate's traditions.",
    },
    {
        id: "karate-no-michi",
        japanese: "空手の道",
        name: "Karate-Do (The Way of the Empty Hand)",
        color: "red",
        img1: "/kihon/basics/karate-do-1.jpg",
        img2: "/kihon/basics/karate-do-2.jpg",
        description:
            "The word 'karate' (空手) literally means 'empty hand.' The suffix '-do' (道) means 'way' or 'path.' Together, Karate-Do is not merely a fighting system but a lifelong journey of self-improvement.",
        points: [
            "'Kara' (空) = empty — fighting without weapons, and emptying the mind of ego",
            "'Te' (手) = hand — the body itself is the weapon",
            "'Do' (道) = the way — a path of continuous personal growth",
            "Originated in Okinawa, blending native te with Chinese martial arts",
            "Popularized in mainland Japan by Gichin Funakoshi in the 1920s",
            "Today practiced by over 100 million people worldwide",
        ],
        takeaway:
            "Karate is not about defeating others — as Funakoshi said: 'The ultimate aim of karate lies not in victory or defeat, but in the perfection of the character of its participants.'",
    },
    {
        id: "kihon-kata-kumite",
        japanese: "基本・型・組手",
        name: "The Three Pillars: Kihon, Kata & Kumite",
        color: "purple",
        img1: "/kihon/basics/three-pillars-1.jpg",
        img2: "/kihon/basics/three-pillars-2.jpg",
        description:
            "All karate training revolves around three interconnected pillars. Together they form a complete system for developing the mind, body, and spirit of the martial artist.",
        points: [
            "Kihon (基本) — Basics: repetitive drilling of individual techniques",
            "Kata (型) — Forms: choreographed sequences of techniques against imaginary opponents",
            "Kumite (組手) — Sparring: applying techniques against a real partner",
            "Kihon builds precision; Kata builds flow and strategy; Kumite builds adaptability",
            "All three must be practiced together for balanced development",
            "Neglecting any one pillar weakens the other two",
        ],
        takeaway:
            "Think of kihon as learning letters, kata as writing sentences, and kumite as engaging in conversation. All three are essential to fluency in karate.",
    },
    {
        id: "breathing",
        japanese: "呼吸",
        name: "Kokyu (Breathing & Energy)",
        color: "teal",
        img1: "/kihon/basics/kokyu-1.jpg",
        img2: "/kihon/basics/kokyu-2.jpg",
        description:
            "Proper breathing (kokyu) is the invisible engine of every karate technique. It oxygenates muscles, sharpens focus, and connects physical movement to mental intent.",
        points: [
            "Breathe in through the nose during preparation and chambering",
            "Exhale sharply through the mouth on the moment of impact (kiai)",
            "Never hold your breath during combinations — it causes tension",
            "Abdominal (diaphragmatic) breathing develops power from the hara (lower abdomen)",
            "Controlled breathing calms the mind during high-pressure sparring",
            "Kiai (気合) — the spirited shout — focuses energy and startles opponents",
        ],
        takeaway:
            "A karateka who masters breathing can fight longer, hit harder, and stay calmer than one who relies on muscle alone.",
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

export default function KihonBasics() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => setOpenId(openId === id ? null : id);

    return (
        <main>
            <Header initialUser={null} />
            <div className="w-full px-4 py-8 flex flex-col items-center">
                {/* Title */}
                <div className="title-card text-4xl font-bold mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        基本 Kihon: Basic Notions of Karate
                    </h1>
                    <p>
                        Before learning any punch or kick, every karateka must understand the
                        philosophical foundations and core concepts that define the art. These basic
                        notions are the bedrock upon which all technique is built. Select a topic to
                        learn more.
                    </p>
                </div>

                {/* Topic Selector Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {basics.map((b) => {
                        const active = openId === b.id;
                        return (
                            <button
                                key={b.id}
                                onClick={() => toggle(b.id)}
                                className={`px-5 py-3 rounded-lg font-semibold transition-all duration-200 border-2 cursor-pointer ${
                                    active
                                        ? `${colorMap[b.color].bg} ${colorMap[b.color].border} ${colorMap[b.color].heading}`
                                        : "bg-white border-gray-300 text-gray-700 hover:border-gray-500"
                                }`}
                            >
                                {b.japanese} {b.name.split("(")[0].trim()}
                            </button>
                        );
                    })}
                </div>

                {/* Expanded Topic Detail */}
                {basics.map((b) => {
                    if (openId !== b.id) return null;
                    const c = colorMap[b.color];
                    return (
                        <section
                            key={b.id}
                            className={`w-full mb-12 border-l-4 ${c.border} pl-6 animate-[fadeIn_0.3s_ease]`}
                        >
                            <h2 className={`text-3xl font-bold mb-4 ${c.heading} text-center`}>
                                {b.japanese} {b.name}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start w-full">
                                {/* Left image */}
                                <div className="w-full flex justify-center">
                                    <img
                                        src={b.img1}
                                        alt={`${b.name} illustration 1`}
                                        className="w-[32em] h-auto mx-auto rounded-lg shadow-md bg-gray-200"
                                    />
                                </div>

                                {/* Content */}
                                <div className={`${c.bg} p-6 rounded-lg w-full text-center`}>
                                    <p className="text-lg mb-4">{b.description}</p>
                                    <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
                                    <ul className="space-y-2 ml-4 list-disc text-center">
                                        {b.points.map((p, i) => (
                                            <li key={i}>{p}</li>
                                        ))}
                                    </ul>
                                    <h3 className="text-xl font-semibold mt-4 mb-3">Takeaway:</h3>
                                    <p className="italic text-gray-700">{b.takeaway}</p>
                                </div>

                                {/* Right image */}
                                <div className="w-full flex justify-center">
                                    <img
                                        src={b.img2}
                                        alt={`${b.name} illustration 2`}
                                        className="w-[32em] h-auto mx-auto rounded-lg shadow-md bg-gray-200"
                                    />
                                </div>
                            </div>
                        </section>
                    );
                })}

                {/* General Principles */}
                <section className="bg-gray-100 p-8 rounded-lg text-center w-full max-w-4xl">
                    <h2 className="text-2xl font-bold mb-4 text-center">
                        Guiding Principles to Remember
                    </h2>
                    <ul className="space-y-3 list-disc ml-4">
                        <li>
                            <strong>Karate ni sente nashi:</strong> There is no first attack in
                            karate — karate is a defensive art.
                        </li>
                        <li>
                            <strong>Respect:</strong> Always show respect to your dojo, your
                            training partners, and yourself.
                        </li>
                        <li>
                            <strong>Patience:</strong> Mastery takes years of dedicated, consistent
                            practice. There are no shortcuts.
                        </li>
                        <li>
                            <strong>Mind-Body Unity:</strong> Technical skill without mental
                            discipline is incomplete, and vice versa.
                        </li>
                        <li>
                            <strong>Oss! (押忍):</strong> This expression embodies perseverance,
                            respect, and determination — the spirit of karate in a single word.
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}