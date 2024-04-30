const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin} = require("../db/index.js")
const {Course} = require("../db/index.js")
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const {username,password}=req.body;
    const adminResponse=await Admin.findOne({username:username})
    if(adminResponse){
        return res.send("Admin Already exists")
    }
    await Admin.create({
        username,
        password
    })
    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imageLink = req.body.imageLink
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});

module.exports = router;