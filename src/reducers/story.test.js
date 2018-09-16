import deepFreeze from 'deep-freeze';
import storyReducer from './story';
import {STORIES_ADD} from '../constants/actionTypes'
import {getUnarchivedStories} from '../selectors/story'
import {doAddStories} from '../actions/story'

describe('First Test:', ()=>{
  it("This is the first test for StoryReducer", ()=>{
    const initialState = {stories:[], error:null};
    const stories =['A', 'B'];
    const action = {type:STORIES_ADD, stories};
    const StateFormReducer = storyReducer(initialState, action);
    expect({stories:['A', 'B'], error:null}).toEqual(StateFormReducer);;
  })
})

describe('Second test:', ()=>{
  it('This is the second test for getUnarchivedStories selector', ()=>{
    const storyState={stories:[{objectID:'1',title:'obj1'}, {objectID:'2',title:'obj2'} ], error:null};
    const archiveState=['1'];
    const allStates = {storyState, archiveState}
    const selectorResults = getUnarchivedStories(allStates);
    expect([{objectID:'2',title:'obj2'}]).toEqual(selectorResults)
  })
})

describe('Third test:', ()=>{
  it('This is the third test for doAddStories actionCreator', ()=>{
    const stories = {stories:['A'], error:null}
    const actionCreatorResult = doAddStories(stories);
    expect({type:STORIES_ADD, stories}).toEqual(actionCreatorResult)
  })
})
