
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
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

const AllQuotes = () =>
{
    return <QuoteList quotes={DUMMY_QUOTES}>

    </QuoteList>
}
export default AllQuotes;