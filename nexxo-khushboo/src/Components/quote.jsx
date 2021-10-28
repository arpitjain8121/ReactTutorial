function Quote(props){
    const { quote, font, color } = props;
    return(
        <div id='text-element' className='quote' style={{fontFamily: font, color: color}}>
            {quote.length > 0 ? `" ${quote}` : ''}
        </div>
    )
}

export default Quote;