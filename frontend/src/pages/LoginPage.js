import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Container, Form, Button, Card } from "react-bootstrap";
import { AuthService } from "../services/AuthServices";

const Login = ({ history }) => {
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    AuthService.login(data)
      .then((res) => {
        history.push("/");
        window.location.reload();
      })
      .catch((err) => setError(err.response.data.message));
  };

  return (
    <Container className="mt-5">
      {error && <Alert variant="danger">{error}</Alert>}
      <Card className="p-5">
        <Card.Title>Login</Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register("email", { required: "Required" })}
                isInvalid={errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                {...register("password", { required: "Required" })}
                isInvalid={errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit">Submit form</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
