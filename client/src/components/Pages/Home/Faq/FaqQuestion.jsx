import React from "react";

const FaqQuestion = ({ d }) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-plus border border-base-200 bg-softPeach rounded-box"
    >
      <div className="collapse-title text-xl font-medium">{d.question}</div>
      <div className="collapse-content">
        <p>{d.answer}</p>
      </div>
    </div>
  );
};

export default FaqQuestion;
