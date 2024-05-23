"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.svg"; // Make sure the path is correct

const EmailSection = () => {
  const email = "judydc22@gmail.com"; // Your email address

  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Nathan-sudo-pycharm">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/nathan-sequeira-941736255/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link
            href={mailtoLink}
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <Image
              src={EmailIcon}
              alt="Email Icon"
              width={40}
              height={40}
              className=" pt-2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;