import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './chat.module.css';
import { Message } from './message';
import { Input } from './input';
import sendIcon from './images/send.svg';
import { useSocketChat } from '../../servises/socket/chat-socket';

const Chat = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const messagesContainerRef = useRef(null);
  const [user, setUser] = useState();

  const scrollToBottom = useCallback(
    () => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTo(0, messagesContainerRef.current.scrollHeight);
      }
    },
    [messagesContainerRef]
  );

  const pushMessage = useCallback(
    message => {
      setData([...data, message]);
      scrollToBottom();
    },
    [data, scrollToBottom]
  );

  const processEvent = useCallback(
    event => {
      const normalizedMessage = JSON.parse(event.data);
      if (normalizedMessage.success === true) {
        pushMessage({
          text: normalizedMessage.message,
          username: normalizedMessage.username,
          id: normalizedMessage.id,
          timestamp: new Date().getTime() / 1000,
          isBot: normalizedMessage.isBot
        });
      }
    },
    [pushMessage]
  );

  const { sendData, connect } = useSocketChat('wss://norma.nomoreparties.space/chat', {
    onMessage: processEvent
  });

  useEffect(
    () => {
      if (user) {
        connect(user.token);
      }
    },
    [user] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    const joinChat = async () => {
      await fetch('https://chat.nomoreparties.space/join')
        .then(res => res.json())
        .then(({ success, ...userData }) => {
          setUser(userData);
        });
    };

    joinChat();
  }, []);

  const submit = useCallback(
    () => {
      if (user && !!value.trim()) {
        sendData({ message: value, token: user.token });
        setValue('');
      }
    },
    [value, user, sendData]
  );

  useEffect(
    () => {
      const listener = event => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
          event.preventDefault();
          submit();
        }
      };
      document.addEventListener('keydown', listener);
      return () => {
        document.removeEventListener('keydown', listener);
      };
    },
    [submit]
  );

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  if (user) {
    return (
      <div className={styles.container}>
        <div className={styles.messagesWrapper} ref={messagesContainerRef}>
          {data.map((m, index) => (
            <Message message={m} key={index} isOwnMessage={user.id === m.id} />
          ))}
        </div>
        <div className={styles.replyBar}>
          <Input placeholder="Сообщение" onChange={onChange} value={value} />
          <img src={sendIcon} alt="send" onClick={submit} />
        </div>
      </div>
    );
  }
  return null;
};

export default Chat;
