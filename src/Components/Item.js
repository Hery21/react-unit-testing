import { Button } from 'react-bootstrap';

function Item({
  item, category, user, editItem, deleteItem,
}) {
  return (
    <tr>
      <td>
        <img height="100" width="100" className="img-thumbnail" src={item.imgUrl} alt={item.id} />
        {item.name}
      </td>
      <td>{item.price}</td>
      <td data-testid="td-category">{category}</td>
      <td data-testid="td-user">{user}</td>
      <td>
        <Button data-testid="btn-edit" variant="primary" onClick={() => editItem(item.id)}>
          Edit
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={() => deleteItem(item.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default Item;
