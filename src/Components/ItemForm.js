import { Button, Form } from 'react-bootstrap';
import CustomFormInput from './CustomFormInput';

function ItemForm(
  {
    categories,
    handleSubmit,
    itemId,
    itemName,
    itemDescription,
    itemPrice,
    itemImgUrl,
    itemCategoryId,
    handleItemNameChange,
    handleItemDescriptionChange,
    handleItemPriceChange,
    handleItemImgUrlChange,
    handleItemCategoryId,
    handleItemId,
  },
) {
  return (
    <div className="container">
      <h3>Menu Item</h3>
      <Form onSubmit={handleSubmit} data-testid="form-item">
        <Form.Group className="mb-3" hidden>
          <Form.Control type="number" value={itemId} onChange={handleItemId} />
        </Form.Group>
        <CustomFormInput name="name" value={itemName} handleChange={handleItemNameChange} />
        <CustomFormInput name="description" value={itemDescription} handleChange={handleItemDescriptionChange} />
        <CustomFormInput name="price" value={itemPrice} handleChange={handleItemPriceChange} />
        <CustomFormInput name="img url" value={itemImgUrl} handleChange={handleItemImgUrlChange} />

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select onChange={handleItemCategoryId} value={itemCategoryId}>
            { categories.length === 0
              ? (<option disabled>No Category</option>)
              : categories.map((category) => (
                (
                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </option>
                )
              ))}
          </Form.Select>
        </Form.Group>

        <div className="d-grid">
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ItemForm;
