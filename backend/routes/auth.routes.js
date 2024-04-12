import express from "express";
import User from "../models/auth.model.js";
import generateTokenAndSetCookie from "../utils/generateTokensAndSetCookie.js"


const router = express.Router();

// Use express.json() middleware to parse JSON bodies
router.use(express.json());

router.post("/login", async(req, res) => {
    try {
		const { fullName, password } = req.body;
		const user = await User.findOne({ fullName });
		
		if (user.password!=password) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

router.post("/logout", async(req, res) => {
    try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

export default router;
