import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';

import DeleteButton from './DeleteButton';
    
const Game = (props) => {
    const { initialGame1,initialGame2,initialGame3, onStatusProp } = props;
    const [game1, setGame1] = useState([]);
    const [game2, setGame2] = useState([]);
    const [game3, setGame3] = useState([]);
    const [players, setplayers] = useState([]);
   
    // const onStatusHandler = e => {
    //     e.preventDefault();
    //     onStatusProp({game1,game2,game3});
    // }
    // <List onStatusProp={props.creatGame} initialGame1="" initialGame2="" initialGame3=""/>
    return (
        <div class="container">
            <div class="first-header">
            <p>Manage players |</p>
            <p>| Manage player status</p>
            </div>
            <div class="second-header">
            <p><Link to={"/"}>Link |</Link></p>
           <p>| <Link to={"/players/addplayer"}>add an player</Link></p>
            </div>
          
            <table border="1">
            <thead>
                <tr>
                    <td>Team Name</td>
                    <td>Actions</td>
                 </tr> 
                 </thead>
                 <tbody>
            {props.players.map((player, idx) => {
                return (
                   
                    <tr key={idx}>
                        
                              <td>{player.name}</td>
                              <td>{player.position}</td>

                      
                          
                           <td>
                    
                       <DeleteButton playerId={player._id} successCallback={()=>props.removeFromDom(player._id)}/>
                       </td>
                       
                </tr>
          

                   
                )
            })
            
            }
                </tbody>
            
            </table>
        </div>
    );
}
    
export default List;

