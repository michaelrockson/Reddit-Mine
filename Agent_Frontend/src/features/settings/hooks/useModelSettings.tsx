import { useState } from "react";
import { MODEL_OPTIONS } from "../models/ModelSettings";

export function useModelSettings() {
  const [model, setModel] = useState(MODEL_OPTIONS[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return {
    model,
    setModel,
    dropdownOpen,
    setDropdownOpen,
  };
}
