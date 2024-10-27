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

test('props test', () => {
  const item = {
    title: 'これofこれ',
    description: '説明文です',
    icon: 'bird' as const
  }
  render(<List {...item} />);
  const listItem = screen.getByRole("listitem");
  expect(listItem).toBeInTheDocument();
});

test('not ol', () => {
  const item = {
    title: 'これofこれ',
    description: '説明文です',
    icon: 'bird' as const
  }
  render(<List {...item} />);
  const list = screen.queryByRole("list");
  expect(list).not.toBeInTheDocument();
});

// test('toBe matcher', () => {
//   const item = {
//     title: 'これofこれ',
//     description: '説明文です',
//     icon: 'bird' as const
//   }
//   render(<List {...item} />);
//   const div = screen.getByTestId("wrapper");
//   expect(div.queryByRole('paragraph')).toBe("テストテキスト")
// });

test('toBe matcher', () => {
  const item = {
    title: 'これofこれ',
    description: '説明文です',
    icon: 'bird' as const
  }
  const {container} = render(<List {...item} />);
  const div = container.querySelector(".test");
  expect(div?.textContent).toBe("テストテキスト")
});


