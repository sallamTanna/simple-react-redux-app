import {STORIES_ADD, STORIES_FETCH_ERROR} from '../constants/actionTypes'
const INITIAL_STATE = {
  stories:[],
  error:null
};

const storyReducer = (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case STORIES_ADD: return applyAddStories(state, action);
    case STORIES_FETCH_ERROR: return applyAddStoriesError(state, action);
    default:return state;
  }
}

const applyAddStories = (state, action)=> ({stories:action.stories, error:null})
const applyAddStoriesError = (state, action) => ({stories:[], error:action.error})

export default storyReducer;
