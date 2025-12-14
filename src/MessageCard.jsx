function MessageCard({ title, message }) {
  return (
    <div className="message-card">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export default MessageCard;
