import styled from "styled-components"
import ThreeScene  from "../Components/ThreeScene"

const Container = styled.section`
width: 100vw;
height: 100vh;
overflow: auto;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
opacity: 1;
`


const Exhibition:React.FC = () => {

return <Container>
       
      <ThreeScene/>
</Container>}

export default Exhibition