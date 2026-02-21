'use client';

import { useState } from 'react';
import Header from "../../components/header";
import Image from "next/image";

export default function Rules() {
    const [expandedRule, setExpandedRule] = useState<number | null>(null);

    const rules = [
        {
            title: "Bowing - Rei (礼)",
            category: "Essential",
            description: "Bowing is the fundamental gesture of respect in Shotokan Karate. It represents humility, gratitude, and acknowledgment of your training partners and instructors.",
            image: "/etiquette/karate-bow-rei.jpg",
            imageAlt: "Karate Bow Rei Demonstration",
            details: [
                "Bow when entering and leaving the dojo",
                "Bow to the shomen (front of the dojo) and sensei before and after class",
                "Bow to your training partner before and after practicing together",
                "Keep your eyes forward and back straight during the bow",
                "Place hands flat on thighs and bow from the waist approximately 30 degrees"
            ]
        },
        {
            title: "Dojo Entry and Exit",
            category: "Essential",
            description: "The dojo is considered a sacred training space. Proper entry and exit demonstrate respect for the training environment and those within it.",
            image: "/etiquette/dojo-entrance.jpg",
            imageAlt: "Dojo Entrance",
            details: [
                "Remove shoes before entering the training area",
                "Bow when crossing the threshold into the dojo",
                "Never run in the dojo unless instructed during training",
                "Arrive early to prepare mentally and physically",
                "If arriving late, wait at the edge of the mat until acknowledged by the instructor"
            ]
        },
        {
            title: "Uniform and Appearance",
            category: "Essential",
            description: "Your gi (uniform) represents your commitment to training. Maintaining a clean and proper uniform shows respect for the art and your fellow students.",
            image: "/etiquette/karate-gi-uniform.jpg",
            imageAlt: "Karate Gi Uniform",
            details: [
                "Wear a clean, white gi at all times",
                "Ensure your belt is tied properly",
                "Keep fingernails and toenails trimmed short",
                "Remove all jewelry before training",
                "Long hair must be tied back securely",
                "The gi jacket should be closed and presentable"
            ]
        },
        {
            title: "Addressing Instructors",
            category: "Essential",
            description: "Proper address of instructors reflects the hierarchical structure of traditional martial arts and shows appropriate respect.",
            image: "/etiquette/sensei-instruction.jpg",
            imageAlt: "Sensei Giving Instruction",
            details: [
                "Address instructors as 'Sensei' (先生)",
                "Stand at attention (musubi dachi) when being addressed",
                "Respond with 'Osu!' or 'Hai!' when acknowledged",
                "Never interrupt or speak over the instructor",
                "If you must ask a question, raise your hand and wait to be acknowledged",
                "Show the same respect to senior students (sempai)"
            ]
        },
        {
            title: "Training Conduct",
            category: "Important",
            description: "Proper behavior during training ensures safety, maximizes learning, and maintains the dojo's atmosphere of discipline and focus.",
            image: "/etiquette/karate-training-conduct.jpg",
            imageAlt: "Karate Training Session",
            details: [
                "Train with full effort and serious intent",
                "Control your techniques to avoid injuring partners",
                "Do not leave the mat during class without permission",
                "Sit in seiza (formal kneeling position) when resting",
                "Pay attention at all times, even when not actively practicing",
                "Help junior students when appropriate",
                "Never show off or use excessive force"
            ]
        },
        {
            title: "Seiza Position (正座)",
            category: "Important",
            description: "Seiza is the formal kneeling position used for meditation, listening to instruction, and showing respect. It demonstrates patience and discipline.",
            image: "/etiquette/seiza-position.jpg",
            imageAlt: "Seiza Kneeling Position",
            details: [
                "Kneel with both knees together",
                "Sit back on your heels with toes pointed",
                "Keep your back straight and hands resting on thighs",
                "Maintain this position attentively during instruction",
                "Use seiza when waiting for your turn or during ceremonies",
                "Rise from seiza slowly and respectfully"
            ]
        },
        {
            title: "Dojo Kun (道場訓) - Training Hall Oath",
            category: "Philosophy",
            description: "The Dojo Kun represents the guiding principles of Shotokan Karate. These five precepts are recited at the end of each training session.",
            image: "/etiquette/dojo-kun-principles.jpg",
            imageAlt: "Dojo Kun Principles",
            details: [
                "一、人格完成に努むること (Seek perfection of character)",
                "一、誠の道を守ること (Be faithful and sincere)",
                "一、努力の精神を養うこと (Foster the spirit of effort)",
                "一、礼儀を重んずること (Respect others)",
                "一、血気の勇を戒むること (Refrain from violent behavior)"
            ]
        },
        {
            title: "Oss! (押忍)",
            category: "Important",
            description: "Oss is a versatile expression in karate culture, conveying respect, acknowledgment, understanding, and fighting spirit all in one word.",
            image: "/etiquette/oss-expression.jpg",
            imageAlt: "Oss Expression",
            details: [
                "Use 'Oss!' to acknowledge instruction or commands",
                "Say 'Oss!' when greeting senior students and instructors",
                "Express fighting spirit and determination with 'Oss!'",
                "Respond 'Oss!' to show understanding",
                "Say it with strong voice and proper spirit (kiai)",
                "Overuse should be avoided in formal situations"
            ]
        }
    ];

    const toggleRule = (index: number) => {
        setExpandedRule(expandedRule === index ? null : index);
    };

    return (
        <main className="rules-page">
            <Header initialUser={null} />
            
            <div className="title-card">
                <h1>Dojo Etiquette - The Rules of Respect</h1>
                <p>
                    Dojo etiquette (Reigi) is fundamental to Shotokan Karate training. These customs and rules 
                    create a respectful, focused environment where students can learn effectively and safely.
                </p>
            </div>

            <div className="rules-container">
                {rules.map((rule, index) => (
                    <div 
                        key={index} 
                        className={`rule-card ${expandedRule === index ? 'expanded' : ''}`}
                        onClick={() => toggleRule(index)}
                    >
                        <div className="rule-header">
                            <div className="rule-title-section">
                                <span className={`rule-category category-${rule.category.toLowerCase()}`}>
                                    {rule.category}
                                </span>
                                <h2>{rule.title}</h2>
                            </div>
                            <span className={`expand-icon ${expandedRule === index ? 'expanded' : ''}`}>
                                ▼
                            </span>
                        </div>

                        <p className="rule-description">{rule.description}</p>

                        {expandedRule === index && (
                            <div className="rule-details">
                                <div className="rule-photo">
                                    <img 
                                        src={rule.image} 
                                        alt={rule.imageAlt} 
                                        className="w-full h-auto mx-auto"
                                    />
                                </div>
                                <div className="rule-list">
                                    <h3>Key Points:</h3>
                                    <ul>
                                        {rule.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="etiquette-reminder">
                <h2>Remember</h2>
                <p>
                    Following these rules is not about restriction—it's about creating an environment where everyone 
                    can train safely, learn effectively, and grow both as martial artists and as individuals. 
                    Respect, discipline, and humility are the foundations of Shotokan Karate.
                </p>
            </div>
        </main>
    );
}