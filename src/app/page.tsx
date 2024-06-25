import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-minsk-950 text-minsk-400 flex min-h-screen flex-col items-center justify-center">
      <div className="container">
        <div className="flex flex-col space-y-3">
          <span>Hey there,</span>
          <span>My name is Garrett Warzecha</span>
          <span>
            I am a Software Engineer from Phoenix. I love learning about
            computers/engineering/development, applying what I learn, and
            reading about the history of tech, exciting current trends, and its
            future.
          </span>
        </div>
      </div>
    </main>
  );
}
