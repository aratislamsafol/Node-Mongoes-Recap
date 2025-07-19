const OrderModel = require('../models/OrderModel');
// create
exports.InsertOrder = async (req, res) => {
  try {
    const reqBody = req.body;

    const data = await OrderModel.create(reqBody);
    res.status(201).json({ status: "Success", data: data });
  } catch (error) {
    res.status(500).json({ status: "Fail", data: error.message });
  }
};

// read
exports.ReadOrder = async( req, res ) => {
  try {
    let query = {};
    let projection = "userId items ";

    const data = await OrderModel.find(query, projection);
    res.status(400).json({ status: "Success", data: data });
  } catch(err) {
    res.status(201).json({ status: "Fail", data: err.message });
  }
}

// update
exports.updateOrder = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let reqBody = req.body;

    const data = await OrderModel.updateOne(query, { $set: reqBody });
    res.status(200).json({ status: "Success", data: data });
  } catch (error) {
    res.status(500).json({ status: "Fail", data: error.message });
  }
};

// delete
exports.removeOrder = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };

    const data = await OrderModel.deleteOne(query);

    res.status(200).json({ status: "Success", data: data });
  } catch (error) {
    res.status(500).json({ status: "Fail", data: error.message });
  }
};



