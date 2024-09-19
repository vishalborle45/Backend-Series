class apiResponse {
    constructor(statusCode, data , message = "success"){
        this.statusCode= statusCode
        this.data= data
        this.message = message
        this.success = statusCode < 400
    }
}

class apiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
        stack = ""  // Corrected 'statck' to 'stack'
    ) {
        // Call the parent class (Error) constructor with the message
        super(message);
        
        // Set the additional properties for the API error
        this.statusCode = statusCode;
        this.data = null;             // Optional: Can be used to attach extra data to the error
        this.message = message;       // Message describing the error
        this.success = false;         // API request success state
        this.errors = errors;         // Array of specific errors (e.g., validation errors)
        
        // If a custom stack trace is provided, use it; otherwise, capture the default stack trace
        if (stack) {
            this.stack = stack;
        } else {
            // Use the correct reference to the constructor function
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { apiError };
export {apiResponse}