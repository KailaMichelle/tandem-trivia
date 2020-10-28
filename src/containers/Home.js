import React from 'react';

function Home(props){
    const { trivia } = props;
    console.log(trivia)
    return(
        <div>
            <p>{trivia[0].question}</p>
            <h1>Home</h1>
        </div>
    )
}

export default Home;