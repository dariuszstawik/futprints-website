import React, { useState } from "react";

const languageOptions = [
  { label: "Polish", value: "pl", flag: "🇵🇱" },
  { label: "English", value: "en", flag: "🇺🇸" },
  { label: "Ukrainian", value: "uk", flag: "🇺🇦" },
];

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <label htmlFor="language-dropdown">Select Language:</label>
      <select
        id="language-dropdown"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="">Select...</option>
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.flag} {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;
