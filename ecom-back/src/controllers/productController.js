import Product from '../models/Product.js';

const initialProducts = [
    {
        id: 1,
        name: "Urban Stride Sneakers",
        price: 1800,
        image: "https://placehold.co/400x400/D0D0D0/444?text=Urban%20Stride%20Sneakers",
        category: "Sneakers",
        brand: { id: "B001", name: "SoleMate" },
        createdAt: "2024-07-10T09:20:00Z",
        salePercentage: 0,
        description: "Step confidently into the city with Urban Stride Sneakers. Lightweight mesh and cushioned soles keep you comfortable all day, while the bold design adds a modern edge to any outfit.",
        colors: ["#25282a", "#e0e0e0", "#4299e1"]
    },
    {
        id: 2,
        name: "Classic Leather Boots",
        price: 2500,
        image: "https://placehold.co/400x400/D0D0D0/444?text=Classic%20Leather%20Boots",
        category: "Boots",
        brand: { id: "B002", name: "StrideRight" },
        createdAt: "2024-07-12T12:15:00Z",
        salePercentage: 20,
        description: "Upgrade your wardrobe with Classic Leather Boots. Made from genuine leather, these boots offer timeless style and rugged durability for any season.",
        colors: ["#6b4f29", "#c19a6b", "#fff"]
    },
    {
        id: 3,
        name: "Summer Breeze Sandals",
        price: 950,
        image: "https://placehold.co/400x400/C0C0C0/555?text=Summer%20Breeze%20Sandals",
        category: "Sandals",
        brand: { id: "B003", name: "FootFlow" },
        createdAt: "2024-07-08T17:00:00Z",
        salePercentage: 0,
        description: "Enjoy warm days in style with Summer Breeze Sandals. Their breathable design and soft straps make every step light and cool.",
        colors: ["#e1c699", "#ffffff", "#a7bcb9"]
    },
    {
        id: 4,
        name: "Professional Oxford Shoes",
        price: 2800,
        image: "https://placehold.co/400x400/B0B0B0/666?text=Professional%20Oxford%20Shoes",
        category: "Dress Shoes",
        brand: { id: "B002", name: "StrideRight" },
        createdAt: "2024-06-25T10:00:00Z",
        salePercentage: 30,
        description: "Make an impression at work or formal events with Professional Oxford Shoes. Crafted for comfort and sophistication, they pair perfectly with any suit.",
        colors: ["#3a3a3a", "#8d5524", "#d8c3a5"]
    },
    {
        id: 5,
        name: "Trail Blazer Hiking Boots",
        price: 2100,
        image: "https://placehold.co/400x400/A0A0A0/777?text=Trail%20Blazer%20Hiking%20Boots",
        category: "Boots",
        brand: { id: "B004", name: "PeakStep" },
        createdAt: "2024-07-01T14:30:00Z",
        salePercentage: 20,
        description: "Conquer any trail with Trail Blazer Hiking Boots. Featuring waterproof material and rugged soles, these boots keep your feet protected and stable on rough terrain.",
        colors: ["#45503b", "#949494", "#3e2723"]
    },
    {
        id: 6,
        name: "Comfort Slip-On Loafers",
        price: 1600,
        image: "https://placehold.co/400x400/909090/888?text=Comfort%20Slip-On%20Loafers",
        category: "Loafers",
        brand: { id: "B001", name: "SoleMate" },
        createdAt: "2024-07-05T08:00:00Z",
        salePercentage: 0,
        description: "Slip into all-day comfort with these loafers. Soft lining and flexible outsoles make them the perfect choice for work or leisure.",
        colors: ["#353535", "#8b8b8b", "#e5e5e5"]
    },
    {
        id: 7,
        name: "Responsive Running Shoes",
        price: 1950,
        image: "https://placehold.co/400x400/808080/999?text=Responsive%20Running%20Shoes",
        category: "Running Shoes",
        brand: { id: "B005", name: "SwiftKicks" },
        createdAt: "2024-07-11T16:45:00Z",
        salePercentage: 30,
        description: "Run faster and longer with Responsive Running Shoes. Engineered for energy return and breathability, they support you through every stride.",
        colors: ["#264653", "#e76f51", "#f4a261"]
    },
    {
        id: 8,
        name: "Waterproof Rain Boots",
        price: 1300,
        image: "https://placehold.co/400x400/707070/AAA?text=Waterproof%20Rain%20Boots",
        category: "Boots",
        brand: { id: "B003", name: "FootFlow" },
        createdAt: "2024-06-28T20:10:00Z",
        salePercentage: 20,
        description: "Stay dry and stylish with Waterproof Rain Boots. Their slip-resistant soles and sealed seams make them ideal for rainy days.",
        colors: ["#3b5998", "#707070", "#ffffff"]
    },
    {
        id: 9,
        name: "Elegant Court Heels",
        price: 2200,
        image: "https://placehold.co/400x400/606060/BBB?text=Elegant%20Court%20Heels",
        category: "Dress Shoes",
        brand: { id: "B002", name: "StrideRight" },
        createdAt: "2024-07-09T11:00:00Z",
        salePercentage: 0,
        description: "Step into elegance with Court Heels. The classic silhouette and cushioned insole provide lasting comfort from morning to night.",
        colors: ["#b68973", "#6c5b7b", "#fff"]
    },
    {
        id: 10,
        name: "Athletic Cross Trainers",
        price: 1700,
        image: "https://placehold.co/400x400/505050/CCC?text=Athletic%20Cross%20Trainers",
        category: "Sneakers",
        brand: { id: "B005", name: "SwiftKicks" },
        createdAt: "2024-07-03T09:00:00Z",
        salePercentage: 30,
        description: "Train in confidence with Athletic Cross Trainers. Designed for versatility and stability, they handle any workout with ease.",
        colors: ["#22223b", "#f2e9e4", "#c9ada7"]
    },
    {
        id: 11,
        name: "Comfy House Slippers",
        price: 550,
        image: "https://placehold.co/400x400/404040/DDD?text=Comfy%20House%20Slippers",
        category: "Slippers",
        brand: { id: "B003", name: "FootFlow" },
        createdAt: "2024-07-14T08:30:00Z",
        salePercentage: 20,
        description: "Relax at home with ultra-soft Comfy House Slippers. Non-slip soles and plush lining keep your feet cozy on any floor.",
        colors: ["#f8efd4", "#bdbdbd", "#ffb4a2"]
    },
    {
        id: 12,
        name: "Classic Boat Shoes",
        price: 1400,
        image: "https://placehold.co/400x400/303030/EEE?text=Classic%20Boat%20Shoes",
        category: "Casual Shoes",
        brand: { id: "B001", name: "SoleMate" },
        createdAt: "2024-07-07T13:00:00Z",
        salePercentage: 0,
        description: "Sail through your day in Classic Boat Shoes. Water-resistant material and timeless design make them a perfect casual staple.",
        colors: ["#628395", "#e9d8a6", "#252422"]
    }
];

// Helper function to generate a random date within the last year
const getRandomDate = () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(endDate.getFullYear() - 1); // Up to 1 year ago

    const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(randomTimestamp).toISOString();
};

// Helper function to pick a random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Helper function to pick a random element from an array
const getRandomElementArray = (arr) => {
    const start_index = Math.floor(Math.random() * (arr.length-2))
    return arr.slice(start_index, start_index+2);
}
// Possible values for new products
const categories = ["Sneakers", "Boots", "Sandals", "Dress Shoes", "Running Shoes", "Loafers", "Slippers", "Casual Shoes", "Flats", "Athletic", "Work Shoes", "Kids Shoes"];
const brands = [
    { id: "B001", name: "SoleMate" },
    { id: "B002", name: "StrideRight" },
    { id: "B003", name: "FootFlow" },
    { id: "B004", name: "PeakStep" },
    { id: "B005", name: "SwiftKicks" },
    { id: "B006", name: "UrbanStep" },
    { id: "B007", name: "ComfyFeet" },
    { id: "B008", name: "ZenWalk" }
];

const salePercentages = [0, 20, 30]; // As integers

const baseProductNames = [
    "Glide", "Aero", "Pulse", "Terra", "Horizon", "Velocity", "Summit", "Delta",
    "Pinnacle", "Momentum", "Flow", "Echo", "Zenith", "Quantum", "Nexus", "Vortex"
];
const shoeTypes = ["Sneakers", "Boots", "Sandals", "Oxfords", "Loafers", "Runners", "Heels", "Flats", "Mules", "Wedges"];

const baseProductColors = [ '#FFFFFF', '#000000', '#C0C0C0', '#008000', '#FF0000', '#FFFF00' ];

// Function to generate a single new product
const generateNewProduct = (id) => {
    const category = getRandomElement(categories);
    const brand = getRandomElement(brands);
    const baseName = getRandomElement(baseProductNames);
    const shoeType = getRandomElement(shoeTypes);
    const name = `${baseName} ${shoeType} ${id}`; // Ensure unique name suffix
    const price = Math.floor(Math.random() * (2800 - 550 + 1)) + 500; // Price between 550 and 2800
    const imageText = `${category.replace(/\s/g, '')}-${id}`; // Image text based on category and id
    // const imageUrl = `https://placehold.co/400x400/${Math.floor(Math.random()*16777215).toString(16)}/${Math.floor(Math.random()*16777215).toString(16)}?text=${imageText}`;
    const imageUrl = `https://placehold.co/400x400/CCCCCC/333?text=${encodeURIComponent(name)}`
    const colors = getRandomElementArray(baseProductColors);
    return {
        id: id, // Use the passed ID
        name: name,
        price: price,
        image: imageUrl,
        category: category,
        brand: brand,
        createdAt: getRandomDate(),
        salePercentage: getRandomElement(salePercentages),
        colors: colors,
    };
};


// API -------------------------------------------------------
// API -------------------------------------------------------
// API -------------------------------------------------------
// API -------------------------------------------------------

// get all products
export const getAllProducts = async (req, res) => {
    // get all prodcuts
    const allProdudcts = await Product.find({})
    res.json(allProdudcts);
}

// get produdct by Id
export const getProductById = async (req, res) => {
    // Parse id from URL params (always string, convert to number if needed)
    const id = Number(req.params.id);
    const found = await Product.find({id:id});

    if (!found) {
        return res.status(404).json({ error: "Product not found" });
    }

    res.json(found);
};

// create mock product from mock list
export const createMockProduct = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const newProductInList = initialProducts.find((p) => p.id === id)
        const newMockProduct = new Product(newProductInList);
        await newMockProduct.save(); 
        console.log("save new product to mongodb")
        res.json(newMockProduct);
    
    } catch (err) {
        res.status(500).json({ error:err.message });
    }
}

// create mock product by random new one
export const createProduct = async (req, res) => {
    try {
        const lastProduct = await Product.findOne().sort({ id: -1 }).exec();
        const lastId = lastProduct ? lastProduct.id : 0; // If collection is empty, start from 0
        const newId = lastId + 1;
        const newMockProduct = new Product(generateNewProduct(newId));
        await newMockProduct.save(); 
        console.log("save to mongodb")
        res.json(newMockProduct);
    
    } catch (err) {
        res.status(500).json({ error:err.message });
    }
}


