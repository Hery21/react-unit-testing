/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import Item from './Item';

describe('Item', () => {
  const props = {
    item: {
      id: 1,
      imgUrl: 'image-url.png',
      name: 'Kings Chicken Box 9',
      price: 99000,
    },
    category: 'kids meal',
    user: 'John Doe',
    editItem: jest.fn(),
    deleteItem: () => {},
  };

  test('should render correct element', () => {
    render(<Item {...props} />);

    expect(screen.getByText(/Kings Chicken Box 9/i)).toBeInTheDocument();
    expect(screen.getByText('99000')).toBeInTheDocument();
    expect(screen.getByText('kids meal')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByTestId('td-category')).toBeInTheDocument();
  });

  test('should invoke editItem with id when button edit clicked', () => {
    render(<Item {...props} />);

    const buttonEdit = screen.getByTestId('btn-edit');
    fireEvent.click(buttonEdit);

    expect(props.editItem).toHaveBeenCalledWith(props.item.id);
    expect(props.editItem).toHaveBeenCalledTimes(1);
  });
});
