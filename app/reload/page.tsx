"use client";

import React from "react";

export default function Reload() {
  React.useEffect(() => {
    
    window.onbeforeunload = (event: Event) => {
      window.sessionStorage.setItem("is_reloaded", "___");
      setTimeout(() => {
        console.log('last breathing')
        if (sessionStorage.getItem("is_reloaded")) {
          console.log("Page is being reloaded.");
        } else {
          console.log("Page is being closed.");
        }

        sessionStorage.removeItem("is_reloaded");
      }, 50);
    };
  }, []);

  return (
    <div>
      <button onClick={() => window.location.reload()}></button>
    </div>
  );
}
