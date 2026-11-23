
import Product from "../models/product.model.js";
import User from "../models/user.model.js";
import Order from "../models/order.model.js";

// Get Dashboard Stats
export const getDashboardStats = async (req, res) => {
  try {
    // Count Products
    const totalProducts = await Product.countDocuments();

    // Count Users
    const totalUsers = await User.countDocuments({
      role: "customer",
    });

    // Count Orders
    const totalOrders = await Order.countDocuments();

    // Calculate Total Revenue
    const revenueResult = await Order.aggregate([
      {
        $match: {
          paymentStatus: "paid",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$totalPrice",
          },
        },
      },
    ]);

    const totalRevenue = revenueResult[0]?.totalRevenue || 0;

    return res.status(200).json({
      totalProducts,
      totalUsers,
      totalOrders,
      totalRevenue,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
export const getRecentOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("user", "name email");

    return res.status(200).json({
      orders,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};