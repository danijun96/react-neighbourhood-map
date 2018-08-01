const foursquareUrl = 'https://api.foursquare.com/v2/venues/search?near=';
  const CLIENT_ID = 'ABGZ0YRCNYBWM213JZ2OKFPX53FSHJRHHRUOZ0C3HYANVS4X';
  const CLIENT_SECRET = 'O152FFXMY5MJV3GGU0TBCGRBARPHOQHGOONFGBXQPBA2AWTL&v=20180715';
  const CATEGORY_ID = '4bf58dd8d48988d181941735'

  export const search = (location, info) =>
  	  fetch(`${foursquareUrl}${location}&query=${info}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&categoryId=${CATEGORY_ID}`)
  	  .then(res => res.json())
  	  .then(data => data.response.venues)
  	  .catch(err => {
  	    console.log(err, 'Can not load the venues ...');
        window.alert('Can not load the venues ...');
  	  })
