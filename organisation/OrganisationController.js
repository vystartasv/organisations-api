const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const Organisation = require('./Organisation');

router.post('/', (req, res) => {
  Organisation.create({
    name: req.body.name,
    year: req.body.year,
    revenue: req.body.revenue,
  },
  (err, organisation) => {
    if (err) return res.status(500).send(`There was a problem adding the information to the database.${err}`);
    res.status(201).json(organisation);
    res.end();
  });
});

router.get('/', (req, res) => {
  Organisation.find({}, (err, organisation) => {
    if (err) return res.status(500).send(`There was a problem finding the organisation.${err}`);
    res.status(200).json(organisation);
    res.end();
  });
});

router.get('/:name', (req, res) => {
  Organisation.findOne({ name: req.params.name }, (err, organisation) => {
    if (err) return res.status(500).send(`There was a problem finding the organisation.${err}`);
    if (!organisation) return res.status(404).send('No organisation found.');
    res.status(200).json(organisation);
  });
});

router.delete('/:name', (req, res) => {
  Organisation.findOneAndRemove({ name: req.params.name }, (err, organisation) => {
    if (err) return res.status(500).send(`There was a problem deleting the organisation.${err}`);
    res.status(200).send(`Organisation: ${organisation.name} was deleted.`);
    res.end();
  });
});

router.put('/:name', (req, res) => {
  Organisation.findOneAndUpdate(
    { name: req.params.name },
    req.body,
    { new: true, upsert: false },
    (err, organisation) => {
      if (err) return res.status(500).send(`There was a problem updating the organisation.${err}`);
      res.status(200).json(organisation);
      res.end();
    },
  );
});


module.exports = router;
