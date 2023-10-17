var jwt = require("jsonwebtoken");

const fetchuser = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send("Access Denied!!");
    }
    try {
        const data = jwt.verify(token, "@&^^#$&!^(@&#$!(&(*&(");
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send("Access Denied!!");
    }
};

module.exports = fetchuser;
