import React from "react";

const ListGroup = (props) => {
  const { items, currentGenre } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item._id}
          className={
            item === currentGenre ? "list-group-item active" : "list-group-item"
          }
          onClick={() => props.onClick(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
