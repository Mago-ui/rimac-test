import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "../LoginForm";
import { MemoryRouter } from "react-router-dom";

describe("LoginForm", () => {
  test("renderiza correctamente los elementos del formulario", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    // Verifica que existan los elementos principales
    expect(screen.getByText(/Seguro Salud Flexible/i)).toBeInTheDocument();
    expect(screen.getByText(/Creado para ti y tu familia/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Cotiza aquí/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Nro. de Documento/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Celular/i)).toBeInTheDocument();
  });

  test("muestra mensajes de error si se envía vacío", async () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole("button", { name: /Cotiza aquí/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      // Solo verificamos los mensajes que realmente aparecen
      expect(screen.getByText(/Ingrese un Número de DNI/i)).toBeInTheDocument();
      expect(screen.getByText(/Ingrese un Número de Celular/i)).toBeInTheDocument();
    });
  });

  test("permite llenar los campos sin errores", async () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Nro. de Documento/i), {
      target: { value: "12345678" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Celular/i), {
      target: { value: "987654321" },
    });

    // Marca los checkboxes
    const checkboxes = screen.getAllByRole("checkbox");
    checkboxes.forEach((cb) => fireEvent.click(cb));

    // Enviamos el formulario
    const submitButton = screen.getByRole("button", { name: /Cotiza aquí/i });
    fireEvent.click(submitButton);

    // No deben aparecer errores
    await waitFor(() => {
      expect(screen.queryByText(/Ingrese un Número de DNI/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Ingrese un Número de Celular/i)).not.toBeInTheDocument();
    });
  });
});
