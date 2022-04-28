module.exports = {
    createValidation: {
        fname : {
            isLength: {
                options: { min:3 },
                errorMessage: 'First name Should be atleast 3 character long.'
            },

        },
        lname : {
            isLength: {
                options: { min:3 },
                errorMessage: 'Last name should be atleast 3 character long.'
            },
                
        },
        address : {
            isAlphanumeric: false,
            isLength: {
                options: { min:3, max: 25 },
                errorMessage: 'Address should be atleast of 3 character.'
            },

        },

        salary : {
            isNumeric: {
                options: { min:0, max: 999999 },
                errorMessage: 'Sal'
            },
           
            notEmpty: true,
            errorMessage: 'Salary cannot be empty.',
        },


        email : {
            isEmail: true,
            isLength: {
                options: { min:2},
                errorMessage: 'Email should be at least 13 chars long.'
            },

        }
    },

    findOneValidation: {
        id: {
            // The location of the field, can be one or more of body, cookies, headers, params or query.
            // If omitted, all request locations will be checked
            in: ['params', 'query'],
            errorMessage: 'ID is wrong',
            isInt: true,
            // Sanitizers can go here as well
            toInt: true,
        }
    }
};



// 'use-strict';
// module.exports = {
//     createValidation: {
//         fname: {
//             isLength: {
//                 options: { min: 3 },
//                 errorMessage: 'Name should be at least 3 chars long',
//             },


//             lname: {
//                 isLength: {
//                     options: { min: 3 },
//                     errorMessage: 'Name should be at least 3 chars long',
//                 },
//         },
//         email: {
//             isEmail: true,
//             isLength: {
//                 options: { min: 3 },
//                 errorMessage: 'Email should be at least 3 chars long',
//             },
//         },
      
//     },

   
// }
// }