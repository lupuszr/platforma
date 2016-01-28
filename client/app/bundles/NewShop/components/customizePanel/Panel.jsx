import React 		from 'react';
import Name 		from './Name'
import Logo 		from './Logo'
import Banner 		from './Banner'

const Panel = ({$$shopStore,...actions}) => {
	const $$management = $$shopStore.get('management')
	const $$shop = $$shopStore.get('shop')
	return(
		<div className="row">
			<div className="col-lg-12">
				<Name 	{...{$$management, ...actions}}/>
				<Logo 	{...{$$management, $$shop, ...actions}}/>
				<Banner {...{$$management, $$shop, ...actions}}/>
			</div>
		</div>
	)
}

export default Panel;