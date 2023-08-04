import React, { useState } from "react";
import "./Header.css"

const Header = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopyEmail = () => {
    const email = "dicenadie2@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000); // Mostrar durante 5 segundos
      })
      .catch((error) => console.error("Error copying email:", error));
  };

  return (
    <div className="text-right relative">
      <button
        className="rounded-full border-2 border-black p-5 py-1 m-6 hover:bg-black hover:text-white hover:border-gray-600"
        onClick={handleCopyEmail}
      >
        Contact me
      </button>
      {showNotification && (
        <div
          className="animate-notificationFadeOut bg-green-500 text-white px-4 py-2 rounded-lg absolute bottom-5 right-5 mt-20"
          onAnimationEnd={() => setShowNotification(false)}
        >
          Mail address copied to your clipboard {":)"}
        </div>
      )}
    </div>
  );
};

export default Header;
