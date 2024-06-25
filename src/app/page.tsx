import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex h-screen w-screen flex-col">
      <header className="flex w-full items-end justify-center bg-minsk-950 text-minsk-400 sm:h-1/6 sm:w-full">
        Header
      </header>
      <div className="flex w-full flex-grow flex-col sm:flex-row">
        <nav className="hidden bg-minsk-950 text-minsk-400  sm:flex sm:w-1/6 sm:flex-col sm:items-center">
          <a href="#link1" className="p-2">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2 4 4 8-8 2 2m0 0l-2 2m2-2l-2 2"
              />
            </svg>
          </a>
          <a href="#link2" className="p-2">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </a>
          <a href="#link3" className="p-2">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.94 4.94-4.94 4.94M5 10l4.94 4.94L5 20.88"
              />
            </svg>
          </a>
        </nav>
        <section className="flex-grow bg-minsk-950 text-minsk-400">
          <div className="container mx-auto p-4">
            <div className="flex flex-col space-y-3">
              <span>Hey there,</span>
              <span>My name is Garrett Warzecha</span>
              <span>
                I am a Software Engineer from Phoenix. I love learning about
                computers/engineering/development, applying what I learn, and
                reading about the history of tech, exciting current trends, and
                its future.
              </span>
            </div>
          </div>
        </section>
      </div>
      <footer className="flex w-full items-center justify-center bg-minsk-950 text-minsk-400 sm:h-1/6 sm:w-full">
        Footer
      </footer>
    </main>
  );
}
