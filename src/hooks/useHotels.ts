import { useEffect, useMemo, useState } from "react";

import { mockData } from "./mockData";

export type SortOrder = "price-high-low" | "price-low-high";

interface Hotel {
  id: string;
  property: {
    propertyId: string;
    title: string;
    address: string[];
    previewImage: {
      url: string;
      caption: string;
      imageType: string;
    };
    rating: {
      ratingValue: number;
      ratingType: string;
    };
  };
  offer: {
    promotion?: {
      title: string;
      type: string;
    };
    name: string;
    displayPrice: {
      amount: number;
      currency: string;
    };
    savings?: {
      amount: number;
      currency: string;
    } | null;
    cancellationOption: {
      cancellationType: string;
    };
  };
}

const fetchHotels = async (): Promise<Hotel[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockData;
};

export const useHotels = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("price-high-low");
  const [data, setData] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHotels = async () => {
      try {
        setLoading(true);
        const hotels = await fetchHotels();
        setData(hotels);
        setError(null);
      } catch (err) {
        setError("Failed to fetch hotels");
      } finally {
        setLoading(false);
      }
    };

    loadHotels();
  }, []);

  const sortedHotels = useMemo(() => {
    const hotels = [...data];

    switch (sortOrder) {
      case "price-high-low":
        return hotels.sort(
          (a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount
        );
      case "price-low-high":
        return hotels.sort(
          (a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount
        );
      default:
        return hotels;
    }
  }, [data, sortOrder]);

  return {
    data: sortedHotels,
    loading,
    error,
    sortOrder,
    setSortOrder
  };
};
