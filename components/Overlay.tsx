import Modal from "@mui/material/Modal";
import React, {useState, useEffect} from "react";
import FadeAnim from "./fadeAnim";
import GuestFooter from "./Treefooter";
interface OverlayProps {
	clearOverlay: Function;
	children?: any | any[];
}

export default function Overlay(props: OverlayProps) {
	const [open, setOpen] = useState(false);
	
	//if props.children is not an empty string, open the backdrop
	useEffect(() => {
		if (props.children !== "") {
			setOpen(true);
		}
	}, [props.children]);
	
	function closeModal() {
		props.clearOverlay();
		setTimeout(() => {
			setOpen(false);
		}, 300);
	}
	
// 	style={{
// 				display:"flex",
// 				alignItems:"center",
// 				justifyContent:"space-evenly",
// 				overflow:"auto"
// 			}}
// 			onClick={() => {
// 				setOpen(false);
// 				props.clearOverlay();
// 			}}
	
	return(
		<Modal
			style={{
				display:"flex",
				overflow:"auto"
			}}
			open={open}
			onClick={closeModal}
		>
		<FadeAnim
			myname="overlay"
			in={open}
		>
		{props.children !== ""
			? (props.children)
			:[]}
		</FadeAnim>
		</Modal>
	);
}