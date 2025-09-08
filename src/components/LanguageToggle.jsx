import { useEffect, useRef, useState } from "react";
import { FaGlobe, FaChevronDown, FaCheck } from "react-icons/fa";
import i18n from "../i18n"; // import your i18n config

/**
 * LanguageToggle Component
 *
 * - Displays a small button with a Globe icon and the current language code.
 * - Opens a dropdown menu to select the language (EN / AR) with emoji flags.
 * - Automatically updates <html lang=""> and <html dir=""> attributes (useful for RTL).
 * - Persists the selected language in localStorage so it remains after reload.
 * - Calls i18n.changeLanguage to update translations dynamically.
 *
 * Usage: <LanguageToggle /> 
 * Or:   <LanguageToggle onChange={(lang)=>...} />
 */
export default function LanguageToggle({ defaultLang = "en", onChange }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(
    () => localStorage.getItem("app_lang") || defaultLang
  );
  const ref = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Apply language + direction + i18n
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("app_lang", lang);
    i18n.changeLanguage(lang); // switch translations
    if (onChange) onChange(lang);
  }, [lang, onChange]);

  // Available language options
  const options = [
    { value: "en", label: "EN", name: "English", flag: "🇬🇧" },
    { value: "ar", label: "AR", name: "العربية", flag: "🇪🇬" },
  ];

  return (
    <div className="relative" ref={ref}>
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 px-3 py-1 focus:outline-none"
      >
        <FaGlobe className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">{lang.toUpperCase()}</span>
        <FaChevronDown className="w-3 h-3 text-gray-500" />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute end-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul role="menu" className="p-1">
            {options.map((o) => (
              <li key={o.value}>
                <button
                  role="menuitemradio"
                  aria-checked={lang === o.value}
                  onClick={() => {
                    setLang(o.value);
                    setOpen(false);
                  }}
                  className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 ${
                    lang === o.value ? "bg-gray-50" : ""
                  }`}
                >
                  <span className="text-sm">{o.flag}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{o.name}</div>
                    <div className="text-xs text-muted">{o.label}</div>
                  </div>
                  {lang === o.value && (
                    <FaCheck className="w-3 h-3 text-primary" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
