import { render, screen } from '@testing-library/react';
import {
  BrowserRouter,
  MemoryRouter,
} from 'react-router-dom';

import fireEvent from '@testing-library/user-event';
import App from './App';

function MemoryRouterCategoryWrapper({ children }) {
  return (
    <MemoryRouter initialEntries={['/categories']}>
      {children}
    </MemoryRouter>
  );
}

describe('App', () => {
  test('should render navbar in root page', () => {
    render(<App />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('link-home')).toBeInTheDocument();
    expect(screen.getByTestId('link-category')).toBeInTheDocument();
  });

  test('should render in root page', () => {
    render(<App />, { wrapper: MemoryRouter });

    // todo: assert another element
    expect(screen.getByTestId('form-item')).toBeInTheDocument();
  });

  test('should render category page when navigate to /categories', () => {
    render(<App />, { wrapper: MemoryRouterCategoryWrapper });

    expect(screen.getByTestId('categories-table')).toBeInTheDocument();
  });

  test('should render category page when navigate link category clicked', () => {
    render(<App />, { wrapper: BrowserRouter });

    const categoryNav = screen.getByTestId('link-category');
    fireEvent.click(categoryNav);

    expect(screen.getByTestId('categories-table')).toBeInTheDocument();
  });
});
