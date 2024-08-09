import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Home Component', () => {
  it('renders the HomePage component', () => {
    (useRouter as jest.Mock).mockReturnValue({
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
    });

    render(<Home />);
    expect(screen.getByText('Bem vindo.')).toBeInTheDocument();
  });
});
