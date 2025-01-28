import { SortOrder, useHotels } from "./hooks/useHotels";

import React from "react";
import qantasLogo from "./assets/qantas-logo.png";
import { HotelList } from "./components/HotelList/HotelList";

function App() {
  const { data: hotels, sortOrder, setSortOrder } = useHotels();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as SortOrder);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white mt-6">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <img src={qantasLogo} alt="Qantas Logo" className="h-8" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">
            <span className="font-bold">{hotels.length}</span>{" "}
            <span className="italic text-gray-600">hotels in</span>{" "}
            <span className="font-bold">Sydney</span>
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-black font-bold">Sort by</span>
            <select
              className="border px-2 py-1 text-sm bg-white"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="price-high-low">Price high-low</option>
              <option value="price-low-high">Price low-high</option>
            </select>
          </div>
        </div>

        <HotelList hotels={hotels} />
      </main>
    </div>
  );
}

export default App;
