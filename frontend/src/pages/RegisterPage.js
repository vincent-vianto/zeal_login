import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Container, Card, Form, Button } from "react-bootstrap";
import { AuthService } from "../services/AuthServices";

const Register = () => {
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    AuthService.register(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err.response.data.message);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  };

  return (
    <Container className="mt-5">
      {error && <Alert variant="danger">{error}</Alert>}
      <Card className="p-5">
        <Card.Title>Register</Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                {...register("nama", { required: "Required" })}
                isInvalid={errors.nama}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nama?.message}
              </Form.Control.Feedback>
            </Form.Group>

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

            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                {...register("confirmPassword", {
                  required: "Required",
                  validate: (value) =>
                    value === watch("password") || "Passwords don't match.",
                })}
                isInvalid={errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>No. telp</Form.Label>
              <Form.Control
                type="tel"
                {...register("telp", {
                  required: "Required",
                })}
                isInvalid={errors.telp}
              />
              <Form.Control.Feedback type="invalid">
                {errors.telp?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit">Submit form</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
