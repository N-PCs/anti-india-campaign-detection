import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../src/components/Dashboard';
import RealTimeFeed from '../../src/components/RealTimeFeed';

// Mock data
const mockStats = {
  twitter: 1245,
  youtube: 876,
  facebook: 932,
  telegram: 567,
  total: 3620,
  high_risk: 845,
  medium_risk: 1245,
  low_risk: 1530
};

const mockFeedItems = [
  {
    id: 'test1',
    platform: 'Twitter',
    content: 'Test detection content',
    sentiment: 'negative',
    risk: 'high',
    coordinated: true,
    classification: 'Hate Speech',
    topic: 'Kashmir',
    timestamp: new Date().toISOString()
  }
];

describe('Component Tests', () => {
  test('Dashboard renders correctly', () => {
    render(<Dashboard stats={mockStats} />);
    
    // Check if platform stats are displayed
    expect(screen.getByText('Twitter Monitoring')).toBeInTheDocument();
    expect(screen.getByText('YouTube Monitoring')).toBeInTheDocument();
    expect(screen.getByText('Facebook Monitoring')).toBeInTheDocument();
    expect(screen.getByText('Telegram Monitoring')).toBeInTheDocument();
    
    // Check if stats values are displayed
    expect(screen.getByText('1245')).toBeInTheDocument();
    expect(screen.getByText('876')).toBeInTheDocument();
    expect(screen.getByText('932')).toBeInTheDocument();
    expect(screen.getByText('567')).toBeInTheDocument();
  });

  test('RealTimeFeed renders correctly', () => {
    render(<RealTimeFeed feedItems={mockFeedItems} />);
    
    // Check if feed header is displayed
    expect(screen.getByText('Real-time Threat Detection Feed')).toBeInTheDocument();
    
    // Check if detection content is displayed
    expect(screen.getByText('Test detection content')).toBeInTheDocument();
    
    // Check if platform icon is present
    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });

  test('RealTimeFeed handles empty state', () => {
    render(<RealTimeFeed feedItems={[]} />);
    
    // Check if empty state message is displayed
    expect(screen.getByText('Monitoring digital platforms for anti-India campaigns...')).toBeInTheDocument();
  });
});