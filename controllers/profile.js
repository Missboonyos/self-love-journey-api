exports.createProfile = (req, res) => {
    try {
        // code body
        console.log('Hello createProfile');
        res.json({ message: 'Profile created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}