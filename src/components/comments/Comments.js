import { useState, useEffect, useCallback } from 'react';
import { useParams,} from 'react-router-dom';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from '../comments/CommentsList.js';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const[toggle, setToggle] = useState(true);

  const params = useParams();

  const {quoteId}  = params
  
  const {sendRequest, status, data: loadedComments } = useHttp(getAllComments);
  
  useEffect(()=> {
    sendRequest(quoteId);
  }, [sendRequest,quoteId])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
 
  };
  
  const addedCommentHandler = useCallback(async() => {
    await sendRequest(quoteId);
    setToggle(false);
  },[sendRequest,quoteId])

  let comments;
  if(status === 'pending'){
    comments = <div className='centered'><LoadingSpinner/></div>
  }
  if(status === 'completed')
  {
    comments = <CommentsList comments={loadedComments}></CommentsList>
  }

  if(status === 'completed' && (!loadedComments || loadedComments.length === 0)){
    comments = <p className='centered'>No Comments added yet!</p>
  }

  return (
    <section className={classes.comments}>
      {!isAddingComment && (

        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
       {toggle && isAddingComment && <NewCommentForm quoteId={params.quoteId} onAddedComment={addedCommentHandler}/>}
      
      <h2>User Comments</h2>
     
      {comments}
    </section>
  );
};

export default Comments;
