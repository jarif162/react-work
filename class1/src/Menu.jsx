function Menu({ menu = {} }) {
  //   const { mmenu } = props;
  const { name, price } = menu;
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
}

export default Menu;
