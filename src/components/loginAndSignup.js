import { useState, useEffect } from "react";

function LoginAndSignup({ isOpen, onClose, setUser }) {
    const [mode, setMode] = useState("login"); // login | signup

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: formData.name || formData.email.split("@")[0],
            email: formData.email,
        };
        localStorage.setItem("user", JSON.stringify(userData));

        setUser(userData);
        onClose();
    };
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);



    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 "
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-[90%] sm:w-[380px] p-6 rounded-2xl shadow-2xl 
  bg-[#2b1a0f]/85 backdrop-blur-sm border border-orange-900/30 relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-white/70 hover:text-white"
                >
                    ✕
                </button>

                <h1 className="text-white text-2xl text-center font-semibold">
                    {mode === "login" ? "Login" : "Sign up"}
                </h1>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                    {mode === "signup" && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full h-11 rounded-full px-4 bg-[#3a2415]/80 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-orange-700"
                            required
                        />
                    )}

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-11 rounded-full px-4 bg-[#3a2415]/80 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-orange-700"
                        required
                    />

                    {/* Password */}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full h-11 rounded-full px-4 bg-[#3a2415]/80 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-orange-700"
                        required
                    />

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full h-11 rounded-full bg-orange-700 hover:bg-orange-600 text-white transition"
                    >
                        {mode === "login" ? "Login" : "Sign up"}
                    </button>
                </form>

                {/* Switch */}
                <p
                    onClick={() =>
                        setMode((prev) => (prev === "login" ? "signup" : "login"))
                    }
                    className="text-white/70 text-sm text-center mt-4 cursor-pointer"
                >
                    {mode === "login"
                        ? "Don't have an account?"
                        : "Already have an account?"}

                    <span className="text-orange-500 ml-1 hover:underline">
                        {mode === "login" ? "Sign up" : "Login"}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default LoginAndSignup;