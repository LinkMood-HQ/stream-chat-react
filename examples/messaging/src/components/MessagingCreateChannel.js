import React, { useEffect, useState } from 'react';
import { Avatar } from 'stream-chat-react';
import './MessagingCreateChannel.css';

const MessagingCreateChannel = ({ onClose, visible }) => {
  const [users, setUsers] = useState(['merel', 'jaap', 'frits']);

  // add listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    //removelistener
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!visible) return null;

  const handleKeyDown = (e) => {
    // check for up(38) or down(40) key
    if (e.which === 38) {
      console.log('1 user up');
    }
    if (e.which === 40) {
      console.log('1 user down');
    }
    if (e.which === 13) {
      console.log('submit selected user');
      addUser();
    }
  };
  const removeUser = (user) => {
    const newUsers = users.filter((item) => item !== user);
    setUsers(newUsers);
  };

  const addUser = (e) => {
    if (e) e.preventDefault();
    console.log('addUser');
  };

  const onSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="messaging-create-channel">
      <header>
        <div>To:</div>
        {users.length && (
          <div className="messaging-create-channel__users">
            {users.map((user) => (
              <div
                className="messaging-create-channel__user"
                onClick={() => removeUser(user)}
                key={user}
              >
                {user}
              </div>
            ))}
          </div>
        )}
        <form onSubmit={addUser}>
          <input
            onChange={onSearch}
            type="text"
            className="messaging-create-channel__input"
          />
        </form>
        <button onClick={onClose}>close</button>
      </header>
      <main>
        <ul className="messaging-create-channel__user-results">
          <UserResult />
          <UserResult />
          <UserResult />
          <UserResult />
        </ul>
      </main>
    </div>
  );
};

const UserResult = () => {
  return (
    <li className="messaging-create-channel__user-result">
      <div className="messaging-create-channel__user-result__avatar">
        <Avatar />
      </div>
      <div className="messaging-create-channel__user-result__details">
        <span>name</span>
        <span className="messaging-create-channel__user-result__details__last-seen">
          last seen
        </span>
      </div>
    </li>
  );
};

export default React.memo(MessagingCreateChannel);
