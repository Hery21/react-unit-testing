import { Button } from 'react-bootstrap';

function Category({ category, deleteCategory }) {
  return (
    <tr>
      <td>{category.name}</td>
      <td>{category.createdAt}</td>
      <td>{category.updatedAt}</td>
      <td>
        <Button variant="danger" onClick={() => deleteCategory(category.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default Category;
