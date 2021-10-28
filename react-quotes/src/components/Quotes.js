import React, { Component } from 'react'

class Quotes extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            quote: '',
            author: '',
        }
        this.API_URL  = 'https://cors-anywhere.herokuapp.com/';
        this.API_URL += 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
        this.TWITTER_URL = 'https://twitter.com/intent/tweet/';
    }
    
    componentDidMount(){
        this.generateNewQuote();
    }
    
    generateNewQuote = () => {
        fetch( this.API_URL )
        .then( response => {
            return response.json();
        })
        .then(data => {
            this.setState({
                quote : data.quoteText,
                author: data.quoteAuthor,
            })
        }).catch(
            error => {
                console.log( 'Request failed:' , error );
                alert( 'Failed to load quote!\nPlease try after some time.' )
            }
        )
    }

    render() {
        return (
            <div className="quote-box" id="Quotes" >
                {
                    this.state.author !== "" ? 
                    (
                        <div 
                            id="text">
                            <i 
                                className="fa fa-quote-left" 
                                aria-hidden="true" 
                                style={{ marginRight: '10px' }} 
                            ></i>
                            { this.state.quote }
                        </div>
                    ) : null
                }
                {
                    this.state.author !== "" ? 
                    (
                        <div id="author" > - { this.state.author }</div>
                    ): null
                }
                <div id="footer">
                    <div id="share">
                        {
                            this.state.quote !== "" ? 
                                <SocialShare 
                                    quote = { this.state.quote }
                                    author = { this.state.author }
                                    TWITTER_URL = { this.TWITTER_URL }
                                /> : null
                        }
                    </div>
                    <div id="new-quote-button-container" >
                        <button 
                            id="new-quote" 
                            onClick={ this.generateNewQuote } 
                            className="btn"
                        >
                            New quote
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const SocialShare = ( props ) => {
    return(
        <div>
            <a
                id="tweet-quote"
                title="Tweet this quote!"
                href={`${props.TWITTER_URL}?text="${props.quote}" - ${props.author}`}
                target="_blank"
                rel="noreferrer"
                className="btn"
                >
                <i 
                    className="fa fa-twitter" 
                    aria-hidden="true"
                ></i>
            </a>
        </div>
    );

}

export default Quotes;