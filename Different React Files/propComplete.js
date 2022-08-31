import '../index.css';
//Inline Css or JSX Css is on Author arrow function
// Variables
const firstBook = {
    title: "Bitcoin",
    Author: 'Antony lewis',
    img: 'https://m.media-amazon.com/images/I/819bH1CNx5L._AC_UY327_FMwebp_QL65_.jpg'
}
const secondBook = {
    title: "Bitcoin",
    Author: 'Ajanta & Vivek',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/51CksOYaN3L._AC_SX184_.jpg'
}
function BookList() {
    return (
        <div className="Book">
            <Book img={firstBook.img} title={firstBook.title} Author={firstBook.Author} >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae labore laborum ducimus ratione aliquid ipsa expedita sapiente ullam distinctio placeat.</p>
            </Book>
            <Book img={secondBook.img} title={secondBook.title} Author={secondBook.Author} />

        </div>
    );
}
const Book = ({ img, title, Author, children }) => {
    // const  = props;
    return (
        <div >
            < img src={img} alt="as" />
            <p className='title'>{title}</p>
            <h1>{Author}</h1>
            {children}

        </div >
    );
}
export default BookList;