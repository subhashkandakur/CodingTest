const productModel = require("../models/products");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = require("mongodb");

exports.createProduct = async (data) => {
  return await productModel.create(data);
};

exports.createTagging = async (Id, data) => {
  console.log(Id, data);
  return await productModel
    .findOneAndUpdate(
      { productId: Id },
      { $push: { tagging: data } },
      { new: true }
    )
    .exec();
};

exports.removeTagging = async (Id, data) => {
  console.log(Id, data);
  const result = await productModel
    .updateMany(
      { productId: Id },
      { $pull: { tagging: { year: { $gt: data.year } } } },
      { new: true }
    )
    .exec();
  let updatedProduct;
  if (result.modifiedCount > 0) {
    updatedProduct = await productModel.find({ productId: Id });
  } else {
    updatedProduct = result;
  }
  return updatedProduct;
};

exports.countTagSpecial = async (Id, data) => {
  console.log();
  const result = await productModel.aggregate([
    {
      $match: {
        tagSpecial: { $eq: true },
      },
    },
    {
      $group: {
        _id: null,
        countTagSpecial: { $sum: 1 },
        maxRating: { $max: "$rating" },
      },
    },
    {
      $project: {
        _id: 0,
        countTagSpecial: 1,
        maxRating: 1,
      },
    },
  ]);

  console.log(result);
  return result;
};
