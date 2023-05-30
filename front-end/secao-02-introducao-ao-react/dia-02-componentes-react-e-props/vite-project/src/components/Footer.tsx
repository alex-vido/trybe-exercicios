import User from './User';

function Footer() {
  return (
    <footer>
      <p>
        Acessando com
        {' '}
        {User.name}
        {' '}
        {User.lastName}
      </p>
    </footer>
  );
}

export default Footer;
