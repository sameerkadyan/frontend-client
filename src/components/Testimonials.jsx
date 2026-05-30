import React from "react";
import "../style/testimonials.css";

const testimonialsData = [
  {
    name: "Rohit Sharma",
    review:
      "Itna smooth aur perfect to mera pull shot bhi nahi jitna isak UI kya baat hai ladke",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Modi ji",
    review: "Mittro..... Ye website EVM se bhi jyada secure hai",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Donald Trump",
    review: "Not bad... Not bad... Sameer You are doing very well",
    rating: "⭐⭐⭐⭐",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Users Say</h2>

      <div className="testimonials-container">
        {testimonialsData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="review">"{item.review}"</p>
            <h4 className="name">- {item.name}</h4>
            <div className="rating">{item.rating}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;