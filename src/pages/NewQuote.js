import QuoteForm from '../components/quotes/QuoteForm';
import { Fragment } from 'react/cjs/react.production.min';
import { useHistory } from 'react-router-dom';
const NewQuote = () =>
{
    const history = useHistory();
    const addQuoteHandler = (quoteData) => {
        
        console.log(quoteData);
        history.push('/quotes');


    };
    return <Fragment>
        <QuoteForm onAddQuote={addQuoteHandler}>

    </QuoteForm>
        </Fragment>
};
export default NewQuote;