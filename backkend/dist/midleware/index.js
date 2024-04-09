import jwt from 'jsonwebtoken';
export const require_auth = (req, res, next) => {
    const token = req.cookies.jwt;
    // check jsonwebtoken exist or not 
    if (token) {
        jwt.verify(token, 'gakiza code secret', (err, decodedToken) => {
            if (err) {
                res.status(400).json({ error: "no webtoken found!" });
            }
            else {
                console.log(decodedToken);
                next();
            }
        });
    }
    else {
        res.json({ error: "it seems you are not signed in!" });
    }
};
//# sourceMappingURL=index.js.map