const asyncHandler = (requestHandler)=>{
    (req, res , next)=>{
        Promise.resolve(requestHandler(req, res, next)).catch((err)=>next(err))
    }

}

export{asyncHandler}

// const asyncHandler = (requestHandler) => {
//     return (req, res, next) => {
//         try {
//             // Await the requestHandler to complete
//             requestHandler(req, res, next);
//         } catch (err) {
//             // Pass the error to the next middleware
//             next(err);
//         }
//     };
// };

// export { asyncHandler };

