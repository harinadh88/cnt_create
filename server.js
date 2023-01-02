const expresss = require("express")
const app = expresss()
const {exec}= require("child_process")



app.get("/ps",(req,resp) => {

      exec("docker ps -a " , (err , stdout , stderr ) => {

        resp.write("<pre> "+ stdout+ "</pre>");

      })
}  )


app.get("/createimage",(req,resp) => {

        //this is for the input qury string
        //          let cmd = req.query.n1;

      //  let cmd = req.query.cmdinp;

         let cname = req.query.cntname;
         let iname = req.query.imgname;
           exec("docker run -dit --name" + "  " + cname + "  "  + iname ,(err,stdout,stderr) =>{


             resp.write("<pre>" + stdout + "</pre>");


          console.log(stdout)});

})

//for the purpose of the live prompting


app.get("/prompt" , (req,resp) =>
        {
             let cmd = req.query.commmand;
             exec( cmd  , (  err ,stdout , stderr ) => {     console.log("<pre>"+ stdout +"</pre>") ;   })

            resp.write("hello hari nadh ")      ;

            resp.sendFile(__dirname + "/liveprompt.html");
          })


app.get("/home" , (req,resp) =>{

//         resp.sendFile(__dirname + "/homeform.html");
          resp.sendFile(__dirname + "/cntcreate.html");
           console.log("this for the form to select the commands...."); })



const port = 46462;
app.listen(port,(resp) => {console.log("server started..........");})

