const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';

function makeTheFetch(query){
return fetch(HN_BASE_URL+query)
.then((res)=>res.json())
}

export default makeTheFetch;
