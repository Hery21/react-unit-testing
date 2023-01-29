import { Form } from 'react-bootstrap';

function CustomFormInput({ value, name, handleChange }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{name.toUpperCase()}</Form.Label>
      <Form.Control type="text" name={name} placeholder={name[0].toUpperCase() + name.substring(1)} value={value} onChange={handleChange} />
    </Form.Group>
  );
}

export default CustomFormInput;
