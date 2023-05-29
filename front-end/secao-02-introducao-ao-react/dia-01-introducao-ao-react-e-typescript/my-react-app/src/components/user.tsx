const user = {
  name: 'Alex',
  lastName: 'Vido',
};

function User() {
  return (
    <span>
      {user.name}
      {' '}
      {user.lastName}
    </span>
  );
}

export default User;
