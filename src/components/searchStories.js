import React from 'react';
import {connect} from 'react-redux';
import {doFetchStories} from '../actions/story';
const applyQueryState = query => () => ({query});


class SerachStories extends React.Component{
  constructor(props){
    super(props);
    this.state = {query:''}
    this.onChange=this.onChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }

onChange(e){this.setState(applyQueryState(e.target.value))}
onSubmit(e){
  const {query} = this.state;
  if(query){
    this.props.dispatchNewFetch(query);
    this.setState(applyQueryState(''))
  }
  e.preventDefault();
}

  render(){return <form onSubmit={this.onSubmit}>
      <input type='text' value={this.state.query} onChange={this.onChange} />
      <button type="submit">Search Now</button>
    </form>}
}


const mapStateToDispatch  = (dispatch)=> ({dispatchNewFetch: (query)=>dispatch(doFetchStories(query))})
const ConnectedSearchStories = connect(null, mapStateToDispatch)(SerachStories);



export default ConnectedSearchStories;
