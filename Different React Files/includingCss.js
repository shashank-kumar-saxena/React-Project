import React from 'react';
import ReactDom from 'react-dom';


//Including external Css File
import './index.css';
//Inline Css or JSX Css is on Author arrow function
function BookList() {
    return(
        <div  className="Book">
          <Book/>  
          <Book/>  
          <Book/>  
          <Book/>  
        </div>
    );
}
const Book = () => {
    return(
        <div>
            <ImageVar/>
            <Title/>
            <Author/>
        </div>
    );
}
const ImageVar =()=>(
        <img src="https://m.media-amazon.com/images/I/819bH1CNx5L._AC_UY327_FMwebp_QL65_.jpg" alt="as"/>
    )
const Title=()=> <h1>Best Book</h1>
const Author=()=>{
    // In Inline Css you can see double curly breakets
    return <p style={{fontSize:'1.4em', fontWeight:'bold'}}>Antony</p>
}
ReactDom.render(<BookList/>,document.getElementById('root'));