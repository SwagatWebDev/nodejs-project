// 5. Third Party Middleware

const express = require('express');

const server = express();

const morgan = require('morgan');

const port = 9000;


server.use(morgan('dev'));

server.listen(port, () => {
   console.log(`Express Server running on http://localhost:${port}`);
 });


// // 4. Built in Middleware
//
// const express = require('express');
//
// const server = express();
//
//
//
// const port = 9000;
//
// server.use(express.static('public'));
//
// // Body parser
// server.use(express.json());
//
// server.listen(port, () => {
//     console.log(`Express Server running on http://localhost:${port}`);
// });


// 3. Error Handling Middleware
// const express = require('express');
//
// const server = express();
//
// const port = 9000;
//
// server.get('/', (req, res, next) => {
//     const err = new Error('Custom Error');
//     next(err);
// });
//
// server.use((err, req, res, next) => {
//     console.log(err.stack);
//     res.status(500).send('Something Went Wrong');
// })
//
// server.listen(port, () => {
//      console.log(`Express Server running on http://localhost:${port}`);
//  });

// 1. Creating auth in Application Level / Routing Level Middleware

// const express = require('express');
//
// const server = express();
//
// const port = 9000;
//
// // const auth = (req, res, next) => {
// //     console.log(req.query);
// //     if(req.query.password === '123'){
// //         next();
// //     } else{
// //         res.sendStatus(401);
// //     }
// // }
//
// //server.use(auth);
//
// // server.use((req, res, next) => {
// //     console.log('Middleware function 1 executed');
// //     console.log(req.method, req.ip, req.hostname, new Date());
// //     next();
// // });
// //
// // server.use((req, res, next) => {
// //     console.log('Middleware function 2 executed');
// //     console.log(`Date: ${new Date().toLocaleDateString()}`);
// // })
//
//
// // server.get('/', auth, (req, res) => {
// //     //res.send('<h1>Hello</h1>');
// //     res.json({type: 'GET'});
// // });
//
// server.use(express.json());
//
// // const auth = (req, res, next) => {
// //     console.log(req.body);
// //     if(req.body.password === '123'){
// //         next();
// //     } else{
// //         res.sendStatus(401);
// //     }
// // }
// //
// // server.post('/', auth, (req, res) => {
// //     //res.send('<h1>Hello</h1>');
// //     res.json({type: 'POST'});
// // });
//
// server.put('/', (req, res) => {
//     //res.send('<h1>Hello</h1>');
//     res.json({type: 'PUT'});
// });
//
// server.delete('/', (req, res) => {
//     //res.send('<h1>Hello</h1>');
//     res.json({type: 'DELETE'});
// });
//
// server.patch('/', (req, res) => {
//     //res.send('<h1>Hello</h1>');
//     res.json({type: 'PATCH'});
// });
//
// server.listen(port, () => {
//     console.log(`Express Server running on http://localhost:${port}`);
// });


// 2. Routing Level Middleware:

// const express = require('express');
// const app = express();
// const router = express.Router();
//
// // Router-level middleware
// router.use((req, res, next) => {
//     console.log('Router-level middleware');
//     next();
// });
//
// // Route
// router.get('/special', (req, res) => {
//     res.send('Special Route');
// });
//
// // Using the router in the main app
// app.use('/api', router);
//
// // Start the server
// const PORT = process.env.PORT || 9000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


