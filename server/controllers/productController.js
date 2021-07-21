
const CatchAsync = require("../utile/CatchAsync");

const multer = require("multer");
const sharp = require('sharp');


const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadTourImages = upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'images', maxCount: 4 }
]);

exports.resizeTourImages = CatchAsync(async (req, res, next) => {

  if (!req.files.photo || !req.files.images) return next();

  // 1) Cover image
  req.body.imageProduct = `product-${Date.parse(new Date())}-imageProduct.jpeg`;
  await sharp(req.files.photo[0].buffer)
    .resize(1000, 1233)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/data/uploads/${req.body.imageProduct}`);

  // 2) Images
  req.body.images = [];

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `product-${Date.parse(new Date())}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/data/uploads/${filename}`);

      req.body.images.push(filename);
    })
  );

  next()
})


// const storage = multer.diskStorage({       
//   destination: (req, file, cb) => {
//     cb(null, "public/data/uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.parse(new Date()) + "--" + file.originalname);
//   },
// });
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image")) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
//   fileFilter,
// });
// exports.test = upload.single("photo");




exports.createProduct = (Model)=> CatchAsync(async (req, res, next) => {
  // const pth = req.file.path.split("\\").join("/");
  const newProduct = await Model.create({
    ...req.body
  });

  res.status(200).json({ 
    status: "success",
    data: {
      product: newProduct,
    },
  });
});

exports.getAllProduct = (Model)=> CatchAsync(async (req, res, next) => {
  const products = await Model.find();

  res.status(200).json({
    status: "success",
    dataSize: products.length,
    data: {
      products: products.reverse()
    }
  });
});

exports.getProduct = (Model)=> CatchAsync(async (req, res, next) => {
  const product = await Model.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.updatProduct = (Model)=> CatchAsync(async (req, res, next) => {
  const data = {
    ...req.body,
    imageProduct: req.body.imageProduct
    //  req.file.path ? req.file.path.split("\\").join("/"):
  }
  const product = await Model.findByIdAndUpdate(req.params.id, data, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      product
    }
  });
});

exports.deleteProduct = (Model)=> CatchAsync(async (req, res, next) => {
  await Model.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    message: "deleted",
  });
});
