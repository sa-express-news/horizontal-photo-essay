// @flow

import React, {Component} from 'react';

class Heading extends Component {
	props: {
		tag: number,
		text: string
	};

	render(){
		return(
			<div>
			 {(() => {
                switch(this.props.tag) {
                    case 1:
                        return <h1>{this.props.text} </h1>;
                    case 2:
                        return <h2>{this.props.text} </h2>;
                    case 3:
                        return <h3>{this.props.text} </h3>;
                    case 4:
                        return <h4>{this.props.text} </h4>;
                    case 5:
                        return <h5>{this.props.text} </h5>;
                    case 6:
                        return <h6>{this.props.text} </h6>;
                    default:
                        return null;
                }
            })()}
            </div>
		)
	}
}

export default Heading;
