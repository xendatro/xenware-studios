export default function AboutUs() {
    return (
        <div id="about">
            <h1 className="text-5xl font-bold underline underline-offset-8 mb-6 text-zinc-50 text-center mt-10">About Us</h1>
            <p className="max-w-3xl mx-auto text-2xl text-zinc-50 text-center mt-10">
                <span className="">Xenware Studios</span>, founded by Ethan Ho @xendatro and Roman D. @HustleOnPoint, is behind several front-page ROBLOX experiences with over <span className="text-green-400 font-semibold">50 million plays</span>. We specialize in crafting immersive, high-quality games that challenge and captivate players around the world.
            </p>
            <div className="flex flex-col items-center md:flex-row md:items-stretch  justify-center md:space-x-4 space-y-4 w-4/5 mx-auto mt-10">
                <div className="w-96 bg-zinc-900 shadow-lg shadow-zinc-50/10 rounded-2xl overflow-hidden">
                    <img src="era.webp" alt="" className="w-full h-auto" />
                    <div className="p-4 text-white">
                        <h2 className="text-xl font-semibold mb-2"><a href="https://www.roblox.com/games/16343978644/Escape-Room-Academy" className="hover:underline">Escape Room Academy</a> [14.5M+ Plays]</h2>
                        <p className="text-sm">A challenging escape room experience where your puzzle-solving skills are pushed to the limit across progressively harder stages.</p>
                    </div>
                </div>
                <div className="w-96 bg-zinc-900 shadow-lg shadow-zinc-50/10 rounded-2xl overflow-hidden">
                    <img src="schooltime.webp" alt="" className="w-full h-auto" />
                    <div className="p-4 text-white">
                        <h2 className="text-xl font-semibold mb-2"><a href="https://www.roblox.com/games/78163591327317/SCHOOL-TIME-HORROR" className="hover:underline">School Time</a> [17.8M+ Plays]</h2>
                        <p className="text-sm">You made the teacher very angry... 😡 Collect items, team up with friends, and escape the school!</p>
                    </div>
                </div>
                <div className="w-96 bg-zinc-900 shadow-lg shadow-zinc-50/10 rounded-2xl overflow-hidden">
                    <img src="angel.webp" alt="" className="w-full h-auto" />
                    <div className="p-4 text-white">
                        <h2 className="text-xl font-semibold mb-2"><a href="https://www.roblox.com/games/18641630195/ANGEL-HORROR" className="hover:underline">ANGEL</a> [3.5M+ Plays]</h2>
                        <p className="text-sm">You and your group of friends are detectives investigating a cold case, when suddenly it takes a mysterious turn... </p>
                    </div>
                </div>
                <div className="w-96 bg-zinc-900 shadow-lg shadow-zinc-50/10 rounded-2xl overflow-hidden">
                    <img src="fyf.webp" alt="" className="w-full h-auto" />
                    <div className="p-4 text-white">
                        <h2 className="text-xl font-semibold mb-2"><a href="https://www.roblox.com/games/119313650234364/Find-Your-Friends" className="hover:underline">Find Your Friends</a> [6.0M+ Plays]</h2>
                        <p className="text-sm">Find your Roblox friends in each map! Search for the secret hidden stars! Formed development partnership with @hythe55 for this project!</p>
                    </div>
                </div>
                <div className="w-96 bg-zinc-900 shadow-lg shadow-zinc-50/10 rounded-2xl overflow-hidden">
                    <img src="pd.webp" alt="" className="w-full h-auto" />
                    <div className="p-4 text-white">
                        <h2 className="text-xl font-semibold mb-2"><a href="https://www.roblox.com/games/6050995353/Puzzle-Doors" className="hover:underline">Puzzle Doors</a> [9.9M+ Plays]</h2>
                        <p className="text-sm">Puzzle Doors is a stage-based puzzle game where you solve logic, pattern, and math challenges to unlock the next door.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}