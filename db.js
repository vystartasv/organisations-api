const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/organisations', { useNewUrlParser: true, useFindAndModify: false });
