const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

require('../db/connect');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Welcome to router js `);
});

//using async and await method
// register route
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error: 'please, filled the properly..'});
    }
    try {
        const userExist = await User.findOne({ email:email })
        if(userExist) {
                return res.status(422).json({ error: 'email already exist..' });
            }
        else if (password != cpassword) {
            return res.status(422).json({ error: 'password is not matching..' });
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword });
            await user.save();
            res.status(201).json({ message: 'user registered successfuly..' });
        } 
    } catch(err) {
        console.log(err);
    }
});

//login route
router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({ error: 'user data is not matching 3' });
        }
        const userLogin = await User.findOne({ email:email });

        //console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            //cookies store in local machine browser
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000), //time out milliseconds 3o day=25892000000 
                httpOnly: true
            });

            if(!isMatch) {
                res.status(400).json({ error: 'user data is not matching 2' });
            } else {
                res.json({ message: 'user signin successfuly..' });
            }
        } else {
            res.status(400).json({ error: 'user data is not matching 1' });
        }

    } catch (err) {
        console.log(err);
    }
});

//about route
router.get('/about', authenticate, (req, res) => {
    console.log(`This is my About page`);
    res.send(req.rootUser);
});

module.exports = router;

