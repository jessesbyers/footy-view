const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { restoreUser } = require('../../utils/auth.js');
router.use(restoreUser);

// FOR TESTING ONLY
const { User } = require('../../db/models');
const { setTokenCookie } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// TEST ROUTE
// router.post('/test', function(req, res) {
//     console.log(req)
//     res.json({ requestBody: req.body });
// });

// TEST ROUTE: GET /api/set-token-cookie
// router.get('/set-token-cookie', async (_req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'DemoUser'
//         }
//     });
//     setTokenCookie(res, user);
//     return res.json({ user: user });
// });

// TEST ROUTE: GET /api/restore-user
// router.get(
//     '/restore-user',
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// TEST ROUTE: GET /api/require-auth
// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

module.exports = router;