import React, { ReactNode } from "react";
import { useState } from "react";

type Props ={
    isOpen: boolean;
    setOpen: (a: boolean) => void;
    children: ReactNode;
}

const PopupModal = ({
    isOpen,
    setOpen,
    children
}: Props) => {
  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;
