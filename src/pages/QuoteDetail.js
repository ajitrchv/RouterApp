import { useParams, Route, Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Comments from '../components/comments/Comments.js';
import HighlightedQuote from "../components/quotes/HighlightedQuote.js";
//import classes from '../components/quotes/QuoteItem.module.css';
const DUMMY_q = [
  {
      id:'q1',
      text:'Harry Potter',
      author:' J.K. Rowling'
  },
  {
      id:'q2',
      text:'Macbeth',
      author:' William Shakespeare'
  },
  {
      id:'q3',
      text:'Animal Farm',
      author:'George Orwell'
  },
  {
      id:'q4',
      text:'Mrs. Dalloway',
      author:' Virginia Woolf'
  },
  {
      id:'q5',
      text:'The Sun Also Rises',
      author:' Ernest Hemingway'
  },
];

const QuoteDetail = () =>
{
    const params = useParams();
    const quote = DUMMY_q.find(quote => quote.id === params.quoteId);
    if(!quote)
    {
      return <h1>No Quote Found!</h1>
    }
    return <Fragment>
    <HighlightedQuote text={quote.text} author={quote.author}/>
    <Route path={`/quotes/${params.quoteId}`} exact>
    <div className="centered">
            <Link to={`/quotes/${params.quoteId}/comments`} className='btn--flat' >
                Load Comments
            </Link>
    </div>
    </Route>
    
    
    <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
}
export default QuoteDetail;