import React, { useState, useEffect } from 'react';
import { Card, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const UploadHistory = (props) => {
	const [files, setFiles] = useState([]);
	async function fetchFilesHandler() {
		const response = await axios.get('http://localhost:8000/uploadHistory');
		const transformedFiles = response.data.map((file) => {
			return {
				fileName: file.fileName,
				fileSize: file.fileSize,
				fileLastModified: file.fileLastModified,
			};
		});
		setFiles(transformedFiles);
	}
	useEffect(() => {
		fetchFilesHandler();
	}, [fetchFilesHandler]);

	return (
		<React.Fragment>
			<Container className="p-3">
				<Row className="justify-content-md-center">
					<Button className='mb-3' onClick={fetchFilesHandler}>Fetch Files</Button>
				</Row>
				{files.map((file) => (
					<Row className="justify-content-md-center">
						<Col className='mb-1' md="auto">
							<Card style={{ width: '40rem' }}>
								<Card.Body>
									<Card.Title>{file.fileName} </Card.Title>
									<Card.Subtitle className="mb-2 text-muted">{`${file.fileSize} bytes`}</Card.Subtitle>
									<Card.Text>
										{file.fileLastModified}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				))}
			</Container>
		</React.Fragment>
	);
}

export default UploadHistory