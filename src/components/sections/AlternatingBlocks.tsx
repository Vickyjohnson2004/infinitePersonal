import React from "react";
import VideoBlock from "./../../components/sections/VideoBlock";
import TextContent from "./../../components/sections/TextContent";

const blocks = [
  {
    id: "investigate",
    subtitle: "Facilities Manager",
    title: "Investigate",
    description:
      "Gain operational visibility with an interactive map of active alerts...",
    list: [
      "Comprehensive Operational Visibility.",
      "Advanced Alerts Analysis.",
      "Streamlined issue resolution.",
    ],
    video: {
      src: "https://designsystem.switchautomation.com/images/Voiceover_videos/FM-Investigate-compressed.mp4",
      poster:
        "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/67bddba5a12da84f6056566e_image.png",
    },
    cta: { text: "Contact Sales", link: "#" },
  },
  {
    id: "sustainability",
    subtitle: "Sustainability",
    title: "Energy intensity",
    description:
      "Staying ahead of potential issues with ease. Identify energy efficiency opportunities...",
    list: [
      "Centralized portfolio management.",
      "Identify energy efficiency opportunities.",
      "Benchmark performance across your portfolio.",
    ],
    video: {
      src: "https://designsystem.switchautomation.com/images/Voiceover_videos/Sustainable-compressed.mp4",
      poster:
        "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/67bddba5b091f05da729e45c_Sustainability.png",
    },
    cta: { text: "Contact Sales", link: "#" },
  },
];

const AlternatingBlocks: React.FC = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto flex flex-col gap-16">
      {blocks.map((block, index) => (
        <div
          key={block.id}
          className={`flex flex-col md:flex-row items-center gap-12 p-8 bg-white shadow-lg rounded-xl transition hover:shadow-xl ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2 w-full">
            <VideoBlock {...block.video} id={block.id} />
          </div>
          <div className="md:w-1/2 w-full">
            <TextContent {...block} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AlternatingBlocks;
