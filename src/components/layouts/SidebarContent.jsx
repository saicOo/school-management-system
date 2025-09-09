import {
  FaTachometerAlt,
  FaUsers,
  FaUserCheck,
  FaUserTie,
  FaWallet,
  FaSchool,
  FaFileAlt,
  FaBus,
  FaExclamationTriangle,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // import hook

// Define links with translation keys instead of plain names
const mainLinks = [
  { key: "dashboard", to: "/", icon: FaTachometerAlt },
  { key: "students", to: "/students", icon: FaUsers },
  { key: "teachers", to: "/teachers", icon: FaUserCheck },
  { key: "parents", to: "/parents", icon: FaUserTie },
  { key: "account", to: "/account", icon: FaWallet },
  { key: "class", to: "/class", icon: FaSchool },
  { key: "exam", to: "/exam", icon: FaFileAlt },
  { key: "transport", to: "/transport", icon: FaBus },
  { key: "notice", to: "/notice", icon: FaExclamationTriangle },
];

const bottomLinks = [{ key: "settings", to: "/settings", icon: FaCog }];

export function SidebarContent() {
  const { t } = useTranslation();

  return (
    <div className="w-60 h-full flex flex-col bg-sidebar">
      {/* Logo */}
      <div className="h-20 flex items-center gap-2 px-6">
        <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
          A
        </span>
        <h2 className="text-lg font-semibold tracking-wide">ACERO</h2>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {mainLinks.map(({ key, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive ? "text-black" : "text-muted hover:text-gray-800"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={`h-5 w-5 ${
                    isActive ? "text-primary" : "text-muted"
                  }`}
                />
                <span>{t(`sidebar.${key}`)}</span>
                {isActive && (
                  <span className="absolute -end-2 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-l-full bg-secondary" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom nav */}
      <div className="px-2 py-4 border-t border-gray-200">
        {bottomLinks.map(({ key, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive ? "text-black" : "text-muted hover:text-gray-800"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={`h-5 w-5 ${
                    isActive ? "text-primary" : "text-muted"
                  }`}
                />
                <span>{t(`sidebar.${key}`)}</span>
                {isActive && (
                  <span className="absolute -end-2 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-l-full bg-secondary" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
