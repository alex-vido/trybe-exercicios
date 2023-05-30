import User from './User';

function Header() {
  return (
    <h1>
      Olá,
      {' '}
      {User.name}
      {' '}
      {User.lastName}
    </h1>
  );
}

export default Header;
