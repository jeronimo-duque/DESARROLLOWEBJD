import React, { useState, useEffect } from 'react';

const MultipleCustomHooks = () => {
  const [counter, setCounter] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://breakingbadapi.com/api/quotes/${counter}`)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].quote);
        setIsLoading(false);
      });
  }, [counter]);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <button onClick={handleIncrement}>Increment Counter</button>
      <p>Counter: {counter}</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <blockquote>{quote}</blockquote>
      )}
    </div>
  );
};

export default MultipleCustomHooks;
