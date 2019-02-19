
// dependencies
import * as React from 'react';
// files
import Cell, {CellProps} from './cell';


export default class Grid extends React.Component<{ player: number}>{
    // player: number;
    grid:CellProps[];
    constructor(props){
        super(props);
        this.state={
            player: this.props.player,
            grid:[]
        }        
    }
    generateGrid(){
        function generateRow(){
            let row=[];
            for(let i = 0; i < 10; i++){
                row.push(<Cell/>)
            }
            return(
                <div className="gridRow">
                    {...row}
                </div>             
            )
        }
        var rows=[];
        for(let i = 0; i < 10; i++){    
            rows.push(generateRow())  
        };
        return rows;
    }
    render(){
        return(
            <div className="grid">
                {...this.generateGrid()}
            </div>
        )
    }
}

