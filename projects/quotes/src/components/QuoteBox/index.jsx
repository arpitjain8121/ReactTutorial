import React, { useState, useEffect } from "react";
import axios from "axios";

import twitterPic from "../../images/twitter.svg";
import tumblrPic from "../../images/tumblr.svg";

import { COLORS } from "../../constants";

import "./styles.css";

export default function QuoteBox() {
  const [color, setColor] = useState(COLORS[0]);
  const [quote, setQuote] = useState({});
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchNewQuote(offset);
  }, [offset]);

  const fetchNewQuote = async (offset) => {
    try {
      const res = await axios.get(
        `https://api.paperquotes.com/apiv1/quotes/?random=random&limit=1&offset=${offset}`
      );
      setQuote(res.data.results[0]);
      setColor(COLORS[offset % 5]);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleNewQuoteClick = () => {
    setOffset(offset + 1);
  };

  return (
    <div className="quote-box" style={{ borderColor: color.primary }}>
      <blockquote className="text" style={{ color: color.primary }}>
        {quote.quote}
      </blockquote>
      <div className="author" style={{ color: color.primary }}>
        - {quote.author || "Anonymous"}
      </div>
      <div className="footer">
        <div className="social-quote">
          <a
            className="tweet-quote"
            rel="noopener noreferrer"
            target="_blank"
            href={`http://twitter.com/share?text=${quote.quote}%0D~ ${quote.author}`}
            style={{ backgroundColor: color.primary }}
          >
            <img src={twitterPic} alt="" />
          </a>
          <a
            className="tumblr-quote"
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.tumblr.com/widgets/share/tool?content=${quote.quote}&caption=${quote.author}&posttype=quote&canonicalUrl=https%3A%2F%2Fwww.tumblr.com`}
            style={{ backgroundColor: color.primary }}
          >
            <img src={tumblrPic} alt="" />
          </a>
        </div>
        <button
          className="new-quote"
          onClick={handleNewQuoteClick}
          style={{ backgroundColor: color.primary, color: color.secondary }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}
