"use client";
// Importing necessary modules
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Define data for tabs
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>MySQL</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>School: Maryvale High School</li>
        <li>Pre University College :Pompei Pre-University College</li>
        <li>Bachelor's: St. Aloysius College[Autonomous]</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Palo Alto Networks Cybersecurity Academy</li>
        <li>Introduction to Data Science - Great Learning Academy (Online)</li>
        <li>
          IBM Certificate Course in "What is Data Science?" - Coursera (Online)
        </li>
        <li>
          IBM Certificate Course in "Python for Data Science, AI and
          Development" - Coursera (Online)
        </li>
        <li>
          Ethical Cyber Security Course (Ethicalbyte) - St Aloysius College
          (Autonomous), Mangalore
        </li>
        <li>
          Cyber Security Training (PaloAlto) by Honeywell - St Aloysius College
          (Autonomous), Mangalore
        </li>
        <li>
          Graphic Design and Animation Diploma Course - St Aloysius College
          (Autonomous), Mangalore
        </li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>English</li>
        <li>Hindi</li>
        <li>Kannada</li>
        <li>German [ A2 ]</li>
      </ul>
    ),
  },
];

// Define the main component
const AboutSection = () => {
  // State for active tab
  const [tab, setTab] = useState("skills");
  // useTransition hook
  const [isPending, startTransition] = useTransition();

  // Function to handle tab change
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // Render the component
  return (
    <section className="text-white" id="about">
      <div className="grid grid-cols-1 gap-8 items-center py-8 px-4 md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        {/* Image component with alt prop */}
        <Image
          src="/images/about-image.png"
          width={500} // Adjust the width for smaller screens
          height={500} // Adjust the height for smaller screens
          alt="About Me Image"
        />
        {/* Content section */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          {/* Updated text with corrected quote */}
          <p className="text-base md:text-lg">
            I aim to grow professionally in a dynamic organization, where my
            enthusiasm and dedication can flourish. With a keen interest in Data
            Science, I'm actively pursuing courses and certifications to build a
            career in this field. I'm eager to apply my skills in data analysis
            and machine learning to solve real-world problems and drive
            data-driven decision-making. I thrive in collaborative environments
            and am always open to new opportunities for learning and
            development.
          </p>
          {/* Tab buttons */}
          <div className="flex flex-col md:flex-row justify-start mt-8">
            {/* TabButton components */}
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Programming Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          {/* Display content based on active tab */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the component
export default AboutSection;
