import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 'hats',
					imageUrl:
						'https://images.unsplash.com/photo-1491852807958-4326560208e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
					id: 1,
					linkUrl: 'hats'
				},
				{
					title: 'jackets',
					imageUrl:
						'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
					id: 2,
					linkUrl: ''
				},
				{
					title: 'sneakers',
					imageUrl:
						'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
					id: 3,
					linkUrl: ''
				},
				{
					title: 'womens',
					imageUrl:
						'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
					size: 'large',
					id: 4,
					linkUrl: ''
				},
				{
					title: 'mens',
					imageUrl:
						'https://images.unsplash.com/photo-1579479943332-73d5e2f97087?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
					size: 'large',
					id: 5,
					linkUrl: ''
				}
			]
		};
	}

	render() {
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
