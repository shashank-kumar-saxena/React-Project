//Inline Css or JSX Css is on Author arrow function
import '../index.css';
// Variables
import books from './books';

//Other javaScript files
import Book from '../book';


function BookList() {
    return (
        <div className="Book">{books.map((book) => {
            return <Book key={book.id} name={book.name} title={book.title} Author={book.Author} img={book.img} ><p>{book.txxt}</p></Book>
        })}</div>
    );
}


export default BookList;