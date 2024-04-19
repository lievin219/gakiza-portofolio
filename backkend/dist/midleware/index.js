import jwt from 'jsonwebtoken';
export const require_auth = (req, res, next) => {
    const tokene = req.headers.authorization?.split(' ')[1];
    if (tokene) {
        jwt.verify(tokene, 'gakiza code secret', (err, decodedToken) => {
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
export const isAdmin = (req, res, next) => {
    const { email, password } = req.body;
    if (email !== 'admin.lievin@gmail.com' && password !== 'Mugabekazilievin219@') {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
};
//# sourceMappingURL=index.js.map