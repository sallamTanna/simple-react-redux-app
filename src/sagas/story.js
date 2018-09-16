import { call, put} from 'redux-saga/effects';
import {doAddStories, doFetchStoriesError} from '../actions/story'
import makeTheFetch from '../api/story'




function* handleFetchStories(action){
  const {query}  = action;
  try{
    const results = yield call(makeTheFetch, query)
    yield put (doAddStories(results.hits))
  }
  catch(error){
    yield put (doFetchStoriesError(error));
  }
}

export default handleFetchStories;
