import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  it('render component', () => {
    render(<Button text="Submit" />);

    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});
