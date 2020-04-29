const express = require('express');
const prodRouter = express.Router();
const Produce = require('../models/produce.js');

//Get all
prodRouter.get('/', (req, res, next) => {
	Produce.find((err, produce) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(200).send(produce);
	});
});

//Post
prodRouter.post('/', (req, res, next) => {
	const newProd = new Produce(req.body);
	newProd.save((err, saveProd) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(201).send(saveProd);
	});
});

// Delete
prodRouter.delete('/:produceId', (req, res) => {
	Produce.findOneAndDelete(
		{ _id: req.params.produceId },
		(err, deletedItem) => {
			if (err) {
				res.status(500);
				return next(err);
			}
			return res
				.status(200)
				.send(
					`Successfully deleted item ${deletedItem.item} from the database`
				);
		}
	);
});

// Update
prodRouter.put('/:produceId', (req, res, next) => {
	Produce.findOneAndUpdate(
		{ _id: req.params.produceId },
		req.body,
		{ new: true },
		(err, updatedProduce) => {
			if (err) {
				res.status(500);
				return next(err);
			}
			return res.status(201).send(updatedProduce);
		}
	);
});

module.exports = prodRouter;
