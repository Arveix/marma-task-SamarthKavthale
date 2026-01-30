import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './db.js';

const app = express();

connectDB();

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    releaseDate: { type: Date, required: true }
});

const Product = mongoose.model('Product', productSchema);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Testing');
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find(); // fetch all products
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
