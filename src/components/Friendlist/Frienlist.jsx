import s from './Friendlist.module.css';
import clsx from 'clsx';
const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.box}>
      <img className={s.image} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={clsx(isOnline ? s.online : s.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
export default FriendList;
