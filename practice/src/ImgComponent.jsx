// src = "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

import { useState } from "react";

const ImgComponent = () => {
  const altSrc =
    "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D";

  const [ImgSrc, setImgSrc] = useState(
    "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const handleError = () => {
    setImgSrc(altSrc);
  };
  return (
    <div className="m-4">
      <h1>Image Component</h1>
      <img src={ImgSrc} alt="Sample Dog Image" onError={handleError} />
    </div>
  );
};

export default ImgComponent;
