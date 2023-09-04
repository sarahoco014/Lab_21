const Cake = ({cake}) => {

  return (
    <>
        <h2>{cake.cakeName}</h2>
        <p>Ingredients:
        <ul>
          {cake.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
          </ul>
        </p>
        <p>Price: {cake.price}</p>
        <p>Rating: {cake.rating}</p>
    </>
  )
}

export default Cake;