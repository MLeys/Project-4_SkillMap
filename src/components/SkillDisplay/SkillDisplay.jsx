import React from 'react';
import { Link, Route, Routes, Navigate} from 'react-router-dom';


import { 
    Segment,
    Card,
    Button,
    Icon

} from 'semantic-ui-react';

import SubSkillPage from '../../pages/SubSkillPage/SubSkillPage';
import SkillPage from '../../pages/SkillPage/SkillPage';
import SubSkillCard from '../SubSkillCard/SubSkillCard';
import SubSkillDisplay from '../SubSkillDisplay/SubSkillDisplay';




export default function SkillDisplay({ allSkills, getSkill, handleAddSubSkill }) {

    // function skillHandler(skillId) {
    //     getSkill(skillId)
    // }
    

    return (
        <>
        {
            allSkills?.map((skill) => {
                return (
                    <Segment.Group key={skill._id}>
                        <Segment textAlign='center'>fdf
                        <Button icon labelpostition='right'>
                            <Link to={`skills/${skill.name}`} onClick={() =>
                            getSkill(skill._id)
                            } >
                                
                                <Icon name='plus' > </Icon>
                            </Link>
                        </Button>
                            {skill.name}</Segment>
                            <Segment.Group text-align='center' horizontal>
                                
                                <SubSkillDisplay getSkill={getSkill} skill={skill} handleAddSubSkill={handleAddSubSkill}/>
                                                {/* <Segment.Group>
                                                    <Segment.Group horizontal>
                                                        <Segment>SubSkills</Segment>
                                                        <Segment>
                                                            <Button icon labelpostition='right' >
                                                                <Link to={`skills/${skill.name}/subskill`}>
                                                                    <Icon name='plus' />
                                                                    
                                                                </Link>
                                                            </Button>
                                                        </Segment>
                                                        <Segment> Edit Subskill</Segment>
                                                    </Segment.Group>
                                                    <SubSkillCard skill={skill}/>
                                                </Segment.Group> */}

                                
 
                            <Segment.Group> Resources
                                <Card>
                
                                </Card>
                            </Segment.Group>
                    
                        </Segment.Group>
                    </Segment.Group>
                )
            })
        }

        </>



    )
}