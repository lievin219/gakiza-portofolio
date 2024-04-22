import jwt from 'jsonwebtoken';
;
export const require_auth = (req, res, next) => {
    const tokene = req.headers.authorization?.split(' ')[1];
    if (tokene) {
        jwt.verify(tokene, 'gakiza code secret', (err, decodedToken) => {
            if (err) {
                res.status(400).json({ error: err, tokene });
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
export const admin_auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        jwt.verify(token, 'gakiza code secret', (err, decodedToken) => {
            if (err) {
                res.status(400).json({ error: err });
            }
            else {
                // Check if the user is an admin
                if (decodedToken && decodedToken.isAdmin) {
                    next(); // User is an admin, proceed to the next middleware
                }
                else {
                    res.status(403).json({ error: "Access Denied! You don't have permission to access this resource." });
                }
            }
        });
    }
    else {
        res.status(401).json({ error: "Unauthorized! It seems you are not signed in." });
    }
};
//# sourceMappingURL=index.js.map