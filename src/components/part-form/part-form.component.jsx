import { useContext, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import {
	Col,
	Row,
	Card,
	Typography,
	Divider,
	Input,
	Select,
	Space,
} from 'antd';
import { PartContext } from '../../contexts/part.context';

const { Title } = Typography;
const { Option } = Select;

const PartForm = () => {
	const [items, setItems] = useState(['4134613', '4130812']);
	const [part, setPart] = useState('');

	const onPartChange = event => {
		setPart(event.target.value);
	};

	const addItem = event => {
		event.preventDefault();
		setItems([...items, part]);
		setPart('');
	};

	return (
		<div className='App'>
			<Row
				type='flex'
				justify='center'
				align='middle'
				style={{ minHeight: '100vh' }}
			>
				<Col span={6}>
					<Card>
						<Title level={2}>Part Number</Title>
						<hr />
						<p style={{ fontSize: '18px' }}>
							Please select from available part numbers or create new as needed.
						</p>

						<Select
							placeholder='Available parts'
							style={{ width: '100%', fontSize: '18px' }}
							dropdownRender={menu => (
								<>
									{menu}
									<Divider
										style={{
											margin: '8px 0',
										}}
									/>
									<Space
										align='center'
										style={{
											padding: '0 8px 4px',
										}}
									>
										<Input
											placeholder='Please enter item'
											value={part}
											onChange={onPartChange}
										/>
										<Typography.Link
											onClick={addItem}
											style={{
												whiteSpace: 'nowrap',
											}}
										>
											<PlusOutlined /> Add item
										</Typography.Link>
									</Space>
								</>
							)}
						>
							{items.map(part => (
								<Option key={part}>{part}</Option>
							))}
						</Select>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default PartForm;
