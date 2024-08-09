import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';


describe('Home Component', () => {
  it('renders the HomePage component', () => {
    render(<Home />);
    expect(screen.getByText('Bem vindo.')).toBeInTheDocument();
  });
});
