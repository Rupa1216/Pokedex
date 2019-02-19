import React from 'react';
// import { Button }from 'reactstrap';
import './loadbutton.css';


const LoadButton = (props) => { // (changeState, offest, results)
       offset = props.nextTwenty + 20 
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
        // axios.get(`https://pokeapi.co/api/v2/pokemon/?21&limit=20`)
        .then(response => {
            console.log(response.data.results)
//       const updatedResults = results.concat(response.data.results)
//       changeState({offset:offset,results:updatedResults})
        })
     }

<button {e => LoadButton()}>Load More</button>

export { LoadButton }; 



// // FOR HOW THEY SHOULD SHOW
// const Pokemon = props => {
//   const { data } = props;
//   console.log(data)
    
// return <>
//   {data.map((item, index) => {
//     const imageSrc = `https://img.pokemondb.net/sprites/sun-moon/icon/${item.name}.png`;
//       let pokeNum = index + 1;
//       const upperCase = item.name[0].toUpperCase();
//       const lowerCase = item.name.slice(1);
//       const pokeName = upperCase.concat('', lowerCase);
//         if (pokeNum < 10) {
//           pokeNum = `# 00${pokeNum}`;
//            }
//         if (pokeNum >= 10) {
//           pokeNum = `# 0${pokeNum}`;
//            }
//         if (pokeNum.length >= 100) {
//           pokeNum = `# ${pokeNum}`;
//            }
//         return <ListGroupItem className='pokeTab' tag="a" href="#" key={index} onClick={e => props.onClick(index, pokeNum)}>
//                 <Row>
//                     <img src={imageSrc} alt={index} />
//                     <Col>
//                         {pokeName}
//                     </Col>
//                     <span>
//                         {pokeNum}
//                     </span>
//                 </Row>
//             </ListGroupItem>

// export default Button; // or export { Button }



//     return <div className="moves-containair">
//         <h2>Moves</h2>
//         {movesData.map((move, index) => {
//             return < Button className="button" outline color="secondary" onClick={e => onClick(index)} key={index}> {move} </Button>
//         })}
//     </div>
// }


//       })}
//   </>

// }

