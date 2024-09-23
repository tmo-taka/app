import React from 'react';
import { render, screen } from '@testing-library/react';
import {List} from './List'

test('test icon text', () => {
  const item = {
    title: 'ニコスマ',
    description: '説明文です',
    icon: 'dog' as const
  }
  render(<List {...item} />);
  const iconText = screen.getByText(/won/i);
  expect(iconText).toBeInTheDocument();
});
