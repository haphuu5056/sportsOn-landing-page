const Notification = ({ message, type, onClose }) => {
  if (!message) return null; // Don't show if there's no message

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-lg text-white transition-opacity ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <p>{message}</p>
      <button className="absolute top-1 right-1 text-white" onClick={onClose}>
        X
      </button>
    </div>
  );
};
