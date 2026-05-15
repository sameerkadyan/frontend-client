import React from "react";
import Card from "./Card";
import "../style/features.css";
import performance from "../assets/performance.svg"
import responsive from "../assets/responsive.svg"
import security from "../assets/security.svg"
import cycle from "../assets/cycle.svg"
import Customize from "../assets/Customize.svg"
import UI from "../assets/UI.svg"

const featuresData = [
  {
    title: "🚀 Fast loading",
    description: "kyunki patience sirf exams ke liye hota hai",
    image: performance,
  },
  {
    title: "📱 Fully responsive",
    description: "laptop ho ya last-bench ka phone",
    image: responsive,
  },
  {
    title: "🔐Secure System",
    description: "Aapka data yahan aapke exam marks se bhi zyada safe hai",
    image: security,
  },
  {
    title: "🎨Easy Customization",
    description: "Itna easy customize kiya hai ki assignment se bhi aasan lagega",
    image: Customize,
  },
  {
    title: "🧩Reusable Components",
    description: "Same cheez baar-baar likhne ki zarurat nahi… life already tough hai",
    image: cycle,
  },
  {
    title: "✨Modern UI",
    description: "clean, smooth aur premium feel ke saath",
    image: UI,
  },
];

const Features = () => {
  return (
    <section className="features">
      <h2 className="features-title">Our Features</h2>

      <div className="features-container">
        {featuresData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;