import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('custom-class');
  });

  it('renders as a button by default', () => {
    render(<Button>Default Button</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('passes props to button element', () => {
    render(
      <Button type="submit" disabled>
        Submit
      </Button>,
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('type', 'submit');
    expect(btn).toBeDisabled();
  });

  it('renders as a Slot when asChild is true', () => {
    // Slot just renders its child, so we can test by passing an anchor
    render(
      <Button asChild>
        <a href="/test">Link</a>
      </Button>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveTextContent('Link');
  });

  it('merges className with default classes', () => {
    render(<Button className="extra-class">Classes</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('extra-class');
    expect(btn.className).toContain('bg-blue-400');
  });
});
