import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () =>{


    return (
     <section className={classes.mealsForm}>
        <ul className={classes.meals} >
            {DUMMY_MEALS.map( meal => (
                <div  key = {meal.id}>
                    <li style={{listStyleType:'none'}}>
                    <div><h3>{meal.name}</h3></div> 
                    <div>{meal.description}</div>
                    <div style={{color:"brown" ,fontWeight:'bold'}}>  ${meal.price}</div>
                    <div style={{borderBottom:'1px solid #ccc'}}></div>
                    </li>
                </div>
            ))
            }
        </ul>
    </section>
    )

        }
export default AvailableMeals;