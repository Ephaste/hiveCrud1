           
import { User } from "../../models/userModel.js";
import { comparePassword} from "../../utils/passwordFunction.js";
import { generateToken } from "../../utils/jwtFunction.js";

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    let isPasswordCorrect = await comparePassword(req.body.password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Wrong password",
      });
    }

    // If the user is authenticated, generate a token and send a success response
    let token = generateToken({
      _id: user._id, // Use the correct user's ID
      email: user.email,
    });

    res.status(200).json({
      message: "Login is successful!",
      access_token: token,
      user: {
        email: user.email,
        location: user.location,
        fullNames: user.fullNames,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
     
    });
    console.log(error);
  }
};
