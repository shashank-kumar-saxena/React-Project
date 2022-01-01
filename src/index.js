import React from 'react';
import ReactDom from 'react-dom';


//Including external Css File
import './index.css';
//Set-up vars

// const title="THE BASIS OF BITCOINS AND BLOCKCHAINS";
// const author="Antony";
// const img='https://m.media-amazon.com/images/I/819bH1CNx5L._AC_UY327_FMwebp_QL65_.jpg';

//props example

const firstBook ={
    img:'https://m.media-amazon.com/images/I/819bH1CNx5L._AC_UY327_FMwebp_QL65_.jpg',
    author:'Antony',
    title:'The Basis of Bitcoin and Blockchains'
};
const secondBook ={
    img:'https://images-eu.ssl-images-amazon.com/images/I/914V32DG1ZS._AC_UL200_SR200,200_.jpg',
    author:'Jeff Kinney',
    title:'Diar Of a wimoy Kid:Big Shot '
};

function BookList() {
    return(<div>
        <Book img={firstBook.img} author={firstBook.author} title={firstBook.title}/>
        <Book img={secondBook.img} author={secondBook.author} title={secondBook.title} />
    </div>);
}
function Book(props) {
    // props==const {img,author,title};
    return(
        <div  className="Book">
        <img src={props.img} alt="as"/>
            <h1>{props.title}</h1> 
            {
            //here we use parenthesis to get back into the javascript world  
            }         
            <p style={{fontSize:'1.4em', fontWeight:'bold'}}>{props.author.toUpperCase()}</p>
            
        </div>
    );
}
ReactDom.render(<BookList/>,document.getElementById('root'));