import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeDefined();
});

test('render header, logo, button, ', () => {
    const { container } = render(<App />);

    expect(container.querySelector('.App-header')).toBeInTheDocument();
    expect(container.querySelector('.App-logo')).toBeInTheDocument();
    expect(container.querySelector('.App-button')).toBeInTheDocument();
    expect(container.querySelector('.App-button')).toHaveTextContent(/Add More/);
})

test('quantity of App-item elements on first render', () => {
    const { container } = render(<App />);

    expect(container.querySelectorAll('.App-item')).toHaveLength(20);
})

test('quantity of App-item elements changes on click Add More', () => {
    const { getByText, asFragment } = render(<App />);
    const firstRender = asFragment();

    expect(firstRender.querySelectorAll('.App-item')).toHaveLength(20);
    fireEvent.click(getByText(/Add More/));
    expect(asFragment().querySelectorAll('.App-item')).toHaveLength(40);
})
