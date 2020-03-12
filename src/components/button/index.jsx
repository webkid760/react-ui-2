import React from 'react';

function Button(props) {
  let {name,onClick,types} = props;
  return (
    <div onClick={onClick}>
    {name}{types.a}
    </div>
  );
}

export default Button;
