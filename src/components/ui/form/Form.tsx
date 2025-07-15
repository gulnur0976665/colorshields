"use client";
import React, { useState } from "react";
import scss from "./Form.module.scss";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import color from "../../../assets/color1.png";
import Image from "next/image";
import { CiFileOn } from "react-icons/ci";
import elipse from "../../../assets/Ellipse 39.png";
const questions = [
  {
    title: "What is your typical process for working with a new customer?",
    answer:
      "When working with new customers, we begin with prompt and responsive communication upon their initial contact. We schedule a detailed consultation to understand their needs, offer recommendations, and provide a customized proposal. Once the proposal is accepted, we finalize a contract detailing project terms, including payment schedules and milestones. We assist in material selection and establish a project timeline aligned with the customers preferences. Our skilled team executes the project, maintaining high-quality standards and conducting inspections for customer satisfaction. We value feedback, offer guarantees, and remain committed to addressing any post-project concerns promptly. Our goal is to ensure a positive and enduring relationship, meeting or exceeding customer expectations throughout the project.",
  },
  {
    title:
      "What education and/or training do you have that relates to your work?",
    answer: "We have formal training in...",
  },
  {
    title:
      "What should the customer know about your pricing (e.g., discounts, fees)?",
    answer: "We offer transparent pricing with...",
  },
  {
    title: "How did you get started doing this type of work?",
    answer: "Our journey began when...",
  },
];

const Form = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={scss.Form}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.BlockAll}>
            <div className={scss.titleBlock}>
              <p className={scss.subHr}></p>
              <h3 className={scss.title}>Have a question?</h3>
            </div>
            <div className={scss.block2}>
              {questions.map((item, index) => (
                <div
                  key={index}
                  className={`${scss.accordionItem} ${
                    activeIndex === index ? scss.active : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className={scss.hr22}>
                    <div className={scss.question}>{item.title}</div>
                    {activeIndex === index ? (
                      <HiChevronDown />
                    ) : (
                      <HiChevronRight />
                    )}
                  </div>
                  {activeIndex === index && (
                    <div className={scss.answer}>{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <Image src={elipse} alt="elipse" className={scss.elipse} />
          <div className={scss.blockForm}>
            <div className={scss.form1}>
              <div className={scss.texts}>
                <h1>Lets work together</h1>
                <p>
                  Looking to take your kitchen or family room to the next level?
                  How about a new deck or hardwood floor? Feel free to send us a
                  note to set up a free estimate. Wed love to hear from you.
                  Lets build something together!
                </p>
              </div>
              <Image src={color} alt="color" className={scss.colorImg} />
            </div>
            <div className={scss.form2}>
              <div className={scss.input}>
                <h6>Name</h6>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className={scss.input}>
                <h6>Email</h6>
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className={scss.input}>
                <h6>Phone number</h6>
                <input type="text" placeholder="+1 xxx xxx xxx xxx" />
              </div>
              <div className={scss.input}>
                <h6>Project Description</h6>
                <input
                  type="text"
                  placeholder="Enter description of your project"
                />
              </div>
              <div className={scss.input4}>
                <h6>Upload files</h6>
                <div className={scss.inputs}>
                  <p>Drop file here or browse</p>
                  <div className={scss.inputIcon}>
                    <CiFileOn className={scss.icon} />
                    <p>Request a qoute</p>
                  </div>
                </div>
              </div>
              <button>Request a qoute</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
