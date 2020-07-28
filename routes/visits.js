const express = require('express');
const router = express.Router();
const {visitRepository} = require('../models/visit');

/* GET visits listing. */
router.get('/', function(req, res, next) {
  const visitDate = new Date(req.query.date)
  const visitsByDate = visitRepository.findByDate(visitDate)
  res.json(visitsByDate);
});

module.exports = router;
