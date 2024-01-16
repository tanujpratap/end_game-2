jab bhi aap kisi ejs page ko dekhenge waha par aapko kisi prakar ka koi information dena hai,wo kehlata h flash messages ,they are more like good looking alerts,warning and descryption

steps to generate flash messages
1- install connect flash
2- make sure you put connect flash in a app.use function
3- kisi bhi route m aap ko flash create krna h 
kisi bhi doosre route par app use chlane ka try krein
4-app connect flash ko use nhi kr skte bina express session ke


hum chahte h ki jb hm kisi route pr jaye jaise ki /failed us route pr ek flash message bne or bo flash message hum logo ko /route pr dikh eejs me

flash message ka mtlb server ke kisi route mein koi data bnana and us data ko doosre route m use kr pana
agar login ho jaye to login page ke baad profile page dikhado 
agar na ho to fir mujhe is route se kisi aur route le jao jaise ki /error and waha par dikhao failed

flash message aapko ye allow krte h ki aap is route m bane huye data ko doosre route m use kr skte ho


intermediate mongodb
q1-how can i perform case insensitive search in mongodb?
 router.get('/find',async function (req,res){
  // new regex(search,flags);
   var regex=new RegExp("^Harsh$",'i');
   let user=await userModel.find({username:regex});
   res.send(user);
 });
new regEx("harsh","i");
i -insensitive
^harsh=>shuruaat esi ho aant esa ho
$harsh=>ant esa ho


q2-how do i find documents with a specific date range in mongoose?
router.get('/find', async function(req,res){
  // var date=new Date('yyyy-mm-dd');
  var date1=new Date('2024-01-08');
  var date2=new Date('2024-01-09');
  let user=await userModel.find({datecreated:{$gte:date1,$lte:date2}});
  res.send(user);
});

q3-how do i find documents where an array field contains all of a set of values?
router.get('/find',async function (req,res){
   let user=await userModel.find({categories:{
    $all:["react"]
   }});
   res.send(user);
 });


q4- how can i filter documents based on the existence of a field in mongoose?
router.get('/find', async function(req,res){
 let user=await userModel.find({categories:{$exists:true}});
 res.send(user);
 
}); 
 q5-how can i filter documents based on specific fields length in mongoose?
 expressions-expressions is used to handle complex scenario in mongodb.
 router.get('/find', async function(req,res){
  let user=await userModel.find({
    $expr:{
      $and:[
        {
          $gte:[{$strLenCP:'$nickname'},0]
        },
        {
          $lte:[
            {
              $strLenCP:"$nickname"
            },12
          ]
        }
      ]
    }
  });  


  authentication and autherization
  install these packages:
  npm i passport passport-local  passport-local-mongoose mongoose express-session


  write app.js code  first in app.js file  and write it after view engine and before logger
  setup user.js then properly
  in index.js try register first and then other code as well