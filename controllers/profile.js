exports.createProfile = (req, res) => {
    try {
        // code body
        console.log(asdf)
        console.log('Hello createProfile');
        res.json({ message: 'Profile created successfully' });
    } catch (error) {
        console.log(error);
        // Handle error
        throw new Error();
        res.status(500).json({ message: 'Server error' });
    }
}