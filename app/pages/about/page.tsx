import Header from "../../components/header";

const timelineEvents = [
    {
        id: "early-years",
        year: "2007 – 2010",
        title: "Early Years",
        image: "",
        description:
            "Born in Brasov, Romania, I was raised with a curiosity for both learning and sports. For as long as I can remember, I have always wanted to become the best at everything I do, always looking for new challenges to take on.",
    },
    {
        id: "discovering-karate",
        year: "2011",
        title: "Discovering Karate",
        image: "",
        description:
            "Following in the footsteps of my older brother and my father, I started practicing karate at a young age. What attracted me to the art was the combination of respect, discipline, and physicality. I was eager to learn and quickly developed a passion for the dojo.",
    },
    {
        id: "first-steps",
        year: "2012 – 2014",
        title: "First Steps",
        image: "",
        description:
            "From a young age, I was drawn to computers and technology, fascinated by the endless possibilities they offered. My passion started with video games, which sparked my interest in programming. I have also developed an interest in mathematics, staying up late with my father as he taught me new concepts and problem-solving techniques. These early experiences laid the foundation for my future pursuits in both academics and martial arts.",
    },
    {
        id: "first-competitions",
        year: "2014 – 2016",
        title: "First Competitions",
        image: "",
        description:
            "As I started to have notable performances, at just 7 years old, I began competing in various competitions and tournaments. These experiences were invaluable for my growth not only as a martial artist but also as a person. As I previously mentioned, I have always wanted to be the best at everything I do, and this drive pushed me to seek out competitive opportunities where I could test and refine my skills. Competing taught me how to handle pressure, adapt to different opponents, and learn from both victories and defeats.",
    },
    {
        id: "building-foundations",
        year: "2016 – 2019",
        title: "Building Foundations",
        image: "",
        description:
            "Through countless hours of kihon, kata, and kumite practice, I built a solid technical foundation. In spite of several setbacks, I kept pushing forward with the support of my family, training partners and sensei. These years taught me the value of perseverance and the importance of a strong work ethic.",
    },
    {
        id: "academic-growth",
        year: "2019",
        title: "Academic Growth",
        image: "",
        description:
            "In 2019, in fifth grade, I applied to take a highly competitive exam for admission in the lower secondary program of one of the best high schools in the country, \"Andrei Șaguna\" National College, and I was accepted. This was a significant milestone for me, at the time, as it marked the beginning of a new chapter in my academic journey. I strongly feel that this opportunity provided me with an invaluable perspective and education that has shaped the course of my life",
    },
    {
        id: "overcoming-challenges",
        year: "2020 – 2021",
        title: "Overcoming Challenges",
        image: "",
        description:
            "Despite the disruptions caused by the pandemic, I remained committed to my training and routine. Even though the world was changing around me, I feel it was hard for me not to stay optimistic, with new opportunities such as online learning and virtual training sessions. I think this period was also one that helped me spend more time with my friends, forming unforgettable memories and unbreakable bonds. Looking back, I think it was one of the best times of my life. ",
    },
    {
        id: "competitive-career",
        year: "2021 – 2022",
        title: "Competitive Career",
        image: "",
        description:
            "Years of dedication paid off as I reached new heights in competition. In 2021, I became a World Champion in the cadet category at the 2021 World Karate Championships in Cluj-Napoca, Romania. I am convinced that the opportunity of such a prestigious competition hosted right in my country provided me with a once-in-a-lifetime opportunity to express myself and shape me in the person I am today. The following year, I continued to compete at a high level, winning the gold medal in the 2022 European Champions Cup, hosted once again in Cluj-Napoca, and a silver medal at the 2022 European Karate Championships in Florence, Italy. This period has also allowed me to form an unshakeable bond with my brother, Mihai, who has been there for me every step of the way, showing unwavering support and coaching me throughout these performances."

    },
    {
        id: "academic-pursuits",
        year: "2022 – 2023",
        title: "Academic Pursuits",
        image: "",
        description:
            "While I was performing in sports, I also gave my all to my academic pursuits. After being accepted again into the \"Andrei Șaguna\" National College, this time for the high school program, I was selected for a unique opportunity to attend an Erasmus+ program in Paris, France. This experience further reinforced my love for learning , allowing me to have the privilege of participating in such a programme at such a young age. This again, was another one of the turning points in my life, boosting my self confidence",
    },
    {
        id: "academic-competitions",
        year: "2022 – 2023",
        title: "Academic Competitions",
        image: "",
        description:
            "During this period, I have also had the privilege of being selected to represent my country and school in a Natural Sciences Competition at the IYNT (International Young Naturalists Tournament) in 2022, held in Almaty, Kazakhstan where I would go on and help my team win a bronze medal. This once again offered me invaluable insights into the world of science and research, allowing me to learn how to conduct and interpret proper scientific research, as well as teaching me teamwork and communication skills, which I haven't had a chance to refine in my competitive sports career.",
    },
    {
        id: "notable-performances",
        year: "2024 – 2025",
        title: "Notable Performances",
        image: "",
        description:
            "Continuing my sports career, in 2024, I competed in the 2024 European Karate Championships in Warsaw, Poland alongside my brother, Mihai, where I would go on to win two gold medals, while he would win a bronze one. After that performance, he would accompany me as my coach to the 2024 ISF Gymnasiade in Bahrain, undoubtedly the toughest competition of my career, where I would distinguish myself winning a bronze medal.",
    },
    {
        id: "giving-back",
        year: "2022 – 2025",
        title: "Giving Back & Teaching",
        image: "",
        description:
            "After years of training and competing, I felt a strong desire to give back to the community that has supported me throughout my journey. I started teaching karate to younger students at my dojo, sharing the knowledge and values I've gained over the years. Teaching has been an incredibly rewarding experience, allowing me to inspire the next generation of martial artists and instill in them the same passion and discipline that has driven me.",
    },
    {
        id: "distinctions",
        year: "2024",
        title: "Distinctions & Awards",
        image: "",
        description:
            "Throughout my journey, I have been honored with various distinctions and awards that recognize my dedication and achievements in both sports and academics. Undoubtedly, the most important one is the \"Master of the Sport\" title, awarded by Romania's national sports federation. These accolades serve as a testament to the hard work, perseverance, and passion that I have consistently demonstrated.",
    },
    {
        id: "accolades",
        year: "2015 – 2025",
        title: "Accolades & Recognition",
        image: "",
        description:
            "My collection of medals and trophies from various competitions is a source of pride and motivation. Each accolade represents a milestone in my journey, reflecting the countless hours of training, dedication, and sacrifice that I have invested. These awards not only celebrate my achievements but also inspire me to continue striving for excellence in all my future endeavors. Although cliché, I take pride in all of my achievements, but I am most proud of my personal growth and the lessons I have learned along the way. Today, I wouldn't be the same person without support from my family, my brother, my training partners and my sensei and to them, i express my sincerest gratitude.",
    },
    {
        id: "present-day",
        year: "2026 – Present",
        title: "Looking Ahead",
        image: "",
        description:
            "Today, I continue to train, study, and grow. Whether it's pursuing higher education, refining my karate, or building projects like this website, I approach everything with the same spirit: discipline, effort, and respect. I hope to come to Denmark to further my education and continue my karate journey, hopefully one day having the honor of being part of the Danish national team and representing the country in international competitions. I am excited for what the future holds and am committed to making the most of every opportunity that comes my way.",
    },
];

export default function About() {
    return (
        <main>
            <Header initialUser={null} />
            <div className="about-page">
                {/* Title Card */}
                <div className="title-card text-4xl font-bold mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        About Me
                    </h1>
                    <p>
                        A journey through the milestones that shaped who I am — from my earliest
                        memories to the present day. Sports, academics, and karate have all played
                        a role in building my character.
                    </p>
                </div>

                {/* Timeline Cards */}
                <div className="about-timeline">
                    {timelineEvents.map((event, index) => (
                        <div
                            key={event.id}
                            className={`about-card ${index % 2 === 0 ? "about-card-left" : "about-card-right"}`}
                        >
                            <div className={`about-card-inner ${index % 2 === 0 ? "about-card-inner-left" : "about-card-inner-right"}`}>
                                {/* Text side */}
                                <div className="about-card-text">
                                    <span className="about-year-badge">{event.year}</span>
                                    <h2 className="about-card-title">{event.title}</h2>
                                    <p className="about-card-description">{event.description}</p>
                                </div>

                                {/* Photo */}
                                <div className="about-card-photo">
                                    <img src={event.image} alt={event.title} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Banner */}
                <div className="about-banner">
                    <h2>My Philosophy</h2>
                    <p>
                        Karate has taught me that growth is never finished. Every training session,
                        every exam, every challenge is an opportunity to become better — not just as
                        a martial artist, but as a person. I carry the values of the dojo into
                        everything I do: discipline, respect, perseverance, and humility.
                    </p>
                </div>
            </div>
        </main>
    );
}