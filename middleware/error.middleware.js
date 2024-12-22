import ApiError from "../utils/ApiError.js";
const errorMiddleware=(err,req,res,next)=>{
    if(err instanceof ApiError){
        return res.status(err.statusCode).json({
            success:false,
            message:err.message,
            errors:err.errors,
            stack:err.stack
        })
    }

    res.status(500).json({
        success:false,
        message:"Internal server error",
        stack:err.stack
    })
}

export default errorMiddleware