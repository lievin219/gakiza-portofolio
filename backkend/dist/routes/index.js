import express from 'express';
const router = express();
router.get("", async (req, res) => {
    const { email, id } = req.body;
    res.sendFile('');
});
//# sourceMappingURL=index.js.map