import React from 'react'
import type { Preview } from '@storybook/react'
import '../app/globals.css'

import { Inter as FontSans } from 'next/font/google'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const preview: Preview = {
  decorators: [
    (Story) => (
      <main className={fontSans.className}>
        <Story />
      </main>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
