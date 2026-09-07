"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { City, State } from "country-state-city";
import { Input } from "@/components/ui/input";

type LocationOption = { city: string; state: string };

const nigeriaLocations: LocationOption[] = State.getStatesOfCountry("NG").flatMap((state) =>
  City.getCitiesOfState("NG", state.isoCode).map((city) => ({
    city: city.name,
    state: state.name,
  }))
);

export default function LocationAutocomplete({
  id,
  value,
  onChange,
  required,
  placeholder = "City, State",
  className,
}: {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => {
    const query = value.trim().toLowerCase();
    if (!query) return [];
    return nigeriaLocations
      .filter((location) => location.city.toLowerCase().startsWith(query))
      .slice(0, 6);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectLocation = (location: LocationOption) => {
    onChange(`${location.city}, ${location.state}`);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || suggestions.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => (prev <= 0 ? suggestions.length - 1 : prev - 1));
    } else if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      selectLocation(suggestions[activeIndex]);
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <Input
        id={id}
        type="text"
        autoComplete="off"
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
          setIsOpen(true);
          setActiveIndex(-1);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        className={className}
      />

      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-30 mt-1.5 max-h-56 w-full overflow-auto rounded-xl bg-white py-1 shadow-lg ring-1 ring-black/5">
          {suggestions.map((location, index) => (
            <li key={`${location.city}-${location.state}`}>
              <button
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => selectLocation(location)}
                className={`flex w-full items-center justify-between px-3.5 py-2 text-left text-sm ${
                  index === activeIndex
                    ? "bg-primary-25 text-primary"
                    : "text-ink hover:bg-primary-25"
                }`}
              >
                <span>{location.city}</span>
                <span className="text-xs text-ink/50">{location.state}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
