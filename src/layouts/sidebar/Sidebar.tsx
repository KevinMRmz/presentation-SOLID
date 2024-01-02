import React from "react";
import img from "../../assets/imgs/MicrosoftTeams-image.png";
import img2 from "../../assets/imgs/MicrosoftTeams-image-o.png";
import img3 from "../../assets/imgs/MicrosoftTeams-image-l.png";
import img4 from "../../assets/imgs/MicrosoftTeams-image-i.png";
import img5 from "../../assets/imgs/MicrosoftTeams-image-d.png";

import { PiSignOutLight } from "react-icons/pi";
import Swal from "sweetalert2";

export default function Sidebar(props: any) {
  const solidModal = () => {
    Swal.fire({
      title: "SRP",
      text: "Example of how to use the Single Responsability principle",
      imageUrl: img,
      imageWidth: 250,
      imageHeight: 400,
      imageAlt: "Custom image",
    });
  };

  const openModal = () => {
    Swal.fire({
      title: "OCP",
      text: "Example of how to use the Open Close principle",
      imageUrl: img4,
      imageWidth: 500,
      imageHeight: 300,
      imageAlt: "Custom image",
    });
  };

  const liskovModal = () => {
    Swal.fire({
      title: "LSP",
      text: "Example of how to use the Liskov Sustitution",
      imageUrl: img2,
      imageWidth: 420,
      imageHeight: 450,
      imageAlt: "Custom image",
    });
  };

  const interfaceModal = () => {
    Swal.fire({
      title: "ISP",
      text: "Example of how to use the Interface Segregation principle",
      imageUrl: img5,
      imageWidth: 500,
      imageHeight: 160,
      imageAlt: "Custom image",
    });
  };

  const dependencyModal = () => {
    Swal.fire({
      title: "DIP",
      text: "Example of how to use the Dependency Inversion principle",
      imageUrl: img3,
      imageWidth: 500,
      imageHeight: 400,
      imageAlt: "Custom image",
    });
  };

  return (
    <div className=" absolute top-0 left-7">
      <ul className="flex flex-col">
        <li>
          <button
            className="shadow-lg w-16 h-16 rounded-full bg-lime-600 mt-3 font-bold duration-300 ease-in hover:w-20 hover:h-20"
            onClick={() => solidModal()}
          >
            S
          </button>
        </li>

        <li>
          <button
            className="drop-shadow-2xl w-16 h-16 rounded-full bg-amber-500 mt-3 font-bold duration-300 ease-in hover:w-20 hover:h-20"
            onClick={() => openModal()}
          >
            O
          </button>
        </li>

        <li>
          <button
            className="drop-shadow-2xl w-16 h-16 rounded-full bg-green-500 mt-3 font-bold duration-300 ease-in hover:w-20 hover:h-20"
            onClick={() => liskovModal()}
          >
            L
          </button>
        </li>

        <li>
          <button
            className="drop-shadow-2xl w-16 h-16 rounded-full bg-indigo-600 mt-3 font-bold duration-300 ease-in hover:w-20 hover:h-20"
            onClick={() => interfaceModal()}
          >
            I
          </button>
        </li>

        <li>
          <button
            className="drop-shadow-2xl w-16 h-16 rounded-full bg-blue-800 mt-3 font-bold duration-300 ease-in hover:w-20 hover:h-20"
            onClick={() => dependencyModal()}
          >
            D
          </button>
        </li>

        <li>
          <button
            className="drop-shadow-2xl w-16 h-16 rounded-full bg-blue-500 mt-3 font-bold duration-300 ease-in hover:w-20 hover:h-20 grid place-content-center"
            onClick={() => props.setShowApp(false)}
          >
            <PiSignOutLight />
          </button>
        </li>
      </ul>
    </div>
  );
}
