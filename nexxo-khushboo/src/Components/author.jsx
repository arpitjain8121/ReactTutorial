function Author(props){
    const { author, font, color } = props;
    return(
        <div id='author'className='author' style={{fontFamily: font, color: color}}>
            {author.length > 0 ? `- ${author}` : ''}
        </div>
    )
}

export default Author;