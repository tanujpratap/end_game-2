var express = require('express');
var router = express.Router();
const userModel=require("./users");
const passport=require('passport');
const localStrategy =require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));
/* GET home page. */
router.get('/', function(req, res) {
  res.render('profile');
});
router.get('/create', async function(req, res) {
 let userdata= await userModel.create(
    {
      username:"harshta",
      nickname:"harshi",
      descryption:"a girl ",
  
  categories:["cute","fashion","dancer","singer"]
}
    
  )
  res.send(userdata);
  
});
// router.get('/find',async function (req,res){
//  // new regex(search,flags);
//   var regex=new RegExp("^Harsh$",'i');
//   let user=await userModel.find({username:regex});
//   res.send(user);
// });
// router.get('/find',async function (req,res){
//    let user=await userModel.find({categories:{
//     $all:["react"]
//    }});
//    res.send(user);
//  });
// router.get('/find', async function(req,res){
//   // var date=new Date('yyyy-mm-dd');
//   var date1=new Date('2024-01-08');
//   var date2=new Date('2024-01-09');
//   let user=await userModel.find({datecreated:{$gte:date1,$lte:date2}});
//   res.send(user);
// });
// router.get('/find', async function(req,res){
//  let user=await userModel.find({categories:{$exists:true}});
//  res.send(user);
 
// });
// router.get('/find', async function(req,res){
//   let user=await userModel.find({
//     $expr:{
//       $and:[
//         {
//           $gte:[{$strLenCP:'$nickname'},0]
//         },
//         {
//           $lte:[
//             {
//               $strLenCP:"$nickname"
//             },12
//           ]
//         }
//       ]
//     }
//   });
//   res.send(user);
  
//  });
// router.get('/failed', function(req, res) {
//   req.flash("age",12);
//   req.flash("name","harsh");
//   res.send("bngya");
  
// });

// router.get('/checkkro', function(req, res) {
//   console.log(req.flash("age"),req.flash("name"));
//   res.send("check krlo backend ke terminal pe");
  
// });
router.get('/profile',isLoggedIn, function(req, res) {
  res.render('profile');
});
router.post('/register',function(req,res){
  var userdata=new userModel({
    username:req.body.username,
    secret:req.body.secret
  });

  userModel.register(
    userdata,req.body.password
  ).then(function(registereduser){
    passport.authenticate("local")(req,res,function(){
      res.redirect('/profile');
    })
  })
});
router.post("/login",passport.authenticate("local",{
  successRedirect:"/profile",
  failureRedirect:"/"
}),function(req,res){

})
router.get("/logout",function(req,res,next){
  req.logout(function(err){
    if(err){
      return next(err);
    }
    res.redirect('/');
  });
});
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}
module.exports = router;
