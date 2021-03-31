const router = require('express').Router();

router.get('/', (req, res) => {
    return res.sendFile(`${__dirname}/views/index.html`);
})

module.exports = router;