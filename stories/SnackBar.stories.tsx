import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { SnackBar, Button } from '../src';

const meta = {
  title: 'Container/SnackBar',
  component: SnackBar,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ],
    },
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
    autoHideDuration: {
      control: { type: 'number' },
    },
    message: { control: 'text' },
  },
} satisfies Meta<typeof SnackBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const SnackBarWithState: React.FC<
  Omit<React.ComponentProps<typeof SnackBar>, 'open' | 'onClose'>
> = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Button
        label="Show SnackBar"
        onClick={() => setOpen(true)}
      />
      <SnackBar
        {...props}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

const AllPositionsDemo: React.FC<
  Omit<React.ComponentProps<typeof SnackBar>, 'open' | 'onClose' | 'position'>
> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [position, setPosition] =
    React.useState<React.ComponentProps<typeof SnackBar>['position']>('bottom');

  const triggerSnackBar = (
    newPosition: React.ComponentProps<typeof SnackBar>['position'],
  ) => {
    setPosition(newPosition);
    setOpen(false);
    // Force le re-render fermé puis ouvert pour bien relancer l'animation
    requestAnimationFrame(() => setOpen(true));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1rem',
        }}
      >
        <Button label="Top" onClick={() => triggerSnackBar('top')} />
        <Button label="Bottom" onClick={() => triggerSnackBar('bottom')} />
        <Button label="Left" onClick={() => triggerSnackBar('left')} />
        <Button label="Right" onClick={() => triggerSnackBar('right')} />
        <Button
          label="Top-left"
          onClick={() => triggerSnackBar('top-left')}
        />
        <Button
          label="Top-right"
          onClick={() => triggerSnackBar('top-right')}
        />
        <Button
          label="Bottom-left"
          onClick={() => triggerSnackBar('bottom-left')}
        />
        <Button
          label="Bottom-right"
          onClick={() => triggerSnackBar('bottom-right')}
        />
      </div>

      <SnackBar
        {...props}
        position={position}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export const Basic: Story = {
  args: {
    position: 'bottom',
    message: 'This is a snackbar message.',
    autoHideDuration: 5000,
    open: false,
    variant: "warning"
  },
  render: ({ open: _open, ...args }) => <SnackBarWithState {...args} />,
};

export const TopPosition: Story = {
  args: {
    position: 'top',
    message: 'Snackbar at the top.',
    autoHideDuration: 5000,
    open: true,
    variant: "info"
  },
  render: ({ open: _open, ...args }) => <SnackBarWithState {...args} />,
};

export const LeftPosition: Story = {
  args: {
    position: "top-left",
    message: 'Snackbar on the left.',
    autoHideDuration: 5000,
    open: true,
  },
  render: ({ open: _open, ...args }) => <SnackBarWithState {...args} />,
};

export const RightPosition: Story = {
  args: {
    position: 'bottom-right',
    message: 'Snackbar on the bottom right.',
    autoHideDuration: 5000,
    open: true,
    variant: "success"
  },
  render: ({ open: _open, ...args }) => <SnackBarWithState {...args} />,
};

export const AllPositions: Story = {
  args: {
    message: 'Snackbar positions demo.',
    autoHideDuration: 3000,
    variant: 'info',
    open: false,
  },
  render: ({ open: _open, position: _position, ...args }) => (
    <AllPositionsDemo {...args} />
  ),
};


