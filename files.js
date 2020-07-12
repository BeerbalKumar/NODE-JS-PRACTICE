const fs = require('fs');


//read files
// fs.readFile('./file.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

//write files
// fs.writeFile("./file.txt","hello beerbal",()=>{
//   console.log("file was written");
// })

// fs.writeFile("./file1.txt","hello khatumal",()=>{
//     console.log("file was written");
//   })


// make folders
// if(!fs.existsSync("./routes")){
//     fs.mkdir('./routes',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("folder has created")
//     })
// }
// else{
//     fs.rmdir("./routes",(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("folder has deleted")
//     })
// }

//delete files

if(fs.existsSync("./file.txt")){
    fs.unlink("./file.txt",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("file has deleted")
    })
}