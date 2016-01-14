import React 		from 'react';
import Name 		from './Name'

const Panel = ({$$shopStore,setName, nameAvailable}) => {
	const $$management = $$shopStore.get('management')
	return(
		<div className="row">
			<div className="col-lg-12">
				<Name {...{$$management, setName, nameAvailable}}></Name>
			</div>
		</div>
	)
}

export default Panel;