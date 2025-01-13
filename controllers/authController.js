const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Signup
const signup = async (req, res) => {
   
        try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};

// Signin
const signin = async (req, res) => {
    
    try {
                const { username, password } = req.body;
                const user = await User.findOne({ username });
                if (!user) return res.status(404).json({ error: 'User not found' });
        
            
        
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, );
                res.json({ token });
            } catch (error) {
                res.status(500).json({ error: 'Error logging in' });
            }
};

module.exports = { signup, signin };
