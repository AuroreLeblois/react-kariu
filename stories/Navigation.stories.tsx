import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  BottomNav,
  Button,
  HeaderNav,
  NavigationItem,
  SideNav,
} from '../src';

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M3 11L12 3L21 11V21H15V15H9V21H3V11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle
      cx="10.5"
      cy="10.5"
      r="6.5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M15.5 15.5L21 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M4 5H20V17H9L4 21V5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle
      cx="12"
      cy="8"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M4 21C4.8 16.8 7.5 15 12 15C16.5 15 19.2 16.8 20 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 3V5M12 19V21M3 12H5M19 12H21M5.6 5.6L7 7M17 17L18.4 18.4M18.4 5.6L17 7M7 17L5.6 18.4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const items: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
    href: '#home',
  },
  {
    id: 'search',
    label: 'Search',
    icon: <SearchIcon />,
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: <MessageIcon />,
    badge: 3,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <ProfileIcon />,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon />,
  },
];

const Brand = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontWeight: 800,
      whiteSpace: 'nowrap',
    }}
  >
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: 10,
        color: '#fff',
        background: '#3C1B43',
      }}
    >
      K
    </span>
    React Kariu
  </div>
);

const meta = {
  title: 'Container/Navigation',
  component: HeaderNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  render: () => (
    <HeaderNav
      brand={<Brand />}
      items={items}
      defaultActiveId="home"
      trailingContent={
        <Button label="Sign in" size="small" ripple={false} />
      }
    />
  ),
};

export const Side: Story = {
  render: () => (
    <div style={{ display: 'flex', minHeight: 520 }}>
      <SideNav
        brand={<Brand />}
        items={items}
        defaultActiveId="messages"
        hideBelowBreakpoint={false}
      />
      <main style={{ flex: 1, padding: 32 }}>
        Resize or collapse the navigation to inspect its states.
      </main>
    </div>
  ),
};

export const Bottom: Story = {
  render: () => (
    <div style={{ minHeight: 280, padding: 24 }}>
      <p>Bottom navigation can be fixed or placed in a layout.</p>
      <BottomNav
        items={items}
        defaultActiveId="profile"
        fixed={false}
        mobileOnly={false}
        showLabels="active"
      />
    </div>
  ),
};

const ResponsiveNavigationDemo = () => {
  const [activeId, setActiveId] = React.useState('home');

  return (
    <div style={{ minHeight: '100vh' }}>
      <HeaderNav
        brand={<Brand />}
        items={items}
        activeId={activeId}
        onActiveChange={setActiveId}
        breakpoint={800}
      />
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 65px)' }}>
        <SideNav
          items={items}
          activeId={activeId}
          onActiveChange={setActiveId}
          breakpoint={800}
          collapsible
        />
        <main style={{ flex: 1, padding: 32 }}>
          <h2 style={{ marginTop: 0 }}>Responsive navigation</h2>
          <p>
            The side navigation disappears below 800px, the header becomes
            compact and the bottom navigation takes over.
          </p>
          <p>Active item: {activeId}</p>
        </main>
      </div>
      <BottomNav
        items={items}
        activeId={activeId}
        onActiveChange={setActiveId}
        breakpoint={800}
      />
    </div>
  );
};

export const ResponsiveComposition: Story = {
  render: () => <ResponsiveNavigationDemo />,
};
