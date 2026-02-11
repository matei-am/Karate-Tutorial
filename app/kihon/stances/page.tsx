import Header from "../../components/header";

export default function KihonStances() {
    return (
        <main>
            <Header initialUser={null} />
            <div className="w-full px-4 py-8 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-8 text-center">基本 Kihon: Basic Karate Stances</h1>
                <p className="text-lg mb-8 text-gray-700 text-center">
                    Strong, stable stances are the foundation of karate. They provide balance, power,
                    and the ability to deliver effective techniques. Master these four fundamental stances.
                </p>

                {/* Zenkutsu Dachi */}
                <section className="w-full h-auto mb-12 border-l-4 border-blue-500 pl-6">
                    <h2 className="text-3xl font-bold mb-4 text-blue-600 text-center">
                        前屈立ち Zenkutsu Dachi (Front Stance)
                    </h2>

                    <div className="grid grid-cols-3 gap-6 items-stretch w-full">
                        
                        <div className="w-full h-full">
                            <img
                                src="/zenkutsu-dachi-1.jpg"
                                alt="Zenkutsu Dachi stance demonstration"
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg w-full h-full text-center">
                            <p className="text-lg mb-4 text-center">
                            The most commonly used stance in karate. It provides excellent stability and power
                            for forward techniques and is ideal for offensive movements.
                        </p>
                        <h3 className="text-xl font-semibold mb-3">How to Execute:</h3>
                        <ul className="space-y-2 ml-4 list-disc text-center">
                            <li>Stand with feet shoulder-width apart</li>
                            <li>Step forward with one leg, approximately a shoulder-width's distance forward and slightly wider to the side</li>
                            <li>Front knee should bend deeply (about 90 degrees), directly above the ankle</li>
                            <li>Back leg should be straight with the heel planted firmly</li>
                            <li>Weight distribution: approximately 60% front, 40% back</li>
                            <li>Keep hips level and facing forward</li>
                            <li>Torso remains upright and relaxed</li>
                        </ul>
                        <h3 className="text-xl font-semibold mt-4 mb-3">Key Benefits:</h3>
                        <ul className="space-y-2 ml-4 list-disc">
                            <li>Powerful for delivering punches and kicks</li>
                            <li>Good forward mobility and aggression</li>
                            <li>Strong base for body rotation</li>
                            <li>Ideal for linear attacks</li>
                        </ul>
                        </div>

                       
                        <div className="w-full h-full">
                            <img
                                src="/zenkutsu-dachi-2.jpg"
                                alt="Zenkutsu Dachi stance demonstration"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </section>
                {/* Kokutsu Dachi */}
                <section className="mb-12 border-l-4 border-green-500 pl-6 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-green-600 text-center">後屈立ち Kokutsu Dachi (Back Stance)</h2>
                    <div className="flex gap-4 mb-6 items-stretch">
                        <div className="Kihon-Stance-Photo-Container-1">
                            <img
                                src="/kokutsu-dachi-1.jpg"
                                alt="Kokutsu Dachi stance demonstration"
                                className="Kihon-Stance-Photo-1"
                            />
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg w-1/3 text-center">
                            <p className="text-lg mb-4">
                                A defensive stance that places weight toward the rear leg, making it excellent for
                                blocking, evading, and preparing counterattacks.
                            </p>
                            <h3 className="text-xl font-semibold mb-3">How to Execute:</h3>
                            <ul className="space-y-2 ml-4 list-disc">
                                <li>Position feet perpendicular to each other, approximately one shoulder-width apart</li>
                                <li>Back foot points backward at approximately 90 degrees</li>
                                <li>Front foot points forward</li>
                                <li>Weight distribution: approximately 70% back, 30% front</li>
                                <li>Back knee bends while front leg remains mostly straight</li>
                                <li>Front foot stays light, ready to move quickly</li>
                                <li>Hips face partially sideways (about 45 degrees)</li>
                                <li>Upper body remains calm and centered</li>
                            </ul>
                            <h3 className="text-xl font-semibold mt-4 mb-3">Key Benefits:</h3>
                            <ul className="space-y-2 ml-4 list-disc">
                                <li>Excellent for defensive blocks and evasion</li>
                                <li>Provides mobility for quick withdrawals</li>
                                <li>Strong position for side kicks</li>
                                <li>Effective for counterattacking techniques</li>
                            </ul>
                        </div>
                        <div className="Kihon-Stance-Photo-Container-2">
                            <img
                                src="/kokutsu-dachi-2.jpg"
                                alt="Kokutsu Dachi stance demonstration"
                                className="Kihon-Stance-Photo-2"
                            />
                        </div>
                    </div>
                </section>

                {/* Kiba Dachi */}
                <section className="mb-12 border-l-4 border-red-500 pl-6 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-red-600 text-center">騎馬立ち Kiba Dachi (Horse Stance)</h2>
                    <div className="flex gap-4 mb-6 items-stretch">
                        <div className="Kihon-Stance-Photo-Container-1">
                            <img
                                src="/kiba-dachi-1.jpg"
                                alt="Kiba Dachi stance demonstration"
                                className="Kihon-Stance-Photo-1"
                            />
                        </div>
                        <div className="bg-red-50 p-6 rounded-lg w-1/3 text-center">
                            <p className="text-lg mb-4">
                                Also called the "straddle stance," this wide stance is used for side techniques and
                                builds strong legs and balance through low body positioning.
                            </p>
                            <h3 className="text-xl font-semibold mb-3">How to Execute:</h3>
                            <ul className="space-y-2 ml-4 list-disc">
                                <li>Stand with feet two shoulder-widths or more apart</li>
                                <li>Both feet point forward, parallel to each other</li>
                                <li>Bend both knees deeply, lowering your center of gravity</li>
                                <li>Knees should align directly over ankles, never extending past toes</li>
                                <li>Thighs should be approximately parallel to the ground</li>
                                <li>Weight distributed evenly on both legs (50-50)</li>
                                <li>Torso remains upright and centered</li>
                                <li>Hips face forward squarely</li>
                            </ul>
                            <h3 className="text-xl font-semibold mt-4 mb-3">Key Benefits:</h3>
                            <ul className="space-y-2 ml-4 list-disc">
                                <li>Powerful for side-directed strikes and blocks</li>
                                <li>Builds exceptional leg strength and endurance</li>
                                <li>Excellent balance and stability in all directions</li>
                                <li>Develops core strength and body control</li>
                            </ul>
                        </div>
                        <div className="Kihon-Stance-Photo-Container-2">
                            <img
                                src="/kiba-dachi-2.jpg"
                                alt="Kiba Dachi stance demonstration"
                                className="Kihon-Stance-Photo-2"
                            />
                        </div>
                    </div>
                </section>

                {/* Kamae */}
                <section className="mb-12 border-l-4 border-purple-500 pl-6 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-purple-600 text-center">構え Kamae (Guard Position)</h2>
                    <div className="flex gap-4 mb-6 items-stretch">
                        <div className="Kihon-Stance-Photo-Container-1">
                            <img
                                src="/kamae-1.jpg"
                                alt="Kamae guard position demonstration"
                                className="Kihon-Stance-Photo-1"
                            />
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg w-1/3 text-center">
                            <p className="text-lg mb-4">
                                More of a ready position than a formal stance, kamae is the alert, balanced posture
                                from which a karateka begins techniques and movements.
                            </p>
                            <h3 className="text-xl font-semibold mb-3">How to Execute:</h3>
                            <ul className="space-y-2 ml-4 list-disc">
                                <li>Stand naturally with feet about shoulder-width apart</li>
                                <li>One foot positioned slightly forward of the other</li>
                                <li>Knees slightly bent for quick movement</li>
                                <li>Weight balanced and light, ready to shift direction</li>
                                <li>Arms raised defensively in front of the body</li>
                                <li>Guard hands positioned to protect face and torso</li>
                                <li>Chin tucked slightly, eyes focused on opponent</li>
                                <li>Shoulders relaxed but alert</li>
                            </ul>
                            <h3 className="text-xl font-semibold mt-4 mb-3">Key Benefits:</h3>
                            <ul className="space-y-2 ml-4 list-disc">
                                <li>Natural, mobile position for general sparring</li>
                                <li>Maintains protection while allowing movement</li>
                                <li>Quick to transition to formal stances</li>
                                <li>Promotes awareness and reaction time</li>
                            </ul>
                        </div>
                        <div className="Kihon-Stance-Photo-Container-2">
                            <img
                                src="/kamae-2.jpg"
                                alt="Kamae guard position demonstration"
                                className="Kihon-Stance-Photo-2"
                            />
                        </div>
                    </div>
                </section>

                {/* General Tips */}
                <section className="bg-gray-100 p-8 rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-4 text-center">General Tips for All Stances</h2>
                    <ul className="space-y-3 list-disc ml-4">
                        <li><strong>Breathing:</strong> Always breathe naturally. Never hold your breath.</li>
                        <li><strong>Tension:</strong> Be relaxed but focused. Excessive tension wastes energy.</li>
                        <li><strong>Core:</strong> Engage your core muscles to maintain proper structure.</li>
                        <li><strong>Repetition:</strong> Practice stances daily to build strength and muscle memory.</li>
                        <li><strong>Mirror Work:</strong> Use a mirror to check your form and alignment.</li>
                        <li><strong>Balance:</strong> Feel grounded and stable, with weight centered in your lower abdomen (hara).</li>
                    </ul>
                </section>
            </div>
        </main>
    )
}