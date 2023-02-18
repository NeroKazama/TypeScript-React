import React from 'react'
import {IAction, IEpisode} from './interfaces'

export default function EpisodesList(props: any): Array<JSX.Element> {
    const {episodes, toggleFavAction, favorites, store} = props
    const {state, dispatch} = store
    return episodes.map((episode : IEpisode) => {
        return (
          <section key={episode.id} className='episode-box'>
            <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
            <div>
              {episode.name}
            </div>
            <section>
              <div>Season: {episode.season} Episode: {episode.number}</div> 
              <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
                {favorites.find((fav: IEpisode) => fav.id == episode.id) ? 'Unfav' : 'Fav'}
              </button>
            </section>
          </section>
        )
      })
    }
