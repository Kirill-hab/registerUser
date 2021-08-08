import {Router} from "express";
import {User} from "../../models";


export function createRoutes() {
    const router = new Router();

    router.post('/users/create', (req, res) => {
        const user = new User(req.body);

        user.save()
            .then(() => {
                res.send({
                    message: 'User added successfully',
                });
            }).catch(() => {
            res.status(500).send({
                message: 'Failed! Username is already in use'
            });
        })
    });

    router.post('/users/login', async (req, res) => {
        const {username, password} = req.body;
        const user = await User.findOne({
            username
        });

        if (!user) {
            res.status(500).send({
                message: 'Failed! User not found'
            });
        }

        user.comparePassword(password, (matchError, isMatch) => {
            if (matchError || !isMatch) {
                res.status(500).send({
                    message: 'Failed! Incorrect username or password'
                });
            } else {
                res.send({
                    message: `User is ${user.username}`,
                });
            }
        });
    });

    return router;
}