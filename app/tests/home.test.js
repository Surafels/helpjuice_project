import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../page';

describe("Home Page", () => {
    it("renders the main title", () => {
        render(<Home />);
        expect(
            screen.getByText("Front-End developer test project")
        ).toBeInTheDocument();
    });
});