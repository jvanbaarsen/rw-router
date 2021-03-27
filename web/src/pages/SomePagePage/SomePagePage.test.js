import { render } from '@redwoodjs/testing'

import SomePagePage from './SomePagePage'

describe('SomePagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SomePagePage />)
    }).not.toThrow()
  })
})
