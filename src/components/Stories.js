import React from 'react';
import './Stories.css';
import Story from './Story';
import StoriesHeader from './StoriesHeader';
import doArchiveStory from '../actions/archive'
import { connect} from 'react-redux';
import {getUnarchivedStories, getFetchStoriesError} from '../selectors/story'
import store from '../store';
import ConnectedStort from './Story';

const COLUMNS = {
title: {
label: 'Title',
width: '40%',
},
author: {
label: 'Author',
width: '30%',
},
comments: {
label: 'Comments',
width: '10%',
},points: {
label: 'Points',
width: '10%',
},
archive: {
width: '10%',
},
};


const Stories = ({stories, error}) => <div className='stories'>
<StoriesHeader columns={COLUMNS} />
{console.log('rrrrrrrrrrrrrrrrrrrrrrrr', error)}
 { error && <p className="error">Something went wrong ...</p> }
{(stories||[]).map((item)=> <ConnectedStort key={item.objectID} story={item} columns={COLUMNS}/>)}
</div>

const mapStateTopropsStories = (state)=> ({stories: getUnarchivedStories(state), error:getFetchStoriesError(state)});
const ConnectedStories = connect(mapStateTopropsStories)(Stories);
export default ConnectedStories;
