class ApiError extends Error{
    constructor(
        message="Soemthing went wrong",
        statusCode,
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.errors=errors
        this.success=false
        this.data=null

        if(stack)
            this.stack=stack
        else
            Error.captureStackTrace(this,this.constructor)


    }
}
export default ApiError