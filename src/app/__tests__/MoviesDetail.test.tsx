import { render, screen, waitFor } from '@testing-library/react';
import MoviesDetail from '../movies/details/[id]/page';
import axios from 'axios';
import '@testing-library/jest-dom';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('MoviesDetail Component', () => {
  it('handles error during data fetching', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    console.error = jest.fn();

    render(<MoviesDetail params={{ id: "1" }} />);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith("Failed to fetch movie details or recommendations", new Error('Network Error'));
    });

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
});