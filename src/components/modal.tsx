import type { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
// ====================================
// Modal props reusable
// ==================================
interface ModalProps {
  size: "sm" | "md" | "lg";
  isOpen: boolean;
  className?: string;
  onClose: () => void;
  title: string;
  children?: ReactNode; // allows flexible content inside modal
}

export const Modal = ({
  size,
  isOpen,
  className,
  onClose,
  title,
  children,
}: ModalProps) => {
  const modalSize = {
    sm: "w-full max-w-sm",
    md: "w-full max-w-lg",
    lg: "w-full max-w-2xl",
  };

  if (!isOpen) return null; // modal hidden when isOpen is false

  return (
    // Overlay
    <div
      className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // clicking overlay closes modal
    >
      {/* Modal container */}
      <div
        className={`${modalSize[size]} ${className} bg-white m-3 p-6 rounded-lg relative`}
        onClick={(e) => e.stopPropagation()} // prevent overlay click from closing
      >
        <div className="flex items-center justify-between mb-5">
          {/* Modal title */}
          <div className="text-lg font-[600]  ">{title}</div>
          {/* Close button */}
          <button
            onClick={onClose}
            className="   cursor-pointer hover:text-gray-800"
          >
            <IoMdClose size={20} />
          </button>
        </div>
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Modal content */}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
