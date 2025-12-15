 class CustomError extends Error{
    constructor(statusCode, message, description){
        super(message);
        this.statusCode = statusCode;
        this.description = description;
    }

 }
 export {CustomError};