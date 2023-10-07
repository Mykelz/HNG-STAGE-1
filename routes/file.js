const express = require('express');

const router = express.Router();

const todayDate = new Date();
const day = todayDate.getDay();
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const today = dayList[day]


router.get('/', (req, res) =>{
    const utc = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000)
    const responseJson = {
        slack_name: req.query.slack_name,
        current_day: today,
        utc_time : utc.toISOString().split('.')[0] + 'Z',
        track: req.query.track,
        github_file_url: 'https://github.com/Mykelz/HNG-stage1/blob/master/app.js',
        github_repo_url: 'https://github.com/Mykelz/HNG-stage1/tree/master',
        status_code: 200,
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(responseJson);


})


module.exports = router;
