const express = require('express');
const router = express.Router();
const {visitRepository} = require('../models/visit');

/* GET visits listing. */
router.get('/', function(req, res, next) {
  const visitDate = new Date(req.query.date)
  const visitsByDate = visitRepository.findByDate(visitDate)
  res.json(visitsByDate);
});

router.post('/', function(req, res, next) {
  const visit = req.body
  visit.date = new Date(visit.date)
  const result = visitRepository.add(visit)
  res.json(result);
});

module.exports = router;
