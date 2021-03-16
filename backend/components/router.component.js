const router = require('express').Router();

const { 
    LoginEvent, 
    LogoutEvent, 
    RegisterEvent,
    RouteEvent
} = require('./handler.router');

router.post("/login", LoginEvent);
router.get("/logout", LogoutEvent);
router.post("/register", RegisterEvent);

router.get("/is", RouteEvent);

module.exports = router;