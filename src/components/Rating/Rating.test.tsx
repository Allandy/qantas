import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Rating } from './Rating';

describe('Rating Component', () => {
  describe('Star Ratings', () => {
    it('renders correct number of filled and empty stars for whole numbers', () => {
      render(<Rating rating={3} type="star" />);
      
      expect(screen.queryAllByTestId('filled-star')).toHaveLength(3);
      expect(screen.queryAllByTestId('empty-star')).toHaveLength(2);
      expect(screen.queryAllByTestId('half-star')).toHaveLength(0);
    });

    it('renders half star correctly', () => {
      render(<Rating rating={3.5} type="star" />);
      
      expect(screen.queryAllByTestId('filled-star')).toHaveLength(3);
      expect(screen.queryAllByTestId('half-star')).toHaveLength(1);
      expect(screen.queryAllByTestId('empty-star')).toHaveLength(1);
    });

    it('handles decimal ratings less than 0.5', () => {
      render(<Rating rating={3.2} type="star" />);
      
      expect(screen.queryAllByTestId('filled-star')).toHaveLength(3);
      expect(screen.queryAllByTestId('empty-star')).toHaveLength(2);
      expect(screen.queryAllByTestId('half-star')).toHaveLength(0);
    });

    it('handles decimal ratings greater than or equal to 0.5', () => {
      render(<Rating rating={3.7} type="star" />);
      
      expect(screen.queryAllByTestId('filled-star')).toHaveLength(3);
      expect(screen.queryAllByTestId('half-star')).toHaveLength(1);
      expect(screen.queryAllByTestId('empty-star')).toHaveLength(1);
    });
  });

  describe('Circle Ratings', () => {
    it('renders correct number of filled and empty circles for whole numbers', () => {
      render(<Rating rating={4} type="self" />);
      
      expect(screen.queryAllByTestId('filled-circle')).toHaveLength(4);
      expect(screen.queryAllByTestId('empty-circle')).toHaveLength(1);
      expect(screen.queryAllByTestId('half-circle')).toHaveLength(0);
    });

    it('renders half circle correctly', () => {
      render(<Rating rating={4.5} type="self" />);
      
      expect(screen.queryAllByTestId('filled-circle')).toHaveLength(4);
      expect(screen.queryAllByTestId('half-circle')).toHaveLength(1);
      expect(screen.queryAllByTestId('empty-circle')).toHaveLength(0);
    });

    it('handles decimal ratings less than 0.5', () => {
      render(<Rating rating={4.2} type="self" />);
      
      expect(screen.queryAllByTestId('filled-circle')).toHaveLength(4);
      expect(screen.queryAllByTestId('empty-circle')).toHaveLength(1);
      expect(screen.queryAllByTestId('half-circle')).toHaveLength(0);
    });

    it('handles decimal ratings greater than or equal to 0.5', () => {
      render(<Rating rating={4.7} type="self" />);
      
      expect(screen.queryAllByTestId('filled-circle')).toHaveLength(4);
      expect(screen.queryAllByTestId('half-circle')).toHaveLength(1);
      expect(screen.queryAllByTestId('empty-circle')).toHaveLength(0);
    });
  });

  describe('Edge Cases', () => {
    it('handles 0 rating', () => {
      render(<Rating rating={0} type="star" />);
      
      expect(screen.queryAllByTestId('empty-star')).toHaveLength(5);
      expect(screen.queryAllByTestId('filled-star')).toHaveLength(0);
      expect(screen.queryAllByTestId('half-star')).toHaveLength(0);
    });

    it('handles 5 rating', () => {
      render(<Rating rating={5} type="self" />);
      
      expect(screen.queryAllByTestId('filled-circle')).toHaveLength(5);
      expect(screen.queryAllByTestId('empty-circle')).toHaveLength(0);
      expect(screen.queryAllByTestId('half-circle')).toHaveLength(0);
    });
  });
});