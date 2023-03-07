import { render, screen, fireEvent } from '@testing-library/react'
import SelectControl from '../components/SelectControl'

test('renders SelectControl with options and selects an option', async () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]

  render(<SelectControl options={options} />)

  // Check if options are rendered
  const option1 = screen.getByText(/Option 1/i)
  const option2 = screen.getByText(/Option 2/i)
  const option3 = screen.getByText(/Option 3/i)
  expect(option1).toBeInTheDocument()
  expect(option2).toBeInTheDocument()
  expect(option3).toBeInTheDocument()

  // Select an option and check if it's selected
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'option2' } })
  expect(screen.getByDisplayValue(/Option 2/i)).toBeInTheDocument()
})
