const express=require('express')
const dotenv=require('dotenv')
const colors=require('colors')
const path=require('path')

// enviroment setup

dotenv.config()
const PORT=process.env.PORT ||4040;

// inite express

    const app=express();



    // Static Folder
    app.use('/public',express.static('public'))

    // Routing 

    app.get('/',(req,res)=>{

        res.sendFile(path.join(__dirname,'/public/index.html'))

    })
    // Routing 

    app.get('/menu',(req,res)=>{

        res.sendFile(path.join(__dirname,'/public/menu.html'))

    })
    // Routing 

    app.get('/staff',(req,res)=>{

        res.sendFile(path.join(__dirname,'/public/staff.html'))

    })
    // Routing 

    app.get('/blog',(req,res)=>{

        res.sendFile(path.join(__dirname,'/public/archive.html'))

    })
    // Routing 

    app.get('/gallery',(req,res)=>{

        res.sendFile(path.join(__dirname,'/public/gallery.html'))

    })
    // Routing 

    app.get('/location',(req,res)=>{

        res.sendFile(path.join(__dirname,'/public/location.html'))

    })
    // Routing 

    app.get('/news',(req,res)=>{

        res.sendFile(path.join(__dirname,'/public/news.html'))

    })
    // Routing 

    app.get('/rev',(req,res)=>{

        res.sendFile(path.join(__dirname,'/public/reservation.html'))

    })

  

    // server listen
    app.listen(PORT,()=>{
        console.log('server is running on port 5050'.bgGreen.black);
    })
