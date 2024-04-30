// Middleware for handling auth
const { Admin } = require("../db");
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const {username,password}=req.headers
    const admin= await Admin.findOne({username:username,password:password});
    if(admin){
        next()
    }
    else{
        return res.status(403).json({
            msg: "Admin doesnt exist"
        })
    }
}

module.exports = adminMiddleware;