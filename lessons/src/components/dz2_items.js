const ItemsFunct = props => {
  return (
    <li key={`${props.element}${props.index}`}>
      {props.index}-{props.element}
    </li>
  );
};

export default ItemsFunct;
