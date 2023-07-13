import React from "react"
import Image from "next/image"

const skills = [{ skill: "HTML" }, { skill: "CSS" }, { skill: "JavaScript" }, { skill: "Python" },
  { skill: "React" }, { skill: "Node.js" }, { skill: "Tailwind CSS" }, { skill: "Git" }, { skill: "Jupyter Notebooks" },
  { skill: "SQL" }, { skill: "PostgreSQL" }, { skill: "C/C++" }, { skill: "Docker" },
]

const CVSection = () => {
  return (
    <section id="cv">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 items-center">
        <h1 className="text-center font-bold text-4xl">
          My resume
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Download CV</span>
      </button>
      </div>
    </section>
  )
}

export default CVSection
