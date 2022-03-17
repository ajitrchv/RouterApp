import QuoteForm from '../components/quotes/QuoteForm';
import { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http.js';
import { addQuote } from '../lib/api';
const NewQuote = () =>
{
    const {sendRequest, status} = useHttp(addQuote);
    const history = useHistory();

    useEffect(()=>{
        //console.log('inside useEffect of sending data')
        if(status === 'completed'){
            history.push('/quotes');
        }
    },[status, history])

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    };
    return <Fragment>
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}>

    </QuoteForm>
        </Fragment>
};
export default NewQuote;