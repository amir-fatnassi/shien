const Product = require("./../models/productModel");
const CatchAsync = require("../utile/CatchAsync");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/data/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.parse(new Date()) + "--" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});

exports.test = upload.single("photo");

exports.createProduct = CatchAsync(async (req, res, next) => {
  const pth = req.file.path.split("\\").join("/");

  const newProduct = await Product.create({
    ...req.body,
    imageProduct: pth,
  });

  res.status(200).json({
    status: "success",
    data: {
      product: newProduct,
    },
  });
});

exports.getAllProduct = CatchAsync(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    status: "success",
    dataSize: products.length,
    data: {
      products
    }
  });
});

exports.getProduct = CatchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.updatProduct = CatchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.deleteProduct = CatchAsync(async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    message: "deleted",
  });
});
