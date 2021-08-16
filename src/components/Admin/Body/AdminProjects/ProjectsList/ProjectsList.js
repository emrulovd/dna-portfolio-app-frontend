import { Container, ListGroup} from 'react-bootstrap';

import ProjectsListItem from './ProjectsListItem/ProjectsListItem';

const ProjectsList = (props) => {
    return(
        <Container>
            <ListGroup variant='flush'>
                {
                    props.projects.map((project, index) => {
                        return(
                            <ProjectsListItem
                            key={index}
                            project_id = {project._id}
                            project_title = {project.project_title} 
                            project_image = {project.project_image_collection[0]}
                            />
                        )
                    })
                }
            </ListGroup>
            <button type='button' onClick={props.navigateToCreatHandler}>Create</button>
        </Container>
    )
}

export default ProjectsList;