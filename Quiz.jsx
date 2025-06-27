import { useState } from 'react';

const questions = [
  { question: 'What is React?', options: ['Library', 'Framework', 'Language'], answer: 'Library' },
  { question: 'Which hook is used for state?', options: ['useEffect', 'useState', 'useRef'], answer: 'useState' },
  { question: 'What is JSX?', options: ['Java Syntax', 'JSON', 'JavaScript XML'], answer: 'JavaScript XML' }
];

function Question({ q, index, onAnswer }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl">{index + 1}. {q.question}</h2>
      {q.options.map((opt) => (
        <button
          key={opt}
          onClick={() => onAnswer(opt === q.answer)}
          className="block my-1 p-2 bg-blue-100 hover:bg-blue-200"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  function handleAnswer(correct) {
    if (correct) setScore(score + 1);
    setCurrent(current + 1);
  }

  if (current >= questions.length) {
    return <h2 className="text-xl">You scored {score} out of {questions.length}</h2>;
  }

  return <Question q={questions[current]} index={current} onAnswer={handleAnswer} />;
}
