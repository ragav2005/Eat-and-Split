import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplit }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = bill - yourExpense;
  const [payee, setPayee] = useState("you");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bill === "" || yourExpense === "") return;
    onSplit(payee === "you" ? friendExpense : -yourExpense);
    reset();
  };
  const reset = () => {
    setBill("");
    setYourExpense("");
    setPayee("you");
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill with {selectedFriend.name} :</h2>
      <label htmlFor="">💰 Bill value :</label>
      <input
        type="text"
        name=""
        id=""
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor="">🫵 Your Expense :</label>
      <input
        type="text"
        name=""
        id=""
        value={yourExpense}
        onChange={(e) =>
          setYourExpense((curr) =>
            Number(e.target.value) > bill ? curr : Number(e.target.value)
          )
        }
      />
      <label htmlFor="">🫂 {selectedFriend.name} Expenses :</label>
      <input type="text" name="" id="" disabled value={friendExpense} />
      <label>🤑 Who paid the bill?</label>
      <select
        name=""
        id=""
        htmlFor=""
        value={payee}
        onChange={(e) => setPayee(e.target.value)}
      >
        <option value="you">You </option>
        <option value="friend">{selectedFriend.name} </option>
      </select>
      <Button>Split</Button>
    </form>
  );
}
