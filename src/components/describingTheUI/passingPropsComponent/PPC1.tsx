import React, { Fragment } from 'react';
import { getImageUrl1 } from './utils';




// This PPC1 component contains some very similar markup for two profiles. 
// Extract a Profile component out of it to reduce the duplication. 
// You’ll need to choose what props to pass to it.

interface Profile {
  name: string,
  avatar: {
    imgUrl: string,
    alt: string,
    width: number,
    height: number
  },
  introduce: {
    profession: string,
    awards: string[],
    discovered: string
  }
}

const Profiles: Profile[] = [{
    name: 'Maria Skłodowska-Curie',
    avatar: {
      imgUrl: 'szV5sdG',
      alt: 'Maria Skłodowska-Curie',
      width: 70,
      height: 70,
    },
    introduce: {
      profession: 'physicist and chemist',
      awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
      discovered: 'polonium (element)',
    },
  }, {
  name: 'Katsuko Saruhashi',
  avatar: {
    imgUrl: 'YfeOqp2',
    alt: 'Katsuko Saruhashi',
    width: 70,
    height: 70,
  },
  introduce: {
    profession: 'geochemist',
    awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
    discovered: 'a method for measuring carbon dioxide in seawater',
  }
}]


function Section({profile} : {profile : Profile}) {
  return (
    <section className="profile">
       <h2>{profile.name}</h2>
       <img 
        className='avatar'
        src={getImageUrl1(profile.avatar.imgUrl)}
        alt={profile.avatar.alt}
        width={profile.avatar.width}
        height={profile.avatar.height}
       />
       <ul>
          <li>
            <b>Profession: </b> 
            {profile.introduce.profession}
          </li>
          <li>
            <b>Awards: {profile.introduce.awards.length} </b> 
            ({profile.introduce.awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {profile.introduce.discovered}
          </li>
        </ul>
    </section>
  )
}

// 이런느낌으로?
export default function PPC1() {
  const rows: JSX.Element[] = [];

  Profiles.forEach(profile => {
    rows.push(<Section profile={profile} />)
  })

  return (
    <div>
      <h1>Notable Scientists</h1>
      {rows}
    </div>
  );
}