"use client";
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
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col bg-minsk-950">
      <nav className="nav-gradient sm:h-1/12 fixed left-0 top-0 z-50 w-full bg-minsk-950 py-6 text-minsk-400 sm:w-full sm:py-8">
        <div className="container mx-auto flex h-full items-center justify-center space-x-7">
          <a
            href="https://github.com/gwarzecha"
            target="_blank"
            className="font-sourcecode text-minsk-300"
          >
            Projects
          </a>
          <a
            href="/2024_Resume_updated.pdf"
            target="_blank"
            className="font-sourcecode text-minsk-300"
          >
            Resume
          </a>
        </div>
      </nav>
      <div className="mt-[20px] flex w-full flex-grow flex-col sm:mt-0">
        <section
          id="about"
          className="flex min-h-screen flex-col items-center justify-center bg-minsk-950 text-minsk-400"
        >
          <div className="container mx-auto ">
            <div className="mx-auto flex flex-col items-center gap-6 ">
              <div className="mx-auto flex w-full max-w-[70rem] flex-col gap-3 sm:w-3/4">
                <span className="font-sourcecode text-base">Hey there,</span>
                <span className="mb-4 font-firacode text-4xl">
                  My name is Garrett Warzecha
                </span>
                <span className="font-inconsolata text-lg">
                  I&apos;m a Software Engineer from Phoenix, currently working
                  for an insurance industry leader. My love for computers is
                  rivaled only by my love for cats. As it relates to tech, I
                  spend my time learning, building, and reading anything I can
                  get my hands on about computers, engineering, and development.{" "}
                </span>
              </div>
              <div className="container mx-auto px-4 py-8">
                <div className="flex flex-row justify-center space-x-5">
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
