import React, { useEffect, useState } from "react";
import { RxPlusCircled, RxMinusCircled } from "react-icons/rx";

type AccordionItemProps = {
  triggerText: string;
  isOpen?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  triggerText,
  isOpen = false,
  onToggle,
  children,
}) => {
  const [maxHeight, setMaxHeight] = useState<string>(isOpen ? "none" : "0");

  useEffect(() => {
    if (isOpen) setMaxHeight("none");
    else setMaxHeight("0");
  }, [isOpen]);

  return (
    <div className="pb-6 border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full text-start flex gap-6 text-lg font-semibold text-gray-900"
      >
        <span className="flex-1"> {triggerText}</span>
        {isOpen ? (
          <RxMinusCircled size={24} className="text-gray-600" />
        ) : (
          <RxPlusCircled size={24} className="text-gray-600" />
        )}
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight }}
      >
        <p className="font-medium text-gray-400">{children}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
