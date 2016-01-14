import React 		from 'react';
import Search 	from './Search'
import Member 	from './Member'
import Results 	from './Results'

const Panel = ({$$homeStore,searchProduct, clearResults}) => {
	let $$articles = $$homeStore.get('articles')
	let resultVisible = $$homeStore.getIn(['management','resultWindow'])
	
	return(
		<div className="row margin-top-115">
			<div className="col-lg-6 col-lg-offset-3">
				<Search {...{searchProduct,clearResults}}></Search>
				{resultVisible?
					<Results {...{$$articles}}></Results>:
					null
				}
				<Member></Member>
				
			</div>
		</div>
	)
}

export default Panel;