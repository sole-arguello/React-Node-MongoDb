// import { EErrors } from "../service/errors/enums"

// export const errorHandler = (error, req, res, next) => {

//     switch(error.code){
//         case EErrors.ROUTING_ERROR:
//             res.status(404).json({message: error.message, error: error.cause });
//             break;
//         case EErrors.INVALID_TYPES_ERROR:
//             res.status(400).json({message: error.message, error: error.cause });
//             break;
//         case EErrors.DATABASE_ERROR:
//             res.status(500).json({message: error.message, error: error.cause });
//             break;
//         default:
//             res.status(500).json({message: error.message, error: "Unhandled error" });
//             break;
//     }
// }