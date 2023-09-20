import React, { useState } from "react";

const QuoteGenerator = () => {
    // Define API settings
    let options = {
        method: 'GET',
        headers: {'x-api-key':process.env.REACT_APP_API_KEY}
    };

    // Fetch quote data from API
    const generate = () => {
        fetch("https://api.api-ninjas.com/v1/quotes", options)
        .then(response => response.json())
        .then(data => setQuote(data[0]))
        .catch(err => console.log(`error ${err}`));
    };

    // Initialize state of quote
    const [quote, setQuote] = useState({quote: "Click 'generate quote' to generate a random quote",
                                author: "App Developer"});

    // Return QuoteGenerator component as a div
    return (
        <div className="QuoteGenerator">
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