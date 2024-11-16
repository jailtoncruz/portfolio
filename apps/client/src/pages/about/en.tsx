import ReactCountryFlag from "react-country-flag";

export function AboutEn() {
  return (
    <div className="flex flex-col gap-2 md:text-lg">
      <p>
        With 8 years of experience in technology and 4 years specializing as a
        software developer, I have a proven track record of designing and
        implementing robust, scalable solutions. Currently, I work with{" "}
        <strong>.NET</strong> and <strong>Angular</strong>, contributing to the
        development of applications that meet commercial team needs.
      </p>

      <p>
        While my current role emphasizes <strong>.NET</strong> and{" "}
        <strong>Angular</strong>, I am a specialist in
        <strong>Node.js</strong> and <strong>React</strong>, leveraging years of
        experience to create full-stack applications that prioritize performance
        and usability. My expertise also extends to Java, Azure, and other
        cutting-edge technologies, enabling me to deliver tailored solutions for
        complex challenges.
      </p>

      <p>
        Fluent in{" "}
        <strong>
          English <ReactCountryFlag countryCode="US" />
        </strong>{" "}
        (B2~C1), I thrive in global, cross-functional teams. I am also actively
        learning{" "}
        <strong>
          French <ReactCountryFlag countryCode="FR" />
        </strong>{" "}
        and{" "}
        <strong>
          Japanese <ReactCountryFlag countryCode="JP" />
        </strong>
        , driven by a passion for multicultural collaboration and continuous
        personal growth. My enthusiasm for innovation is reflected in ongoing
        projects that integrate advanced frameworks and AI to build
        next-generation applications.
      </p>
    </div>
  );
}
