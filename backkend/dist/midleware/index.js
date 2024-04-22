import jwt from 'jsonwebtoken';
import { usermodel } from '../db/users';
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
    const tokene = req.headers.authorization?.split(' ')[1];
    if (tokene) {
        jwt.verify(tokene, 'gakiza code secret', async (err, decodedToken) => {
            if (err) {
                res.status(400).json({ error: err, tokene });
            }
            try {
                const useri = await usermodel.findById(decodedToken.id);
                if (useri && useri.isAdmin) {
                    next();
                }
                else {
                    res.status(404).json({ error: `the admin only can access this` });
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    else {
        res.json({ error: "it seems you are not signed in!" });
    }
};
//# sourceMappingURL=index.js.map