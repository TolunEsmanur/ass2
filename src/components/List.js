
import data from "../helper/data"

const List = ({current}) => {
  
  return (
    <>
    {data.slice(current, current+5)
    .map(({id,name,age,image,email})=>
   
   
      <article key={id} className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{email}</p>
          <p>{age} years</p>
        </div>
      </article>
   
  )};
  </>
 )
};

export default List;
