import { createContext, useState } from 'react';
import PARTS from '../part-data.json';

export const PartContext = createContext({
	parts: [],
});

export const PartsProvider = ({ children }) => {
	const [listItems, setListItems] = useState(PARTS);
	const [part, setPart] = useState('');

	const onPartChange = event => {
		setPart(event.target.value);
	};

	const addItem = event => {
		event.preventDefault();
		setListItems([...listItems, part]);
		setPart('');
	};

	const value = { onPartChange, addItem, listItems, part };

	return <PartContext.Provider value={value}>{children}</PartContext.Provider>;
};
