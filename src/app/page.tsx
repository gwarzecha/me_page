import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-indigo-950 text-indigo-300">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2">
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
