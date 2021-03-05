import Map from '.'
import { render, screen } from '@testing-library/react'

describe('<Map />', () => {
  it('should render without any marker ', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place ', () => {
    const place = {
      id: '1',
      name: 'Maricá',
      slug: 'maricá',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const place2 = {
      id: '2',
      name: 'Niterói',
      slug: 'niterói',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    render(<Map places={[place, place2]} />)
    expect(screen.getByTitle(/maricá/i)).toBeInTheDocument()
    //Gera uma saída uma url que mostra uma query do elemento que deseja
    //screen.logTestingPlaygroundURL()
  })
})
