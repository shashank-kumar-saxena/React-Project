import React from 'react';
import ReactDom from 'react-dom';
// normal function
// function Name(){
//     return <h4>Hello,My name is shashank and this is my first React Component example using normal function</h4>;
// }

//.......array function..........
// const Name = () =>{
//     return React.createElement('h1',{},'Hello,My name is shashank and this is my frst first Component example using Arrom method');
// } 

function BookList() {
    return(
        <div>
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
    return <p>Antony</p>
}
ReactDom.render(<BookList/>,document.getElementById('root'));