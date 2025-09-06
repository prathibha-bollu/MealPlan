import { useState } from "react";

export default function UserProfile() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Profile", "Contact", "Sign Out"];

  return (
    <div className="relative">
      {/* Profile Trigger */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm text-foreground font-semibold">Hi, Jane</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="w-8 h-8 rounded-full border border-border-light"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white border border-border-light rounded-lg shadow-lg z-50">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={(e) => e.preventDefault()} // does nothing
              className="w-full text-left px-4 py-2 hover:bg-primary/10 transition-colors rounded-t-lg last:rounded-b-lg"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
