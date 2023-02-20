import React, { useState, useEffect } from 'react';
import { Accordion, Button, Icon } from 'semantic-ui-react';

function SkillAccordion({ allSkills, currentUser }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [skills, setSkills] = useState([]);
	const [assignSkillIndex, setAssignSkillIndex] = useState(-1);
	const [assignSkillColor, setAssignSkillColor] = useState(null);
	const [assignSkillIcon, setAssignSkillIcon] = useState(null);
	// console.log(skills, "<- users skills")
	
	const colorIfAssigned = 'red';
	const colorIfNotAssigned = 'green'
	// setAssignSkillIndex(skill.usersAssigned.some(user => user._id === currentUser._id));
	// setAssignSkillColor(assignSkillIndex ? 'red' : 'green');
	// setAssignSkillIcon(assignSkillIndex ? 'minus' : 'plus');


	function assignSkillAttrs(skill) {
		setAssignSkillIndex(skill.usersAssigned.some(user => user._id === currentUser._id));

		setAssignSkillColor(assignSkillIndex ? 'red' : 'green');
		setAssignSkillIcon(assignSkillIndex ? 'minus' : 'plus');
		// const assignSkillContent = assignSkillIndex ? 'unassign' : 'assign'
	}

  useEffect(() => {
    setSkills(allSkills);
  }, [allSkills]);

  function handleSubSkillClick(e, subSkill) {
    e.stopPropagation();
    e.preventDefault();
    // check if the current user is already assigned to this subskill
    const isAssigned = subSkill.usersAssigned.some(user => user._id === currentUser._id);
    // if the user is already assigned, unassign them, otherwise assign them

    if (isAssigned) {
      subSkill.usersAssigned = subSkill.usersAssigned.filter(user => user._id !== currentUser._id);
    } else {
      subSkill.usersAssigned.push(currentUser);
    }
    setSkills([...skills]);
  };

  const handleSkillClick = (e, index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

	
	


  return (
    <Accordion styled>
      {skills.map((skill, index) => (
        <div key={skill._id}>
					{assignSkillAttrs(skill)}
				

          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={(e) => handleSkillClick(e, index)}
          >
            <Icon name="dropdown" />
            {skill.name}
						<Icon name={assignSkillIcon} size='mini' color={assignSkillColor}></Icon>
            {skill.usersAssigned.some(user => user._id === currentUser._id) ? (
              <Button compact size="mini" color="red" floated="right" onClick={() => {
                skill.usersAssigned = skill.usersAssigned.filter(user => user._id !== currentUser._id);
                setSkills([...skills]);
              }}>
                Unassign
              </Button>
            ) : (
              <Button compact size="mini" color="green" floated="right" onClick={() => {
                skill.usersAssigned.push(currentUser);
                setSkills([...skills]);
              }}>
                Assign
              </Button>
            )}
          </Accordion.Title>
					
          <Accordion.Content active={activeIndex === index}>
            <Accordion styled>
              {skill.subSkills.map((subSkill) => (
                <div key={subSkill._id} onClick={(e) => handleSubSkillClick(e, subSkill)}>
                  <Accordion.Title active={false}>
                    <Icon name="dropdown" />
                    {subSkill.title}
                    {subSkill.usersAssigned.some(user => user._id === currentUser._id) ? (
                      <Button compact size="mini" color="red" floated="right" onClick={(e) => {
                        e.stopPropagation();
                        subSkill.usersAssigned = subSkill.usersAssigned.filter(user => user._id !== currentUser._id);
                        setSkills([...skills]);
                      }}>
                        Unassign
                      </Button>
                    ) : (
                      <Button compact size="mini" color="green" floated="right" onClick={(e) => {
                        e.stopPropagation();
                        subSkill.usersAssigned.push(currentUser);
                        setSkills([...skills]);
                      }}>
                        Assign
                      </Button>
                    )}
                  </Accordion.Title>
                  <Accordion.Content>
                    <p>{subSkill.details}</p>
                    <ul>
                      {subSkill.resources.map((resource) => (
                        <li key={resource._id}>
                          <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.name}</a>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Content>
                </div>
              ))}
            </Accordion>
					</Accordion.Content>
				</div>
			))}
		</Accordion>
	)
}
export default SkillAccordion;
					
                        

