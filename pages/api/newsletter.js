function handler(req,res){
    if(req.method==='POST')
    {
        const email=req.body.email;
        console.log(email)
        res.status(201).json({message:'Signed Up!'})
    }
}

export default handler;