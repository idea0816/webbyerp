import React from "react";
import { Input } from "antd";

const test1 = () => {
  let friends = [{ name: "Harry" }, { name: "Ron" }, { name: "Snap" }];
  return (
    <div style={{ minHeight: "70vh", padding: "0.5rem 1rem" }}>
      <Input
        id="cllbChoice"
        list="cllbList"
        type="text"
        style={{ width: "10em" }}
      />
      <datalist id="cllbList">
        {friends.map((friend) => (
          <option value={friend.name} />
        ))}
      </datalist>
    </div>
  );
};

export default test1;
