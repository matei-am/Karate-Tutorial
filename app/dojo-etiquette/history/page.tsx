'use client';

import { useState } from 'react';
import Header from "../../components/header";
import Image from "next/image";

export default function History() {
    const [activeEra, setActiveEra] = useState(0);
    const [showGallery, setShowGallery] = useState(false);

    const eras = [
        {
            title: "Origins in Okinawa",
            period: "Pre-1868",
            description: "Shotokan Karate has its roots in Okinawa, where it developed from indigenous martial arts influences and Chinese fighting techniques. The name 'Shotokan' comes from the pen name of its founder, Gichin Funakoshi, who wrote under the pseudonym 'Shoto,' meaning 'pine waves.'",
            image: <Image src="/Historical-okinawa-photo.jpg" alt="Okinawa Map" width={800} height={1200} />,
            keyPoints: ["Indigenous martial arts", "Chinese influences", "Cultural fusion"]
        },
        {
            title: "Gichin Funakoshi: Father of Modern Karate",
            period: "1868-1922",
            description: "Born in 1868 in Okinawa, Gichin Funakoshi is known as the 'father of modern karate.' He spent decades studying traditional Okinawan martial arts before introducing karate to mainland Japan in 1922 through a demonstration at the First National Athletic Exhibition in Tokyo.",
            image: <Image src="/gichin-funakoshi.jpg" alt="Gichin Funakoshi Portrait" width={800} height={600} />,
            keyPoints: ["Born 1868", "1922 Tokyo demonstration", "Systematized training"]
        },
        {
            title: "Establishment and Growth in Japan",
            period: "1920s-1930s",
            description: "Funakoshi established the first official Shotokan dojo and worked to systematize karate training, emphasizing both physical technique and mental discipline. By the 1930s, Shotokan had gained significant popularity in Japanese universities and military institutions.",
            image: <Image src="/first-shotokan-dojo.jpg" alt="First Shotokan Dojo" width={800} height={600} />,
            keyPoints: ["First dojo established", "University adoption", "Military training"]
        },
        {
            title: "Philosophy and Technique",
            period: "1922-Present",
            description: "Shotokan is distinguished by its deep, stable stances, powerful linear movements, and extensive kata (choreographed forms) practice. The style emphasizes strong fundamentals, respect for tradition, and the pursuit of self-improvement through rigorous training.",
            image: <Image src="/kata-demonstration.jpg" alt="Kata Demonstration" width={800} height={600} />,
            keyPoints: ["Deep stances", "Linear power", "Kata mastery"]
        },
        {
            title: "International Expansion",
            period: "Post-1945",
            description: "Following World War II, Shotokan Karate rapidly spread beyond Japan to Europe, North America, and other continents. American servicemen stationed in Japan brought the martial art back home. The Japan Karate Association (JKA), formed in 1949, played a crucial role in standardizing and promoting Shotokan globally.",
            image: <Image src="/international-training.jpg" alt="International Training" width={800} height={600} />,
            keyPoints: ["JKA founded 1949", "Global spread", "Standardization"]
        },
        {
            title: "Olympic Recognition",
            period: "2020",
            description: "Shotokan Karate achieved international recognition when karate was included as an Olympic sport in 2020. This milestone demonstrated the style's prominence and legitimacy on the world stage, further cementing its place as one of the most practiced martial arts globally.",
            image: <Image src="/olympic-karate.jpg" alt="Olympic Karate 2020" width={800} height={600} />,
            keyPoints: ["Olympic debut", "Global recognition", "Mainstream legitimacy"]
        },
        {
            title: "Legacy Today",
            period: "Present Day",
            description: "Today, Shotokan Karate continues to be practiced by millions of people worldwide. Gichin Funakoshi's legacy lives on through the countless dojos dedicated to his teachings, emphasizing the values of discipline, respect, perseverance, and the pursuit of excellence.",
            image: <Image src="/modern-dojo.jpg" alt="Modern Dojo" width={800} height={1200} />,
            keyPoints: ["Millions of practitioners", "Global dojos", "Living tradition"]
        }
    ];

    return (
        <main className="history-page">
            <Header />
            
            <div className="title-card">
                <h1>History of Shotokan Karate</h1>
                <p>
                    Explore the rich journey of Shotokan Karate from ancient Okinawa to the modern Olympic stage.
                    Click through the timeline to discover each pivotal era.
                </p>
            </div>

            {/* Timeline Navigation */}
            <div className="timeline-nav">
                {eras.map((era, index) => (
                    <button
                        key={index}
                        className={`timeline-button ${activeEra === index ? 'active' : ''}`}
                        onClick={() => setActiveEra(index)}
                    >
                        <div className="timeline-dot"></div>
                        <span className="timeline-label">{era.period}</span>
                    </button>
                ))}
            </div>

            {/* Active Era Display */}
            <div className="era-display">
                <div className="era-content">
                    <div className="era-header">
                        <h2>{eras[activeEra].title}</h2>
                        <span className="era-period">{eras[activeEra].period}</span>
                    </div>

                    <div className="era-body">
                        {/* Photo Container */}
                        <div className="photo-container">
                            <div className="photo-wrapper">
                                {eras[activeEra].image}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="era-description">
                            <p>{eras[activeEra].description}</p>
                            
                            {/* Key Points */}
                            <div className="key-points">
                                <h3>Key Highlights</h3>
                                <ul>
                                    {eras[activeEra].keyPoints.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <button 
                            className="btn btn-primary"
                            onClick={() => setActiveEra((prev) => (prev > 0 ? prev - 1 : eras.length - 1))}
                        >
                            ← Previous Era
                        </button>
                        
                        <button 
                            className="btn btn-primary"
                            onClick={() => setActiveEra((prev) => (prev < eras.length - 1 ? prev + 1 : 0))}
                        >
                            Next Era →
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
