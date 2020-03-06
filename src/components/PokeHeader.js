import React from 'react'

class PokeHeader extends React.Component {
  constructor () {
    super()
    this.state = { dialog: '' }
  }

  async componentDidMount () {
    this.setState({
      dialog: 'Pokémon for Senpai'
    })
  }

  render () {
    const { dialog } = this.state
    return (
      <header className='nes-container is-dark is-centered'>
        <section className='message-list'>
          <section className='message -left'>
            <i className='nes-pokeball' />
            <div className='nes-balloon from-left is-dark'>
              <p>{dialog}</p>
            </div>
          </section>
        </section>
      </header>
    )
  }
}

export default PokeHeader
