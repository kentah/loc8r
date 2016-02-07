/* GET home page */

module.exports.about = function(req,res){
  res.render('generic-text', {
    title: 'About',
    content: ' Loc8r was created to help people find places to sit down and get a bit of work done. \n\nAdipiscing hac vestibulum lacinia enim sit purus consectetur in faucibus praesent nec vestibulum nulla semper nunc a ac adipiscing facilisi a elementum parturient. Natoque fringilla quam phasellus ut vel congue aenean feugiat suscipit ad semper curabitur nullam sed inceptos parturient ultricies adipiscing malesuada feugiat egestas pretium risus sem a montes odio. Sed purus cursus vel erat duis eleifend mi volutpat ac vestibulum curae at purus nibh vestibulum ut. Aptent vestibulum ullamcorper parturient quisque hendrerit id dapibus class per augue fringilla placerat fermentum mi facilisi phasellus. Ad ad cum volutpat ullamcorper fermentum vivamus curae fermentum facilisis varius nam condimentum lacus eu vel. Dis neque elementum integer pretium malesuada consequat at quisque sagittis sed a erat euismod mauris ut himenaeos erat tempor convallis dui vestibulum luctus. Scelerisque ipsum suspendisse parturient conubia dis mauris vestibulum integer vestibulum facilisi donec est conubia non per fermentum velit blandit nisi consectetur.'
  });
};