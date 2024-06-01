import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../services/CartContext/index.jsx";

export default function CartButton() {
  const { cart } = useCart();
  const itemCount = cart.length;

  return (
    <div className="relative inline-block">
      <Link to="/cart" className="relative">
        <svg
          fill="#ffff"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="35px"
          height="35px"
          viewBox="0 0 902.86 902.86"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
               M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
              />
              <path
                d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
              c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
              c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
              C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
              c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
               M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
              S619.162,694.432,619.162,716.897z"
              />
            </g>
          </g>
        </svg>
        {itemCount > 0 && (
          <div className="absolute top-0 left-5 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {itemCount}
          </div>
        )}
      </Link>
    </div>
  );
}
