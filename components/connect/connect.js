export default function Connect() {
  return (
    <div id="connect">
      <h1 className="text-5xl font-bold underline underline-offset-8 mb-6 text-zinc-50 text-center mt-10">Contact Us</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col space-y-2 items-center justify-center">
            <a
            href="https://discord.gg/U2X8QnhFEx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-700 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-50 hover:bg-blue-600 space-x-2 cursor-pointer"
            >
            <img src="discord.png" className="h-5 w-5" alt="Discord" />
            <span>Connect on Discord</span>
            </a>

            <a
            href="https://github.com/xendatro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-200 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 space-x-2 cursor-pointer"
            >
            <img src="github.png" className="h-5 w-5" alt="GitHub" />
            <span>Connect on GitHub</span>
            </a>

            <a
            href="mailto:batchfile1@gmail.com"
            className="flex items-center bg-red-500 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-50 hover:bg-red-400 space-x-2 cursor-pointer"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>

            <span>Connect over Email</span>
            </a>

        </div>
      </div>
    </div>
  );
}
