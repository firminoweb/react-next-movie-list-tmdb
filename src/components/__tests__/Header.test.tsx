import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

jest.mock('../Header/Content/ContentHeader', () => () => <div>Mocked ContentHeader</div>);

describe('Header Component', () => {
  it('renders the Header component with ContentHeader', () => {
    render(<Header />);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    expect(screen.getByText('Mocked ContentHeader')).toBeInTheDocument();
  });
});
