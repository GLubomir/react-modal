import React from 'react'
import  foto from "./img/foto.jpg"
import { HiXCircle } from "react-icons/hi2";


const Modal = ({open, setOpen}) => (
	<div className={`overlay animaited ${open ? 'show' : ''}`}>
				<div className='modal'>
					<HiXCircle className='delete-icon' onClick={() => setOpen(false)}/>
					<img src={foto} alt='foto'/>
				</div>
			</div>
);

export default function App() {
const[open, setOpen] = React.useState(false);


	return (
		<div className='app'>
			<button onClick={() => setOpen(true)} className='open-modal-btn'>✨ Открыть окно</button>
			<Modal open={open} setOpen={setOpen}/>
		</div>
	)
}
