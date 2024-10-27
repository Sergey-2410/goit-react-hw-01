import s from './Profile.module.css';
const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.box}>
      <div className={s.card}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.text}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.tag}>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.info}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.info}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.info}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
