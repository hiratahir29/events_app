export default function handler(req,res)
{
    if(req.method==="POST")
    {
        const {name, email, text} = req.body.commentObj;
        const newComment={
            id:new Date().toISOString(),
            name,
            email,
            text
        }
        res.status(200).json({message:"added new comment",comment:newComment});
    }
    else {
       const dummy_arr=[
        {id:1,name:'umer',comment:'good post'},
        {id:2,name:'ali',comment:'not good post'},
        {id:3,name:'hassan',comment:'ok good post'}
       ]
       res.status(200).json({arr:dummy_arr})
    }
}