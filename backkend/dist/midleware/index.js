import jwt from 'jsonwebtoken';
export const require_auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
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
export const isAdmin = (req, res, next) => {
    const { email, password } = req.body;
    if (email !== 'admin.lievin@gmail.com' && password !== 'Mugabekazilievin219@') {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
};
//# sourceMappingURL=index.js.map