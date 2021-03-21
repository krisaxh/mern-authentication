const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userModel = require('../models/user.model');

const LoginEvent = async (req, res) => {
    const {username, password} = req.body;
    const user = await userModel.findOne({ username: username });
    if (!user) return res.sendStatus(400);


    const passw = await bcrypt.compare(password, user.password)
    if (!passw) return res.sendStatus(400);

    const token = jwt.sign({id: user._id}, process.env.JWT_SIGNATURE);
    res.cookie("access_token", token, {httpOnly: true}).sendStatus(200);
}

const RegisterEvent = async (req, res) => {
    const newUser = new userModel({
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10),
        createdBy: req.ip
    });
    
    newUser.save()
    .then((t) => {
        const token = jwt.sign({id: t._id}, process.env.JWT_SIGNATURE);
        res.cookie("access_token", token, {httpOnly: true}).sendStatus(201);
    }).catch((e) => {
        res.sendStatus(200);
    });
}

const LogoutEvent = (req, res) => {
    res.clearCookie("access_token").sendStatus(200);
}

const GetUser = async (req, res) => {
    try {
        const token = jwt.verify(req.cookies.access_token, process.env.JWT_SIGNATURE);
        const user = await userModel.findOne({ _id: token.id });
        return res.status(200).json(user.username);
    } catch {
        return res.clearCookie("access_token").sendStatus(401);
    }
}

const RouteEvent = (req, res) => {
    // Heavaly flawed system
    // MITM Attack just buttfucks this code
    // since it only sends 401 or 200
    // Should implement some sort of jwt response
    try {
        const token = jwt.verify(req.cookies.access_token, process.env.JWT_SIGNATURE, (e, data) => {
            if (e) return false;
            return true
        })
        if (!token) return res.json(false);
        res.json(true);
    } catch {
        res.json(false);
    }
}

module.exports.LoginEvent = LoginEvent;
module.exports.LogoutEvent = LogoutEvent;
module.exports.RegisterEvent = RegisterEvent;
module.exports.RouteEvent = RouteEvent;
module.exports.GetUser = GetUser;