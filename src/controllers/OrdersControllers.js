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
