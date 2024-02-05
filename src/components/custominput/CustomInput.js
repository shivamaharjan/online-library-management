import React from 'react'
import { Form } from 'react-bootstrap';

function CustomInput({label, ...rest}) {
  return (
    <div>
      <Form.Group className="mb-3 ms-5 me-5">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} />
      </Form.Group>
    </div>
  );
}

export default CustomInput