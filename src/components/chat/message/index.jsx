import styles from './message.module.css';
import statusImage from '../images/status.svg';
import { Avatar } from '../avatar';

export const getTimeFromTimestamp = timestamp => {
  const timeValues = new Date(timestamp * 1000).toLocaleTimeString().split(':');
  timeValues.splice(-1, 1);
  return timeValues.join(':');
};

export const Message = ({ message, isOwnMessage }) => {
  const messageClassname = isOwnMessage ? styles.ownMessage : styles.message;
  const containerClassname = isOwnMessage ? styles.ownMessageContainer : styles.messageContainer;
  const status = isOwnMessage ? <img src={statusImage} alt="status" /> : null;
  const sender = isOwnMessage ? null : (
    <p>
      <b>{message.username}</b>
    </p>
  );

  const avatar = isOwnMessage ? null : <Avatar name={message.username} />;
  return (
    <>
      <div className={containerClassname}>
        {avatar}
        <div className={messageClassname}>
          <div className={styles.userName}>
            {sender}
            {message.isBot ? '@bot' : ''}
          </div>
          {message.text}
          <div className={styles.messageInfo}>
            <p>{getTimeFromTimestamp(message.timestamp)}</p>
            {status}
          </div>
        </div>
      </div>
    </>
  );
};