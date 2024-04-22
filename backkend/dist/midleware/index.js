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
export const isAdmin_auth = (req, res, next) => {
    // Extract token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        // Verify the token
        jwt.verify(token, 'gakiza code secret', (err, decodedToken) => {
            if (err) {
                // If token verification fails, send an error response
                res.status(401).json({ error: 'Unauthorized' });
            }
            else {
                // If token is valid, check if the user is an admin
                if (decodedToken && decodedToken.isAdmin) {
                    // If user is admin, proceed to the next middleware
                    next();
                }
                else {
                    // If user is not an admin, send an error response
                    res.status(403).json({ error: 'Forbidden' });
                }
            }
        });
    }
    else {
        // If no token is provided, send an error response
        res.status(401).json({ error: 'Unauthorized' });
    }
};
//# sourceMappingURL=index.js.map