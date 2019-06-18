const express = require('express');

const app = express();
const db = require('./db');

const OrganisationController = require('./organisation/OrganisationController');

app.use('/organisation', OrganisationController);

module.exports = app;
