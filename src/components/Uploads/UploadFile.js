import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Row, Col, Form, Alert } from 'react-bootstrap'

const UploadFile = (props) => {
	const [selectedFile, setSelectedFile] = useState();
	const [fileName, setFileName] = useState("");
	const [fileSize, setFileSize] = useState(0);
	const [fileLastModified, setFileLastModified] = useState();
	const [uploadSuccessful, setUploadSuccessful] = useState(false)


	const selectFileHandler = (event) => {
		setSelectedFile(event.target.files[0])
		setFileName(event.target.files[0].name)
		setFileSize(event.target.files[0].size)
		setFileLastModified(event.target.files[0].lastModifiedDate)
	}
	const uploadFile = async (e) => {
		const formData = new FormData();
		formData.append("file", selectedFile);
		formData.append("fileName", fileName);
		formData.append("fileSize", fileSize);
		formData.append("fileLastModified", fileLastModified);
		try {
			const response = await axios.post(
				"http://localhost:8000/upload",
				formData
			);
			setUploadSuccessful(true)
			console.log(response);
		} catch (error) {
			setUploadSuccessful(false)
			console.log(error);
		}
	};
	return (
		<Container className="p-3">

			<Row className="justify-content-md-center">
				<Col md="auto">	<Form>
					<Form.Group>
						<Form.File id="exampleFormControlFile1" label="Select A File " onChange={selectFileHandler} />
					</Form.Group>
				</Form>

					<Button onClick={uploadFile}>Upload File</Button>
					{uploadSuccessful && <Alert variant='success'>
						Uploaded Succesfully!
					</Alert>}
				</Col>
			</Row>
		</Container>


	);
}

export default UploadFile