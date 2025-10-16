"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";

type Theme = "warm" | "fresh" | "elegant";

const themes = {
  warm: {
    name: "חם ומקצועי",
    colors: ["#86745f", "#f8c7c0", "#cac8ac"],
  },
  fresh: {
    name: "רענן ונקי",
    colors: ["#4a9d8f", "#f4e4c1", "#e8b4b8"],
  },
  elegant: {
    name: "אלגנטי ומודרני",
    colors: ["#2d3142", "#bfc0c0", "#ef8354"],
  },
};

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("elegant");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved theme from localStorage, default to elegant
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Set elegant as default theme
      document.documentElement.setAttribute("data-theme", "elegant");
    }
  }, []);

  const changeTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Theme Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-200 hover:scale-110"
        aria-label="שנה ערכת צבעים"
      >
        <Palette size={24} />
      </button>

      {/* Theme Options */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white rounded-xl shadow-2xl p-4 min-w-[250px]">
          <h3 className="font-heading font-semibold mb-3 text-right">בחר ערכת צבעים</h3>
          <div className="space-y-2">
            {(Object.keys(themes) as Theme[]).map((theme) => (
              <button
                key={theme}
                onClick={() => changeTheme(theme)}
                className={`w-full text-right p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                  currentTheme === theme ? "bg-gray-100 ring-2 ring-primary" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {themes[theme].colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{themes[theme].name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
