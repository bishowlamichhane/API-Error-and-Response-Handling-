import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const getUser=(req,res,next)=>{
    //User fetching logic
    try{

        const user={id:1,name:"Bishow Lamichhane"};
        if(!user){
            throw new ApiError("User not found",400)
        }

        const response= new ApiResponse("User fetched Successfully",200,user)
        res.status(200).json(response)



    }catch(error){
        next(error)
    }
};


export const createUser = (req,res,next)=>{
    try{

        const {name}=req.body;
        if(!name){
            throw new ApiError("Name is required",400,["name","field is missing"])
        }


        //Logic to show user creation
        const newUser={id:2,name}

        const response = new ApiResponse("User created Successfully",200,newUser)
        res.status(201).json(response)
        

    }catch(error){
        next(error)
    }
}