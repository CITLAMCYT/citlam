import React, { useState } from 'react';
import './Quienes.css';

const Quienes = () => {
  const questions = [
    {
      id: 1,
      question: '¿quien es el mas lindo del citlam?',
      answer:
        'el mas lindo del citlam es Ezequielito',
    },
    {
      id: 2,
      question: '¿el mas gay del citlam?',
      answer:
        'Emi',
    },
    {
      id: 3,
      question: '¿quien es el mas gay del mundo ?',
      answer:
        'Emi te dije',
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggleClick = (questionId) => {
    setActiveQuestion(questionId === activeQuestion ? null : questionId);
  };

  return (
    <div className="container2">
      <div className="container1">
        {questions.map((q) => (
          <div className="wrapper1" key={q.id}>
            <button
              className={`toggle ${q.id === activeQuestion ? 'active' : ''}`}
              onClick={() => handleToggleClick(q.id)}
            >
              {q.question}
            </button>
            {q.id === activeQuestion && (
              <div className="content1">
                <p>{q.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quienes;
