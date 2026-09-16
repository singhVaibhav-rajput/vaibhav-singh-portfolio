
import Heading from "./Heading";
import Description from "./Description";
import Skills from "./skill";

function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <Heading />
        {/* About content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <Description />

          {/* Right - Skills */}
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;
