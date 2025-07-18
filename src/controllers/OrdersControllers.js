const OrderModel = require('../models/OrderModel');
exports.InsertOrder = async (req, res) => {
  try {
    const reqBody = req.body;
    const data = await OrderModel.create(reqBody);
    res.status(201).json({ status: "Success", data: data });
  } catch (error) {
    res.status(500).json({ status: "Fail", data: error.message });
  }
};

exports.ReadOrder = async( req, res ) => {
  try {
    let query = {};
    let projection = "userId items status";

    const data = await OrderModel.find(query, projection);
    res.status(400).json({ status: "Success", data: data });
  } catch(err) {
    res.status(201).json({ status: "Fail", data: err.message });
  }
}
