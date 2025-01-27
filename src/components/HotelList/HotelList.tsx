import React from "react";
import type { Hotel } from "../../types/hotel";
import { Rating } from "../Rating/Rating";

interface HotelListProps {
  hotels: Hotel[];
}

export const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
  return (
    <div className="space-y-4">
      {hotels.map((hotel, index) => (
        <div key={hotel.id} className="bg-white overflow-hidden">
          <div className="flex h-48 gap-4">
            <div className="relative w-48">
              {hotel.offer.promotion && (
                <div className="absolute top-2 left-0 px-3 py-1 bg-white text-red-600 text-sm">
                  {hotel.offer.promotion.title}
                </div>
              )}
              <img
                src={hotel.property.previewImage.url}
                alt={hotel.property.previewImage.caption}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`flex-1 h-48 flex flex-col pt-4 border-t border-gray-200 ${
                index === hotels.length - 1 ? "border-b" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-semibold truncate max-w-[350px]">
                    {hotel.property.title}
                  </h2>
                  <Rating
                    rating={hotel.property.rating.ratingValue}
                    type={hotel.property.rating.ratingType}
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  {hotel.property.address.join(", ")}
                </p>
              </div>
              <div className="flex-1 flex items-center">
                <div className="flex justify-between items-center w-full">
                  <div className="space-y-1">
                    <a
                      href="#"
                      className="text-red-600 hover:text-red-700 underline text-sm"
                    >
                      {hotel.offer.name}
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      1 night total ({hotel.offer.displayPrice.currency})
                    </p>
                    <p className="text-3xl font-semibold flex justify-end items-start">
                      <span className="text-lg mr-0.5">$</span>
                      <span>{hotel.offer.displayPrice.amount}</span>
                    </p>
                    {hotel.offer.savings && (
                      <p className="text-red-600 text-base">
                        Save ${hotel.offer.savings.amount}~
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center">
                {hotel.offer.cancellationOption.cancellationType ===
                  "FREE_CANCELLATION" && (
                  <p className="text-green-600 text-sm">Free cancellation</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
