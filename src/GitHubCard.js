import { Card } from "react-bootstrap";

function GitHubCard(props) {

    const profile = props.gitHubData

    return (
        <Card style={{ width: '18rem', backgroundColor: 'tan' }}>
            <Card.Img variant="top" src={profile.avatar_url} style={{ width: '10rem', margin: 'auto', padding: '5px' }} />
            <Card.Body>
                <Card.Title>{profile.login}</Card.Title>
                <Card.Text>
                    Likes to Code, Draw and play guitar! :D
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GitHubCard