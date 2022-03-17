import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Comments from '../components/comments/Comments.js';
import HighlightedQuote from "../components/quotes/HighlightedQuote.js";
import LoadingSpinner from '../components/UI/LoadingSpinner.js';//import classes from '../components/quotes/QuoteItem.module.css';
import useHttp from "../hooks/use-http.js";
import { getSingleQuote } from "../lib/api.js";

const QuoteDetail = () =>
{
    const match  = useRouteMatch();
    const params = useParams();
    const { quoteId } = params;
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(()=>{
        sendRequest(quoteId);
    }, [sendRequest, quoteId])

    //const quote = loadedQuote.find(quote => quote.id === params.quoteId);

    if(status==='pending'){
        return <div className="centered">
            <LoadingSpinner></LoadingSpinner>
        </div>
    }
  
    if(status==='error'){
        return <p className="centered">
            {error}
        </p>
    }


    if(!loadedQuote.text){
        return <p>No Quote found!</p>;
    }

    

    if(!loadedQuote)
    {
      return <h1>No Quote Found!</h1>
    }
    return <Fragment>
    <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
    <Route path={match.path}>
    <div className="centered">
            <Link to={`/quotes/${params.quoteId}/comments`} className='btn--flat' >
                Load Comments
            </Link>
    </div>
    </Route>
    
    
    <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
}
export default QuoteDetail;