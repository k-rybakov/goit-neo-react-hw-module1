import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  const status = isOnline ? "Online" : "Offline";
  const statusColor = isOnline ? "online" : "offline";

  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, css[statusColor])}>{status}</p>
    </div>
  );
}
