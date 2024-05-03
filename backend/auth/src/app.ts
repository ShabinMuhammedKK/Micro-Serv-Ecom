import express from 'express'



const start = ()=>{
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}))

    app.get('/',(req,res)=>{
        res.send('hello')
    })
    
    app.listen(3000,()=>{console.log(`Server running on post 3000 !`)});
    return app;

}

export default start;