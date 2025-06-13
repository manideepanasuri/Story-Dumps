import { Github } from "lucide-react";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

const About = () => {
  return (
    <section className="w-full px-3 py-12 " id="about-us">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          About StoryDumps
        </h1>

        <p className=" mb-4 text-lg">
          Welcome to <span className="font-semibold">StoryDumps</span>, your go-to place for turning chaotic thoughts into entertaining chaos!
        </p>
        <p className=" mb-4 text-lg">
          We blend AI storytelling, voice generation, and dynamic visuals to bring you short-form, punchy, and addictively watchable content — all from just a few lines of text.
        </p>

        <h2 className="text-2xl font-semibold  mt-8 mb-4">
          Why StoryDumps?
        </h2>
        <ul className="list-disc list-inside  mb-4 space-y-2 text-lg">
          <li>Turns your idea into a dialogue</li>
          <li>Picks unique character voices</li>
          <li>Adds stylized visuals</li>
          <li>Generates an entire video — fast</li>
        </ul>

        <h2 className="text-2xl font-semibold  mt-8 mb-4">
          Who’s Behind This?
        </h2>
        <p className=" mb-4 text-lg">
          Hey! I’m <span className="font-semibold">Manideep Anasuri</span>, a student, dev, programing enthusiast and occasional storytime addict.
          I built StoryDumps because I wanted to combine my love for storytelling, coding, and brain-melting internet content.
        </p>

        <h2 className="text-2xl font-semibold  mt-8 mb-4">
          Try It. Break It. Enjoy It.
        </h2>
        <p className=" text-lg mb-6">
          For now, StoryDumps is completely free. Just enter your idea and watch the magic happen. We’re always experimenting, improving, and listening.
        </p>

        <Button variant="outline" asChild className="mt-10">
          <Link
            to="https://github.com/manideepanasuri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition"
          >
            <Github className="w-5 h-5" />
            Follow me on GitHub
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default About;
