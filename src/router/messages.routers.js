import { Router } from 'express' 
import { messagesModel } from '../models/messages.model.js'

const router = Router();


router.get('/', async (req, res) => { 
    try {
        let messages = await messagesModel.find();
        res.send({ result: "Exito", payload: messages });
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    let { user, message } = req.body;
    if (!user || !message) {
        res.send({ status: "error", error: "Missing params" });
    }
    let result = await messagesModel.create({ user, message });
    res.send({ result: "Exito", payload: result });
});

router.put('/:id_message ', async (req, res) => {
    let { id_message  } = req.params;

    let messagesToReplace = req.body;
    if (!messagesToReplace.user || !messagesToReplace.message) {
        res.send({ status: "error", error: "Missing params" });
    }
    let result = await messagesModel.updateOne({ _id: id_message  }, messagesToReplace);
    res.send({ result: "Exito", payload: result });
});


router.delete('/:id_message ', async (req, res) => {
    let { id_message  } = req.params;
    let result = await messagesModel.deleteOne({ _id: id_message });
    res.send({ result: "Exito", payload: result });
});

export default router