import  {STORY_ARCHIVE} from '../constants/actionTypes';
const INIIAL_STATE = [];

const archiveReducer = (state=INIIAL_STATE, action) =>{
  switch(action.type){
    case STORY_ARCHIVE: return applyArchiveStory(state, action)
    default: return state;
  }
}

const applyArchiveStory = (state, action) => [...state, action.id]

export default archiveReducer;
