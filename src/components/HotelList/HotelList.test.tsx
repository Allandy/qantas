import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HotelList } from './HotelList';

const mockHotels = [
  {
    id: "test-1",
    property: {
      propertyId: "P1",
      title: "Test Hotel 1",
      address: ["123 Test St", "Test City"],
      previewImage: {
        url: "https://test.com/image1.jpg",
        caption: "Test Image 1",
        imageType: "PRIMARY"
      },
      rating: {
        ratingValue: 4.5,
        ratingType: "star"
      }
    },
    offer: {
      promotion: {
        title: "Special Deal",
        type: "MEMBER"
      },
      name: "Deluxe Room",
      displayPrice: {
        amount: 200,
        currency: "AUD"
      },
      savings: {
        amount: 50,
        currency: "AUD"
      },
      cancellationOption: {
        cancellationType: "FREE_CANCELLATION"
      }
    }
  },
  {
    id: "test-2",
    property: {
      propertyId: "P2",
      title: "Test Hotel 2",
      address: ["456 Test Ave", "Test Town"],
      previewImage: {
        url: "https://test.com/image2.jpg",
        caption: "Test Image 2",
        imageType: "PRIMARY"
      },
      rating: {
        ratingValue: 3,
        ratingType: "self"
      }
    },
    offer: {
      name: "Standard Room",
      displayPrice: {
        amount: 150,
        currency: "AUD"
      },
      savings: null,
      cancellationOption: {
        cancellationType: "NOT_REFUNDABLE"
      }
    }
  }
];

describe('HotelList Component', () => {
  it('renders all hotels', () => {
    render(<HotelList hotels={mockHotels} />);
    
    expect(screen.getByText('Test Hotel 1')).toBeInTheDocument();
    expect(screen.getByText('Test Hotel 2')).toBeInTheDocument();
  });

  it('displays hotel addresses correctly', () => {
    render(<HotelList hotels={mockHotels} />);
    
    expect(screen.getByText('123 Test St, Test City')).toBeInTheDocument();
    expect(screen.getByText('456 Test Ave, Test Town')).toBeInTheDocument();
  });

  it('shows promotion when available', () => {
    render(<HotelList hotels={mockHotels} />);
    
    expect(screen.getByText('Special Deal')).toBeInTheDocument();
  });

  it('displays free cancellation when applicable', () => {
    render(<HotelList hotels={mockHotels} />);
    
    const freeCancellation = screen.getByText('Free cancellation');
    expect(freeCancellation).toBeInTheDocument();
    expect(freeCancellation).toHaveClass('text-green-600');
  });

  it('shows savings amount when available', () => {
    render(<HotelList hotels={mockHotels} />);
    
    expect(screen.getByText('Save $50~')).toBeInTheDocument();
  });

  it('displays correct room prices', () => {
    render(<HotelList hotels={mockHotels} />);
    
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('150')).toBeInTheDocument();
  });
});