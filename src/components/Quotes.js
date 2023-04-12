import React, { useState, useEffect } from 'react';

export default function Quotes() {
  // API URL and token
  const apiUrl = 'https://api.api-ninjas.com/v1/quotes/';
  const token = '7R4Z2M0ATFoFWAqNgcKVig==auatjCNk3a95D2M7';

  // State variables
  const [quote, setQuote] = useState(''); // current quote
  const [isLoading, setIsLoading] = useState(true); // loading indicator
  const [error, setError] = useState(''); // error message

  // Fetch quote on mount
  useEffect(() => {
    fetch(apiUrl, {
      headers: { 'X-API-Key': `${token}` },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('An error occurred while fetching the quote.');
        }
        return res.json();
      })
      .then((data) => {
        setQuote(data[0].quote); // update state with fetched quote
        setIsLoading(false); // set loading indicator to false
      })
      .catch((err) => {
        setError(err.message); // set error message
        setIsLoading(false); // set loading indicator to false
        throw new Error(err);
      });
  }, []); // empty dependency array to run once on mount

  // Render quote or loading/error message
  return (
    <div className="quote-bodybg">
      <div className="quote-body">
        <div className="quote">
          <span>{isLoading ? 'Loading ...' : ''}</span>
          <span>{error || ''}</span>
          {quote}
        </div>
      </div>
    </div>
  );
}
