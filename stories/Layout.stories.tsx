import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../src/Container/Layout';

const meta: Meta<typeof Layout> = {
  title: 'Container/Layout',
  component: Layout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fullWidth:{
      control: {type: 'boolean'}
    },
    display: {
      control: { type: 'select' },
      options: ['flex', 'block', 'inline-block', 'grid', 'inline-flex', 'inline', 'none'],
    },
    flexDirection: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    alignItems: {
      control: { type: 'select' },
      options: ['stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit'],
    },
    justifyContent: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'initial', 'inherit'],
    },
    gap: { control: 'text' },
    padding: { control: 'text' },
    margin: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    maxWidth: { control: 'text' },
    maxHeight: { control: 'text' },
    minWidth: { control: 'text' },
    minHeight: { control: 'text' },
    flexWrap:{ control: 'text' },
    children: { control: false },
    style: { control: false },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const FlexRow: Story = {
  args: {
    flexDirection: 'row',
    gap: '16px',
    padding: '24px',
    style: { background: '#f5f5f5' },
    children: [
      <div key="1" style={{ background: '#2196f3', color: '#fff', padding: 16 }}>Block 1</div>,
      <div key="2" style={{ background: '#4caf50', color: '#fff', padding: 16 }}>Block 2</div>,
      <div key="3" style={{ background: '#ff9800', color: '#fff', padding: 16 }}>Block 3</div>,
    ],
  },
};

export const FlexColumn: Story = {
  args: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '20px',
    style: { background: '#e3f2fd' },
    children: [
      <div key="1" style={{ background: '#673ab7', color: '#fff', padding: 12 }}>Column 1</div>,
      <div key="2" style={{ background: '#009688', color: '#fff', padding: 12 }}>Column 2</div>,
    ],
  },
};

export const Responsive: Story = {
  args: {
    fullWidth: true,
    flexDirection: 'row',
    gap: '8px',
    padding: '12px',
    width: '100%',
    style: { background: '#fffde7', border: '1px solid #ffe082'},
    flexWrap: 'wrap',
    children: [
      <div key="1" style={{ width: '95%', minWidth:'150px', background: '#f44336', color: '#fff', padding: 10 }}>Responsive 1</div>,
      <div key="2" style={{ width: '95%', minWidth:'150px', background: '#00bcd4', color: '#fff', padding: 10 }}>Responsive 2</div>,
    ],
  },
};

export const WithGapAndPadding: Story = {
  args: {
    flexDirection: 'row',
    gap: '32px',
    padding: '32px',
    style: { background: '#fce4ec' },
    children: [
      <div key="1" style={{ background: '#ad1457', color: '#fff', padding: 20 }}>A</div>,
      <div key="2" style={{ background: '#6a1b9a', color: '#fff', padding: 20 }}>B</div>,
      <div key="3" style={{ background: '#283593', color: '#fff', padding: 20 }}>C</div>,
    ],
  },
}; 