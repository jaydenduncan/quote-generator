import React, { useState } from "react";

const QuoteGenerator = () => {
    let options = {
        method: 'GET',
        headers: {'x-api-key':process.env.REACT_APP_API_KEY}
    };

    const generate = () => {
        fetch("https://api.api-ninjas.com/v1/quotes", options)
        .then(response => response.json())
        .then(data => setQuote(data[0]))
        .catch(err => console.log(`error ${err}`));
    };

    const [quote, setQuote] = useState({quote: "Click 'generate quote' to generate a random quote",
                                author: "App Developer"});

    return (
        <div className="container">
            <div className="quote-space">
                <blockquote className="quote">
                    {`"${quote.quote}"`}
                </blockquote>
                <p className="author">- {quote.author}</p>
                <button className="generateBtn" onClick={generate}>Generate Quote</button>
            </div>
        </div>
    );
};

export default QuoteGenerator;