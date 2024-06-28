"use client";
import LaptopSVG from "../images/laptop.svg";
import GithubLogoSVG from "../images/githublogo.svg";
import LinkedInLogoSVG from "../images/linkedin.svg";
import EmailSVG from "../images/email.svg";

export default function HomePage() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.slice(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        if (targetId === "contact") {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        } else {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <main className="flex h-screen w-screen flex-col bg-minsk-950">
      <nav className="fixed w-full bg-minsk-950 text-minsk-400 sm:h-1/6 sm:w-full">
        <div className="container mx-auto flex h-full items-center justify-center space-x-11">
          <a
            href="#about"
            onClick={handleScroll}
            className="font-sourcecode text-minsk-300"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={handleScroll}
            className="font-sourcecode text-minsk-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={handleScroll}
            className="font-sourcecode text-minsk-300"
          >
            Contact me
          </a>
        </div>
      </nav>
      <div className="flex w-full flex-grow flex-col">
        <section
          id="about"
          className="flex min-h-screen flex-col items-center justify-center bg-minsk-950  text-minsk-400"
        >
          <div className="container mx-auto ">
            <div className="mx-auto flex flex-col items-center gap-6 sm:flex-row">
              <div className="mx-auto flex w-full max-w-[50rem] flex-col gap-3 sm:w-1/2">
                <span className="font-sourcecode text-base">Hey there,</span>
                <span className="font-firacode mb-4 text-4xl">
                  My name is Garrett Warzecha
                </span>
                <span className="font-inconsolata text-lg">
                  I&apos;m a Software Engineer from Phoenix. I love learning
                  about computers/engineering/development, applying what I
                  learn, and reading about the history of tech, exciting current
                  trends, and its future.
                </span>
              </div>
              <div className="w-full sm:w-1/2">
                <LaptopSVG className="hidden h-80 w-80 max-w-[50rem] sm:block" />
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="flex min-h-screen flex-col items-center justify-center bg-minsk-950 text-minsk-400"
        >
          <div className="container mx-auto px-4 py-8">
            <h2 className="font-firacode mb-4 text-4xl">Projects</h2>
            <p className="font-inconsolata">Project details go here...</p>
          </div>
        </section>
        <section
          id="contact"
          className="flex min-h-screen flex-col items-center justify-center bg-minsk-950 text-minsk-400"
        >
          <div className="container mx-auto px-4 py-8">
            <h2 className="font-firacode mb-4 text-4xl">Contact</h2>
            <p className="font-inconsolata">Contact information goes here...</p>
          </div>
        </section>
      </div>
      <footer
        id="footer"
        className="flex w-full items-center justify-center bg-minsk-950 p-4 text-minsk-400 sm:h-1/6 sm:w-full"
      >
        <div className="flex flex-row space-x-5">
          <a href="https://github.com/gwarzecha" target="_blank">
            <GithubLogoSVG className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/garrett-warzecha/"
            target="_blank"
          >
            <LinkedInLogoSVG className="h-8 w-8" />
          </a>
          <a href="mailto:gmwarzecha@tutanota.com" target="_blank">
            <EmailSVG className="h-8 w-8" />
          </a>
        </div>
      </footer>
    </main>
  );
}
