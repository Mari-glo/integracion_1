import { Router } from 'express' 
import { productsModel } from '../models/products.model.js'

const router = Router();


router.get('/', async (req, res) => { 
    try {
        let products = await productsModel.find();
        res.send({ result: "Exito", payload: products });
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    let { description, image, price, stock } = req.body;
    if (!description || !image || !price || !stock) {
        res.send({ status: "error", error: "Missing params" });
    }
    let result = await productsModel.create({ description, image, price, stock });
    res.send({ result: "Exito", payload: result });
});

router.put('/:id_product', async (req, res) => {
    let { id_product } = req.params;

    let productsToReplace = req.body;
    if (!productsToReplace.description || !productsToReplace.image || !productsToReplace.price || !productsToReplace.stock) {
        res.send({ status: "error", error: "Missing params" });
    }
    let result = await productsModel.updateOne({ _id: id_product }, productsToReplace);
    res.send({ result: "Exito", payload: result });
});


router.delete('/:id_product', async (req, res) => {
    let { id_product } = req.params;
    let result = await productsModel.deleteOne({ _id: id_product });
    res.send({ result: "Exito", payload: result });
});

export default router