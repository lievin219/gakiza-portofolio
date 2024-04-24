import express from 'express';
import mongoose from 'mongoose';
import cookie_parser from 'cookie-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerjsdoc from 'swagger-jsdoc';
import { adminpage, gakiapage, getalcomments, getallblogs } from './controllers/authcontrollers.js';
import { blog_post, deletecomment, update_comment } from './controllers/authcontrollers.js';
import { comment_post, contact_get, log_out, login_post, } from './controllers/authcontrollers.js';
import { signup_post } from './controllers/authcontrollers.js';
import { isAdmin_auth, require_auth } from './midleware/index.js';
export const app = express();
app.use(express.json());
app.use(cookie_parser());
app.use(cors({
    origin: 'https://lievin219.github.io',
    credentials: true
}));
const swaggeroptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "portfolio api doc",
            version: "0.1",
            description: "portfolio documented with swagger",
            contact: {
                name: "lievinm",
                url: 'me.com',
                email: "@gmail.com"
            }
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
        components: {
            schemas: {
                Message: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string"
                        },
                        email: {
                            type: "string"
                        },
                        question: {
                            type: "string"
                        },
                        description: {
                            type: "string"
                        }
                    },
                    required: ["name", "email", "question", "description"]
                },
                clients: {
                    type: "object",
                    properties: {
                        username: {
                            type: "string"
                        },
                        email: {
                            type: "string"
                        },
                        password: {
                            type: "string"
                        },
                        isAdmin: {
                            type: "boolean"
                        }
                    },
                    required: ["username", "email", "password"]
                }
            }
        }
    },
    apis: ["./dist/index.js"]
};
const swaggerdocs = swaggerjsdoc(swaggeroptions);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerdocs));
/* const __dirname = path.dirname(fileURLToPath(import.meta.url));
const staticPath = path.resolve(__dirname, '../../public/assets');
 app.use('/public/assets', express.static(staticPath));



  app.get('/logini',(req:express.Request,res:express.Response)=>{
    const indexpath=path.resolve(__dirname,'../../login.html')
    res.sendFile(indexpath)
   })
   app.get('/main',(req:express.Request,res:express.Response)=>{
    const indexpath=path.resolve(__dirname,'../../apping.html')
    res.sendFile(indexpath)
   })
app.get('/signupi',(req:express.Request,res:express.Response)=>{
    const indexpath=path.resolve(__dirname,'../../index.html')
    res.sendFile(indexpath)
})
app.get('/commenting',(req:express.Request,res:express.Response)=>{
const indexpath=path.resolve(__dirname,'../../project.html')
res.sendFile(indexpath)
})*/
const port = 3000;
const mongodb_url = "mongodb+srv://gakizalievin219:soFbc9DE42Yv7MKf@cluster0.csy64ya.mongodb.net/";
mongoose.connect(mongodb_url).then(() => {
    console.log(`the database is coonnected to  http://localhost:${port}`);
}).catch((error) => {
    console.log(`an errror have occured  here ${error}`);
});
app.listen(port, () => {
    console.log(`srver is running  at${port}`);
});
/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with the provided  email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         applicationus/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Successfully registered the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: string
 *                   description: The ID of the registered user.
 *       '400':
 *         description: Failed to register the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 */
app.post("/signup", signup_post);
/**
* @swagger
* /login:
*   post:
*     summary: login a registered user
*     description: a user can log in
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               email:
*                 type: string
*               password:
*                 type: string
*             required:
*               - email
*               - password
*     responses:
*       '200':
*         description: Successfully registered the user.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 user:
*                   type: string
*                   description: The ID of the registered user.
*       '400':
*         description: Failed to register the user.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 error:
*                   type: string
*                   description: Error message.
*/
app.post("/login", login_post);
/**
* @swagger
* /logout:
*   get:
*     summary: Logout user
*     description: Clear JWT cookie to log out the user.
*     responses:
*       '200':
*         description: Successfully logged out.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 success:
*                   type: boolean
*                   description: Indicates whether the logout was successful.
*/
app.get("/logout", log_out);
/**
* @swagger
* /comments/{id}:
*   patch:
*     summary: include a comment
*     description: a user can comment
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               email:
*                 type: string
*               message:
*                 type: string
*             required:
*               - email
*               - message
*     responses:
*       '200':
*         description: Successfully commented.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 email:
*                   type: string
*                   description: The ID of the registered user.
*                 message:
*                   type: string
*       '400':
*         description: Failed to register the user.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 error:
*                   type: string
*                   description: Error message.
*/
app.patch("/comments/:id", require_auth, update_comment);
/**
* @swagger
* /contact:
*   post:
*     summary: a user can contact us
*     description: a user can reach out to us!
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*               email:
*                 type: string
*               message:
*                 type: string
*             required:
*               - name
*               - email
*     responses:
*       '200':
*         description: Successfully registered the user.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 user:
*                   type: string
*                   description: The ID of the registered user.
*       '400':
*         description: Failed to register the user.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 error:
*                   type: string
*                   description: Error message.
*/
app.post("/contact", require_auth, contact_get);
app.get('/homi', (req, res) => {
    res.json({ message: `the project is runnig on ${port} ` });
});
/**
* @swagger
* /blog:
*   post:
*     summary: a user can add a blog
*     description: a user can give a blog
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               title:
*                 type: string
*               description:
*                 type: string
*             required:
*               - title
*               - description
*     responses:
*       '200':
*         description: Successfully registered the user.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 user:
*                   type: string
*                   description: The ID of the registered user.
*       '400':
*         description: Failed to register the user.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 error:
*                   type: string
*                   description: Error message.
*/
app.post("/blog", require_auth, blog_post);
/**
* @swagger
* /comment:
*   post:
*     summary: comment on anything
*     description: a user can comment
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               email:
*                 type: string
*               message:
*                 type: string
*             required:
*               - email
*               - message
*     responses:
*       '200':
*         description: Successfully registered the user.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 user:
*                   type: string
*                   description: The ID of the registered user.
*       '400':
*         description: Failed to register the user.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 error:
*                   type: string
*                   description: Error message.
*/
app.post("/comment", comment_post);
app.get("/commentsi", isAdmin_auth, getalcomments);
app.get('/words', (req, res) => {
    res.json("it is no:w declared that to get all blogs it is not working usually!!");
});
app.post('/blogi', isAdmin_auth, adminpage);
app.post('/bloge', isAdmin_auth, gakiapage);
/**
* @swagger
* /delete:id:
*
*   delete:
*     summary: include a comment
*     description: a user can comment
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               email:
*                 type: string
*               message:
*                 type: string
*             required:
*               - email
*               - message
*     responses:
*       '200':
*         description: Successfully commented.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 user:
*                   type: string
*                   description: The ID of the registered user.
*       '400':
*         description: Failed to register the user.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 error:
*                   type: string
*                   description: Error message.
*/
app.delete("/delete/:id", require_auth, deletecomment);
// mongodb password:soFbc9DE42Yv7MKf
/**
* @swagger
* /blog/all:
*   get:
*     summary: get all blogs
*     description:  a user can get all blogs
*     requestBody:
*       required:
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*     responses:
*       '200':
*         description: Successfully registered the user.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 user:
*                   type: string
*                   description: The ID of the registered user.
*       '400':
*         description: Failed to get all blogs of the users.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 error:
*                   type: string
*                   description: Error message.
*/
app.get("/article/getall", require_auth, getallblogs);
export default app;
//# sourceMappingURL=index.js.map