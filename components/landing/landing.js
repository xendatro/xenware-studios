export default function Landing() {
    return (
        <div id="home">
            <div className="bg-cover bg-no-repeat bg-center w-full h-screen blur-sm brightness-50" style={{backgroundImage: 'url("teacher.png")'}}>

            </div>
            <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2">
                <h1 className="text-3xl md:text-8xl font-bold mb-4 text-center text-zinc-50">Creating the Future of Roblox, One Game at a Time</h1>
                <p className="text-xl text-zinc-50 mb-8 font-light md:w-2/3 w-full text-center"><i>Xenware Studios is a game development team focused on creating innovative, immersive experiences for players across the Roblox platform.</i></p>
            </div>
        </div>


    )
}