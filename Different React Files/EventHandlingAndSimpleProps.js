import '../index.css';
//Inline Css or JSX Css is on Author arrow function
// Variables
var books = [
    {
        id: 1,
        title: "Bitcoin",
        Author: 'Antony lewis',
        img: 'https://m.media-amazon.com/images/I/819bH1CNx5L._AC_UY327_FMwebp_QL65_.jpg',
        txxt: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis placeat quas vel iure corrupti dicta tenetur facere sequi veritatis eos!'
    },
    {
        id: 2,
        title: "Bitcoin",
        Author: 'Ajanta & Vivek',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/51CksOYaN3L._AC_SX184_.jpg'
    },
    {
        id: 3,
        title: 'Teen Machine',
        Author: 'Ishita Agarwal',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/41B2C2Frv5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
    }]
function BookList() {
    return (
        <div className="Book">{books.map((book) => {
            return <Book key={book.id} title={book.title} Author={book.Author} img={book.img} ><p>{book.txxt}</p></Book>
        })}</div>
    );
}
function showAutor(Author) {
    console.log(Author);
}
const Book = ({ img, title, Author, children }) => {
    // const  = props;
    return (
        <div >
            < img src={img} alt="as" />
            <p className='title'>{title}</p>
            <h1>{Author}</h1>
            {children}
            <button type='button' onClick={() => {
                window.alert(" Hello ")
            }}> Alert Button</button>
            <button type="Button" onMouseOver={() => showAutor(Author)}>showAutor</button>
        </div >
    );
}
export default BookList;