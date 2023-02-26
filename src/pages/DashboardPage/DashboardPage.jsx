import { useState, useEffect } from "react";
import { Segment } from 'semantic-ui-react';
import { useParams } from "react-router-dom";

import SkillDisplay from "../../components/SkillDisplay/SkillDisplay";


function Dashboard({loggedUser, unAssignSkillUser, handleDeleteSkill, 
  allSkills, getSkills, handleAddSubSkill, handleAddSkill, assignSkillUser, getSkill }) {

  const { username } = useParams();
  console.log(`username(Dash): ${username}`)
  // console.log(`allSkills(Dash): ${allSkills}`)
  
    useEffect(() => {
        //Getting posts, C(R)UD
        // getSkills();

        
      }, []); 
  
  return (
    <>
    {
      allSkills.map((skill) => {
        const assignIndex = skill.usersAssigned.findIndex(user => user.username === loggedUser.username)
        const ifAssigned = assignIndex > -1 ? true : false;
        
        
        if (ifAssigned) {
          console.log(`skill(Dash): ${skill} index: ${assignIndex}`)
          return (
            <Segment.Group raised key={skill._id}>
        
                <SkillDisplay skill={skill} handleAddSkill={handleAddSkill} loggedUser={loggedUser} unAssignSkillUser={unAssignSkillUser} assignSkillUser={assignSkillUser} handleAddSubSkill={handleAddSubSkill}  />
            </Segment.Group>
          ) 
        } 
    
      })

    }
    
    </>
  )
  
}

export default Dashboard;

    


 