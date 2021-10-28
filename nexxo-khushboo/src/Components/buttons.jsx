import twitter from '../img/Twitter-Transparent.png';
import tumblr from '../img/tumblr.png';

function Buttons(props){
    const { color, callQuotesApi } = props;
    const handleNewQuote = () => {
        callQuotesApi();
    };
    return(
        <div className='buttons'>
            <button className='b1' id='tweet-quote' style = {{background: color}}><a href='https://twitter.com/compose/tweet' target='_blank'><img src={twitter} alt="Twitter" width="30" height="30"/></a></button>
            <button className='b1' id='tumblr' style = {{background: color}}><img src={tumblr} alt="Tumblr" width="30" height="30"/></button>
            <button className='b1' id='new-quote' onClick={handleNewQuote} style = {{background: color}} >New quote</button>
        </div>
    )
}

export default Buttons;