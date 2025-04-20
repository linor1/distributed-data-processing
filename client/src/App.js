import {useState} from 'react';
 
function App() {
	const [columns, setColumns] = useState([]);
	const [file, setFile] = useState(null);
	const fr = new FileReader();

	const handleOnChange = (e) => {
		setFile(e.target.files[0]);
	};
	
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		if (file) {
			console.log('uploading file.. ');
			// form data
			const formData = new FormData();
			formData.append('file', file);
			
			try {
				fetch("http://localhost:5000/upload", {
					method: "POST",
					body: formData,
				})
				.then((res) => res.json())
				.then((result) => console.log("Success:", result))
				.then((err) =>console.error("Error:", err))

			} catch(error) {
				console.error("error: ", error);
			}
		}
	};
	return(
		<div>
			<h1>Upload File</h1>
			{/* <button onClick={chooseFile}>choose file</button> */}
			<input
			type={"file"}
			accept={".csv"}
			onChange={handleOnChange}/>

			<button
				onClick={(e) => {
					handleOnSubmit(e);
				}}
        >
          IMPORT CSV
        </button>
			{columns.length > 0 && (
				<div>
					<h2>
					<ul>
						{columns.map((col, index) => (
							<li key = {index}>{col}</li>
						))}
					</ul>
					</h2>
				</div>
			)}


		</div>
	);
}
export default App;