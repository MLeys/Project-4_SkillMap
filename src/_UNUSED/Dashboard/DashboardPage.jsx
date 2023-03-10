import { useState, useEffect } from "react";
import { Segment } from 'semantic-ui-react';
import { useParams } from "react-router-dom";

import SkillGroup from "../../components/SkillDisplay/SkillGroup";


function Dashboard({loggedUser, unAssignSkillUser, handleDeleteSkill, 
  allSkills, getSkills, handleAddSubSkill, handleAddSkill, assignSkillUser, skill, getSkill }) {

  const { username } = useParams();
  console.log(skill, "<--Dashboard Skill")




    useEffect(() => {
        //Getting posts, C(R)UD
        getSkills();

        
      }, []); 
  
  return (
    <>
    {
      allSkills?.map((skill) => {
        const assignIndex = skill.usersAssigned.findIndex(user => user.username === loggedUser.username)
        const ifAssigned = assignIndex > -1 ? true : false;
        
    
        if (ifAssigned) {
          return (
            <Segment.Group raised key={skill._id}>
             
                <SkillGroup skill={skill} ifAssigned={ifAssigned} handleAddSkill={handleAddSkill} loggedUser={loggedUser} unAssignSkillUser={unAssignSkillUser} assignSkillUser={assignSkillUser} handleAddSubSkill={handleAddSubSkill}  />
            </Segment.Group>
          ) 
        } 
    
      })

    }
    
    </>
  )
  
}

export default Dashboard;

    


 