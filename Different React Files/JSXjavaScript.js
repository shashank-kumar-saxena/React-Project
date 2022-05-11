import React from 'react';
import ReactDom from 'react-dom';


//Including external Css File
import './index.css';
//Inline Css or JSX Css is on Author arrow function
function BookList() {
    return(<div>
        <Book/>
    </div>);
}
const author="Antony";
function Book() {
        
    const title="THE BASIS OF BITCOINS AND BLOCKCHAINS";
    return(
        <div  className="Book">
        <img src="https://m.media-amazon.com/images/I/819bH1CNx5L._AC_UY327_FMwebp_QL65_.jpg" alt="as"/>
            <h1>{title}</h1> {//here we use parenthesis to get back into the javascript world
            }         
            <p style={{fontSize:'1.4em', fontWeight:'bold'}}>{author.toUpperCase()}</p>
        </div>
    );
}
ReactDom.render(<BookList/>,document.getElementById('root'));