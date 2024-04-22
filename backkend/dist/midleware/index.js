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
//# sourceMappingURL=index.js.map