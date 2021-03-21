const router = require('express').Router();

const { 
    LoginEvent, 
    LogoutEvent, 
    RegisterEvent,
    RouteEvent,
    GetUser
} = require('./handler.router');

router.post("/login", LoginEvent);
router.get("/logout", LogoutEvent);
router.post("/register", RegisterEvent);

router.get("/page", RouteEvent);
router.get("/user", GetUser);

module.exports = router;