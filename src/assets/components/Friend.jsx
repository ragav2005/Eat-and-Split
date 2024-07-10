import Button from "./Button";

export default function Friend({ friend, onSelect, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li>
      <h3>{friend.name}</h3>
      <img src={friend.image} alt={`Image of ${friend.name}`}></img>
      {friend.balance === 0 && <p> You and {friend.name} are even.</p>}
      {friend.balance < 0 && (
        <p className="red">
          You owe $ {Math.abs(friend.balance)} to {friend.name}.
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe ${friend.balance} to you.
        </p>
      )}
      <Button onClick={() => onSelect(friend)}>
        {isSelected ? "close" : "Select"}
      </Button>
    </li>
  );
}
