// Middleware
// ----
// 1st sample
// const authCheck = (req, res, next) => {
//   //code body
//   console.log('Hello, Middleware');
//   next();
// }

// 2nd sample: Aj. taught logic of trycatch
exports.authCheck = (req, res, next) => {
  // code body
  try {
    console.log("Hello, Middleware");
    if (true) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
  }
};