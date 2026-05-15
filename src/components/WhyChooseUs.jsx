import React from "react";
import Card from "./Card";
import "../style/whychooseus.css";

const benefitsData = [
  {
    title: "Fast Performance",
    description: "🚀 Fast itna ki tumhare excuses se bhi tez chalega",
  },
  {
    title: "Easy to Use",
    description: "💀 Simple design — tum life me confuse ho sakte ho, yahan nahi",
  },
  {
    title: "Secure Platform",
    description: "🐛 Bugs itne kam ki mil gaye to unhe feature bol denge",
  },
  {
    title: "Responsive Design",
    description: "📱 Har device pe chalega (even us phone pe jo hang karta hai)",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why">
      <h2 className="why-title">Why Choose Us</h2>

      <div className="why-container">
        {benefitsData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;