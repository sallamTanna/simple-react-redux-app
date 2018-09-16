import React from 'react';
import './Story.css';
import ButtonInline from './Button';
import {connect} from 'react-redux';
import doArchiveStory from '../actions/archive'

const Story = ({story, columns, onArchive}) => {
const {title,
url,
author,
num_comments,
objectID,
points,} = story;

return (<div className='story'>
<span><a href={url} style={{ width: columns.title.width }}>Click me</a></span>
<span style={{ width: columns.author.width }}>Author: {author}</span>
<span style={{ width: columns.points.width }}>Points: {points}</span>
<span style={{ width: columns.comments.width }}>comments: {num_comments}</span>
<span style={{ width: columns.archive.width }}>archive</span>
<ButtonInline  onClick={()=>onArchive(objectID)}>Archive btn</ButtonInline>
  </div>)
}

const mapDispatchToPropsStory = (dispatch) => ({onArchive:(id)=>dispatch(doArchiveStory(id))});
const ConnectedStort = connect(null, mapDispatchToPropsStory)(Story);




export default ConnectedStort;
