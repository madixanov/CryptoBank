import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomDropdown({ options, value, onChange, classDrop, classSelected }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // ищем текущий выбранный объект
  const selected = options.find((opt) => opt.value === value);

  // закрывать при клике вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`dropdown ${classDrop}`} ref={ref}>
      <div
        className={`dropdown-selected ${classSelected}`}
        onClick={() => setOpen(!open)}
      >
        {selected ? selected.label : "Выберите"}
        <ChevronDown size={20} className={`chevron ${open ? "rotate" : ""}`} />
      </div>
      {open && (
          <ul className="dropdown-list">
            {options.map((opt) => (
              <li
                key={opt.value}
                className="dropdown-item"
                onClick={() => {
                  onChange(opt.value); // передаём только value
                  setOpen(false);
                }}
              >
                {opt.label}
              </li>
            ))}
          </ul>
      )}
    </div>
  );
}
