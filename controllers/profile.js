const renderError = require("../utils/renderError");

exports.createProfile = (req, res, next) => {
    try {
        // code body
        if (true) {
            return renderError(401, "Token expired");
        }

        console.log(asdf)
        console.log('Hello createProfile');
        res.json({ message: 'Profile created successfully' });
    } catch (error) {
        console.log(error.message);
        // // Handle error
        // throw new Error();
        // res.status(500).json({ message: 'Server error' });
        next(error);
    }
}