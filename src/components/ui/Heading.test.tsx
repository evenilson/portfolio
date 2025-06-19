import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading component', () => {
  it('renders with default props (size="md") as <h2>', () => {
    render(<Heading>Default text</Heading>);
    const heading = screen.getByText('Default text');
    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveClass('text-2xl');
  });

  it('renders with size="sm"', () => {
    render(<Heading size="sm">Small heading</Heading>);
    const heading = screen.getByText('Small heading');
    expect(heading).toHaveClass('text-xl');
  });

  it('renders with size="lg"', () => {
    render(<Heading size="lg">Large heading</Heading>);
    const heading = screen.getByText('Large heading');
    expect(heading).toHaveClass('text-3xl');
  });

  it('applies custom className correctly', () => {
    render(<Heading className="text-red-500">With custom class</Heading>);
    const heading = screen.getByText('With custom class');
    expect(heading).toHaveClass('text-red-500');
  });

  it('merges size and custom className correctly', () => {
    render(
      <Heading size="sm" className="text-red-500">
        Combined
      </Heading>,
    );
    const heading = screen.getByText('Combined');
    expect(heading).toHaveClass('text-xl', 'text-red-500');
  });

  it('renders with custom element when asChild is true', () => {
    render(
      <Heading asChild>
        <span data-testid="custom-heading">Custom element</span>
      </Heading>,
    );
    const span = screen.getByTestId('custom-heading');
    expect(span.tagName).toBe('SPAN');
    expect(span).toHaveTextContent('Custom element');
  });
});
