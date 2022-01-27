const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect('mongodb://localhost/your database')
        console.log('Connected to database success');
    } catch (error) {
        console.log(error)
        console.log('Could not connect to database ',error);
    }
}