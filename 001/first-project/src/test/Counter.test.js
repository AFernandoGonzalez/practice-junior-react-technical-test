
import { render, fireEvent} from '@testing-library/react'
import { Counter} from '../components/Counter'


test('it increments the count whrn the increment btn is clicked', () => { 
    const { getByText } = render(<Counter/>)
    const incrementButton = getByText('Increase')

    fireEvent.click(incrementButton)

    expect(getByText('Count: 1')).toBeInTheDocument();
 })
