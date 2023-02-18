import React from 'react';
import './App.css';
import {Store} from './Store'
import {Link} from '@reach/router'

export default function App(props: any): JSX.Element {
  const {state} = React.useContext(Store)

  return (
    <React.Fragment>
      <header className='header'>
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick Your Faivorite Episode!!!</p>
        </div>
        <div>
          <Link className='link' to="/"><strong>Home</strong></Link>
          <Link className='link' to="/faves">
            <strong>Favourite(s): {state.favorites.length}</strong>
          </Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  )
}
