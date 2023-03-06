import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import {
		Grid,
		Segment,
		Header,
		Button,
		Icon,
		Portal,
		Label,
		Container

} from 'semantic-ui-react';

import { SkillsContext } from "../../context/SkillsContext/SkillsContext";

import AddResourceForm from "../AddResourceForm/AddResourceForm.jsx"
import SearchYouTube from "../SearchYouTube/SearchYouTube";

function ResourcePortal() {
	const ctx = useContext(SkillsContext);
	const subCtx = ctx.activeSub;
	const subSkill = subCtx.subSkill;

	
	const [formPop, setFormPop] = useState(false)

	const open = formPop;



	function handleOpen() {
		setFormPop(true)
	}

	function handleClose() {
		setFormPop(false)
	}

	return (  
		<>
			<Segment inverted={true}>
				<Header  inverted={true} color='blue' >
					{subSkill?.title}
				</Header>
				<Label
					content='Add Resource'
					color="green" 
					attached='top right'
					icon='plus' 
					size="small" 
					active={false}
					disabled={formPop}
					onClick={handleOpen} 
				/>
			
			</Segment>
			<Portal onClose={handleClose} open={open}>
				<Container
					style={{
						position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '800px',
            backgroundColor: 'gray',
            padding: '20px',
            borderRadius: '4px',
            boxShadow: '0 10px 4px rgba(0,0,0,0.3)',
            zIndex: '999',
            maxHeight: '80vh',
						minHeight: '40vh',
            overflow: 'auto',
					}}
				>
					
						<Header
							inverted={true}
							size="huge" 
							color="white"
							textAlign="center"	
							content="Search for Resources to Add"
						/>
							<Label
								attached='top right'
								color="red" 
								as={Header} 
								icon='close' 
								size="mini" 
								onClick={handleClose} 
								content=' Close'
							/>
					
					
						<SearchYouTube handleClose={handleClose} />
						{/* <AddResourceForm handleClose={handleClose} /> */}
					
			</Container>
		</Portal>
			


		</>
	);
}

export default ResourcePortal;
