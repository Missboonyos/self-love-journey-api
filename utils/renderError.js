const renderError = (code, message) => {
    //code body
    const error = new Error(message) 
    // new Error is class
    // new Error(message) is an instance of Error class, message is the message of the error
    // const error created an object of Error class
    error.statusCode = code
    // error.statusCode = code is setting the status code of the error
    // create new property statusCode in error object

    throw error 
}

module.exports = renderError