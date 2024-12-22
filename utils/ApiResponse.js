class ApiResponse{
    constructor(
        message="Success",
        statusCode,
        data
    ){
     
        this.statusCode=statusCode
        this.message=message
        this.success=statusCode
        this.data=data

     

    }
}
export default ApiResponse