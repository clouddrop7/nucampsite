import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsiteDirectoryPage = () => {

    return (
        <Container>
            <SubHeader 
                current='Home'
            />
            <CampsitesList />
        </Container>
    )
}

export default CampsiteDirectoryPage;