// @flow

import React, {Component} from 'react';

import Annotations from '../../Annotations';

import './AbortionAnnotations.css';

class AbortionAnnotations extends Component{

	render(){
		const annotations = [
          {
            "text": "Week 6: Brain activity can be recorded.",
            "annotation": "No source confirms brain activity or recording of brain activity at this stage."
          },
          {
            "text": "Week 8: Sex organs are beginning to form.",
            "annotation": "Sexual differentiation occurs at 14 weeks after last menstrual period."
          },
          {
            "text": "Week 10: Fingernails appear.",
            "annotation": "Fingernails are present at 26 weeks after last menstrual period."
          },
          {
            "text": "Week 12: The fibers that carry pain to the brain are developed.",
            "annotation": "See review of scientific studies which evaluate (and refute) fetal pain before the 3rd trimester."
          }
        ];

		const component = <Annotations annotations={annotations}/>;

		return(
			<div className='AbortionAnnotations'>
				<h3>A woman's right to know</h3>
				<p>Texas requires physicians to present women with a list of facts about abortion before they can receive one. But roughly one-third of those statements are medically innacurate, according to <a href='http://informedconsentproject.com/states/texas/' title='Informed Consent research on Texas abortion law'>research by the Informed Consent Project</a> at Rutgers University.</p>
				<p>The researchers put the statements to a panel of experts in human anatomy. Here are some of the facts they disputed:</p>
				{component}
			</div>
		)
	}
}

export default AbortionAnnotations;