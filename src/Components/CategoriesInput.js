import { Button, Form } from 'react-bootstrap';
import CustomFormInput from './CustomFormInput';

function CategoriesInput({ categoryName, handleChange, handleSubmit }) {
  return (
    <div className="container">
      <h3>Categories</h3>
      <Form onSubmit={handleSubmit}>
        <CustomFormInput name="name" value={categoryName} handleChange={handleChange} />

        <div className="d-grid">
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CategoriesInput;
