// import Panel from './Panel';
import { getImageUrl } from './utils';

// Two Profile components are rendered side by side with different data.
//  Press “Collapse” on the first profile, and then “Expand” it.
//   You’ll notice that both profiles now show the same person. This is a bug.

// Find the cause of the bug and fix it.

interface PersonProps {
  imageId: string;
  name: string;
}

// 외부 currentPerson에 의해 렌더링이 바뀌는게 문제로 순수함수로 만들라는 뜻
// panel은 없지만 이런식으로 하면될듯?
function Profile({ person } : {person : PersonProps}) {
  return (
    <>
      <Header person={person} />
      <Avatar person={person} />
    </>
  )
}

function Header({ person } : {person : PersonProps}) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person } : {person : PersonProps}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}

export default function KCP2() {
  return (
    <>
      <Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </>
  )
}