import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const initialTheme = savedTheme || "dark";

        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <label className="switch">
            <input
                type="checkbox"
                className="input__check"
                checked={theme === "dark"}
                onChange={toggleTheme}
            />
            <span className="slider"></span>
        </label>
    );
};

export default ThemeToggle;
