import { useTheme } from "../../context/useTheme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setTheme("light")}
       className={`px-4 py-2 rounded-xl transition-all duration-300 ${
  theme === "light"
    ? "bg-blue-500 text-white"
    : "bg-zinc-800/70 text-zinc-300 hover:bg-zinc-700"
}`}
      >
        ☀️ Light
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`px-4 py-2 rounded-xl transition-all duration-300 ${
  theme === "dark"
    ? "bg-blue-500 text-white"
    : "bg-zinc-800/70 text-zinc-300 hover:bg-zinc-700"
}`}
      >
        🌙 Dark
      </button>

      <button
        onClick={() => setTheme("black")}
       className={`px-4 py-2 rounded-xl transition-all duration-300 ${
  theme === "black"
    ? "bg-blue-500 text-white"
    : "bg-zinc-800/70 text-zinc-300 hover:bg-zinc-700"
}`}
      
      >
        ⚫ Black
      </button>
    </div>
  );
};

export default ThemeSwitcher;