/*global  */
/* GET 'home' page */
module.exports.homelist = function(req,res){
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'},
      sidebar: 'Looking for wifi and a seat? Loc8r helps you find placesto work when out and about.'
               + 'Perhaps with coffee, cake, or a pint? Let loc8r help you find the place'
               + 'you are looking for.',  
    locations: [
      {
        name: 'Starcups',
        address: '125 High Street, Reading, RG6, IPS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '100m'
      },
      {
        name: 'Cafe Hero',
        address: '125 High Street, Reading, RG6, IPS',
        rating: 4,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '200m'
      },
      {
        name: 'Burger Queen',
        address: '125 High Street, Reading, RG6, IPS',
        rating: 2,
        facilities: ['Food', 'Premium wifi'],
        distance: '250m'
      }]
  });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req,res){
  res.render('location-info', {title: 'Location info'});
};

/* GET 'Add review' page */
module.exports.addReview = function(req,res){
  res.render('location-review-form', {title: 'Add review'});
};