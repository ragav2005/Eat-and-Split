import FormSplitBill from "./FormSplitBill";
import FriendList from "./FriendList";
import FriendAddForm from "./FriendAddForm";
import Button from "./Button";
import data from "./data";

import { useState } from "react";

export default function App() {
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [friends, setFriends] = useState(data);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function splitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  const handleAdd = (addEle) => {
    setFriends([...friends, addEle]);
    setIsAddVisible(false);
  };
  const handleSelect = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));

    setIsAddVisible(false);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelect={handleSelect}
          selectedFriend={selectedFriend}
        ></FriendList>

        {isAddVisible && <FriendAddForm onFriend={handleAdd} />}
        <Button onClick={() => setIsAddVisible(!isAddVisible)}>
          {isAddVisible ? "Close" : "Add New Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill selectedFriend={selectedFriend} onSplit={splitBill} />
      )}
    </div>
  );
}
