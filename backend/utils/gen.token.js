import jwt from "jsonwebtoken";

const genTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "100d",
    });

    res.cookie("jwt", token, {
        maxAge: 100 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });
};

export default genTokenAndSetCookie;
