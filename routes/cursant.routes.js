const {Router} = require('express');
const {cursantController} = require('../controllers/Cursant.controller');

class CursantsRouter {
    constructor() {
        this.__router = Router();

        this.__configure();
    }

    getRoutes() {
        return this.__router;
    }

    __configure() {
        this.__router.get('/:id', (req, res) => {
            const {id} = req.params;

            res.json(
                cursantController.findOne(+id)
            );
        });

        this.__router.delete('/:id', (req, res) => {
            const {id} = req.params;

            
                cursantController.deleteOne(+id);
                res.status(200).end();
    
        });

        this.__router.post('/', (req, res) => {
            const {body} = req;

            cursantController.create(body);

            res.status(201).end();
        });


        this.__router.put('/:id', (req, res) => {
            const {body, params: {id}} = req;

            cursantController.updateOne(id, body);

            res.status(200).end();
        });

        this.__router.get('/', (req, res) => {
            res.json(cursantController.findAll());
        });
    }
}

exports.cursantsRouter = new CursantsRouter();
