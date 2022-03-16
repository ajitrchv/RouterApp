import QuoteForm from '../components/quotes/QuoteForm';
import { Fragment } from 'react/cjs/react.production.min';
const NewQuote = () =>
{
    
    const addQuoteHandler = (quoteData) => {
        
        console.log(quoteData);

    };
    return <Fragment>
        <QuoteForm onAddQuote={addQuoteHandler}>

    </QuoteForm>
        </Fragment>
};
export default NewQuote;