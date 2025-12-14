import MessageCard from "./MessageCard";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <MessageCard
        title="Welcome"
        message="Welcome to the React props assignment."
      />

      <MessageCard
        title="Reminder"
        message="Props allow components to be reused with different data."
      />

      <MessageCard
        title="Success"
        message="You have successfully passed props to a component."
      />

      <MessageCard
        title="Next Step"
        message="Try adding custom styles or icons to this card."
      />
    </div>
  );
}

export default App;
