
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    ChartNoAxesCombined,
    Settings,
    LogOut,
    Leaf,
    ChevronRight,
} from "lucide-react";

const menuItems = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Products",
        path: "/products",
        icon: Package,
    },
    {
        title: "Orders",
        path: "/orders",
        icon: ShoppingCart,
    },
    {
        title: "Customers",
        path: "/customers",
        icon: Users,
    },
    {
        title: "Analytics",
        path: "/analytics",
        icon: ChartNoAxesCombined,
    },
];

function Sidebar() {
    return (
        <motion.aside
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex min-h-screen w-72 flex-col border-r border-[#E5EDE8] bg-white px-5 py-6"
        >
            {/* Logo */}
            <div className="mb-10 flex items-center gap-3 px-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#15C37E] text-white shadow-lg shadow-green-100">
                    <Leaf size={25} />
                </div>

                <div>
                    <h1 className="text-xl font-bold tracking-tight text-[#1F2937]">
                        GreenStore
                    </h1>
                    <p className="text-xs text-gray-400">
                        Admin Dashboard
                    </p>
                </div>
            </div>

            {/* Store Status */}
            <div className="mb-8 rounded-2xl bg-[#E6F8F0] p-4">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#0FA66A]">
                        Store Status
                    </span>

                    <span className="flex items-center gap-1.5 rounded-full bg-white px-2 py-1 text-xs font-medium text-[#0FA66A]">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#15C37E]" />
                        Active
                    </span>
                </div>

                <p className="mt-2 text-xs text-gray-500">
                    Your store is running smoothly.
                </p>
            </div>

            {/* Navigation */}
            <div className="flex-1">
                <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Main Menu
                </p>

                <nav className="space-y-2">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.path}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.1 + index * 0.08,
                                    duration: 0.3,
                                }}
                            >
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                                            ? "bg-[#15C37E] text-white shadow-lg shadow-green-100"
                                            : "text-gray-500 hover:bg-[#E6F8F0] hover:text-[#0FA66A]"
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <Icon size={20} />

                                            <span className="flex-1">
                                                {item.title}
                                            </span>

                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-menu"
                                                    className="absolute inset-0 -z-0 rounded-xl"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 350,
                                                        damping: 30,
                                                    }}
                                                />
                                            )}

                                            {isActive && (
                                                <ChevronRight size={16} />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            </motion.div>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-[#E5EDE8] pt-5">
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
                            ? "bg-[#E6F8F0] text-[#0FA66A]"
                            : "text-gray-500 hover:bg-[#F5F8F6] hover:text-[#0FA66A]"
                        }`
                    }
                >
                    <Settings size={20} />
                    Settings
                </NavLink>

                <button
                    type="button"
                    onClick={() => console.log("Logout clicked")}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-500 transition hover:bg-red-50 hover:text-red-500"
                >
                    <LogOut size={20} />
                    Logout
                </button>

                <p className="mt-6 text-center text-xs text-gray-400">
                    © 2026 GreenStore
                </p>
            </div>
        </motion.aside>
    );
}

export default Sidebar;
