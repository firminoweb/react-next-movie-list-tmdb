import { render, screen, fireEvent } from '@testing-library/react';
import ContentHeader from '../Header/Content/ContentHeader';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('ContentHeader Component', () => {
  it('renders the ContentHeader component with links', () => {
    render(<ContentHeader />);

    expect(screen.getByText('Pilar Movies')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Filmes' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Séries' })).toBeInTheDocument();
  });
});
