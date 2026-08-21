const requests={};

function rateLimmiter(req,res,next){
    const ip=req.ip;
    
    if(!requests[ip]){
        requests[ip]=1;
    }else{
        requests[ip]++
    }

    if(requests[ip]>5){
        return res.status(429).json({
            message:"Too many request"
        })
    }
    next();
}

module.exports=rateLimmiter