
const getUnarchivedStories = ({storyState, archiveState}) =>
storyState.stories.filter((story) => !archiveState.includes(story.objectID));

const getFetchStoriesError = ({storyState}) =>   storyState.error


export  {getUnarchivedStories, getFetchStoriesError};
