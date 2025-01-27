import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useHotels } from "./useHotels";

describe("useHotels Hook", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("should start with loading state", () => {
    const { result } = renderHook(() => useHotels());

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toHaveLength(0);
    expect(result.current.error).toBeNull();
  });

  it("should load hotels after mount", async () => {
    const { result } = renderHook(() => useHotels());

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.data.length).toBeGreaterThan(0);
    expect(result.current.error).toBeNull();
  });

  it("should initialize with price-high-low sort order", async () => {
    const { result } = renderHook(() => useHotels());

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(result.current.sortOrder).toBe("price-high-low");
  });

  it("should sort hotels by price high to low by default", async () => {
    const { result } = renderHook(() => useHotels());

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    const prices = result.current.data.map(
      (hotel) => hotel.offer.displayPrice.amount
    );
    const sortedPrices = [...prices].sort((a, b) => b - a);

    expect(prices).toEqual(sortedPrices);
  });

  it("should sort hotels by price low to high when changed", async () => {
    const { result } = renderHook(() => useHotels());

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    act(() => {
      result.current.setSortOrder("price-low-high");
    });

    const prices = result.current.data.map(
      (hotel) => hotel.offer.displayPrice.amount
    );
    const sortedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);
  });

  it("should maintain data integrity when changing sort order", async () => {
    const { result } = renderHook(() => useHotels());

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    const initialLength = result.current.data.length;

    act(() => {
      result.current.setSortOrder("price-low-high");
    });

    act(() => {
      result.current.setSortOrder("price-high-low");
    });

    expect(result.current.data.length).toBe(initialLength);
    expect(result.current.data.every((hotel) => hotel.id)).toBe(true);
  });
});
