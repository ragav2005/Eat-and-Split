import { useState } from "react";
import Button from "./Button";

export default function FriendAddForm({ onFriend }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || url === "") return;
    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name: name,
      image: `${url}?u=${id}`,
      balance: 0,
    };
    onFriend(newFriend);
    setName("");
    setUrl("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🔗 Image Url</label>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
}
