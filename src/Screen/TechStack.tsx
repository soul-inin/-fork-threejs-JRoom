import { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "../Components/Header"
import Loader from "../Components/Loader"

const Container = styled.section`
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
`

const Sidebar = styled.div`
  width: 30%;
  height: 100%;
`

const MainArea = styled.main`
  position: relative;
  margin-top: 2%;
  margin-bottom: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  justify-items: center;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin-top: 10vh;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: white;
`

const CategoryTitle = styled.h2`
  font-size: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: white;
`

const CategoryLine = styled.div`
  width: 20vw;
  height: 5px;
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  margin-bottom: 20px;
`

const Category = styled.div``

const TechBoxArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 10px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`

interface techBoxTypes {
  imageSrc: string
}

const TechBox = styled.div<techBoxTypes>`
  box-shadow: 0 0 2px black;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-color: white;
  background-image: url(${(props) => props.imageSrc});
  background-size: 120px 120px;
  display: flex;
  color: white;
  font-size: 20px;
  font-weight: 700;
`

const Intro = styled.p`
  width: 100vw;
  text-align: center;
  color: white;
`

const TechStack = () => {
  const [isLoading, setLoading] = useState(true)
  console.log(isLoading)
  const nameBox = document.createElement("div")
  const showTechName = (e: React.MouseEvent, techName: string) => {
    nameBox.style.color = "white"
    nameBox.style.fontSize = "20px"
    nameBox.style.fontWeight = "700"
    nameBox.style.width = "100%"
    nameBox.style.height = "100%"
    nameBox.style.backgroundColor = "rgba(0,0,0,0.7)"
    nameBox.style.zIndex = "1"
    nameBox.style.display = "flex"
    nameBox.style.justifyContent = "center"
    nameBox.style.alignItems = "center"
    nameBox.style.textAlign = "center"
    nameBox.style.borderRadius = "10px"
    nameBox.id = "namebox"
    nameBox.innerHTML = techName

    console.dir(e.target)
    ;(e.target as HTMLImageElement).appendChild(nameBox)
  }

  const hideTechName = (e: React.MouseEvent) => {
    // 초기 로딩 시 namebox가 없을 경우 버그 방지
    const childElement = document.getElementById("namebox")
    if (childElement) {
      ;(e.target as HTMLImageElement).removeChild(nameBox)
    }
  }

  useEffect(() => {
    setLoading(false)
    console.log(isLoading)
  }, [])

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <Header title="Tech-Stack" />
      <Sidebar></Sidebar>
      <Title>사용 기술</Title>
      <Intro>최소 한 번은 프로젝트에 사용해 본 기술들의 목록입니다.</Intro>
      <MainArea>
        <Category>
          <CategoryTitle>언어</CategoryTitle>
          <CategoryLine></CategoryLine>
          <TechBoxArea>
            <TechBox
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "HTML")}
              imageSrc="/tech_logos/html.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "CSS")}
              imageSrc="/tech_logos/css.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "JavaScript")}
              imageSrc="/tech_logos/js.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Python")}
              imageSrc="/tech_logos/python.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "TypeScript")}
              imageSrc="/tech_logos/ts.png"
            />

          </TechBoxArea>
        </Category>
        <Category>
          <CategoryTitle>프로토콜</CategoryTitle>
          <CategoryLine></CategoryLine>
          <TechBoxArea>
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "HTTP")}
              imageSrc="/tech_logos/http.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Websocket")}
              imageSrc="/tech_logos/websocket.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "WebRTC")}
              imageSrc="/tech_logos/webrtc.png"
            />
          </TechBoxArea>
        </Category>

        <Category>
          <CategoryTitle>서버 / 프레임워크</CategoryTitle>
          <CategoryLine></CategoryLine>

          <TechBoxArea>
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Node.js")}
              imageSrc="/tech_logos/nodejs.png"
            />

            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Express.js")}
              imageSrc="/tech_logos/express.png"
            />

            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Nest.js")}
              imageSrc="/tech_logos/nest.png"
            />

            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Flask")}
              imageSrc="/tech_logos/flask.png"
            />
          </TechBoxArea>
        </Category>
        <Category>
          <CategoryTitle>웹프레임워크 / 라이브러리</CategoryTitle>
          <CategoryLine></CategoryLine>

          <TechBoxArea>
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "React.js")}
              imageSrc="/tech_logos/react.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Webpack")}
              imageSrc="/tech_logos/webpack.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Babel")}
              imageSrc="/tech_logos/babel.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Tailwind CSS")}
              imageSrc="/tech_logos/tailwind.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "GraphQL")}
              imageSrc="/tech_logos/graphql.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Socket.io")}
              imageSrc="/tech_logos/socket.io.png"
            />
          </TechBoxArea>
        </Category>
        <Category>
          <CategoryTitle>컴퓨터비전</CategoryTitle>
          <CategoryLine></CategoryLine>
          <TechBoxArea>
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "OpenCV")}
              imageSrc="/tech_logos/opencv.png"
            />
          </TechBoxArea>
        </Category>
        <Category>
          <CategoryTitle>WebGL 관련</CategoryTitle>
          <CategoryLine></CategoryLine>

          <TechBoxArea>
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Three.js")}
              imageSrc="/tech_logos/threejs.png"
            />
          </TechBoxArea>
        </Category>

        <Category>
          <CategoryTitle>웹 테스팅</CategoryTitle>
          <CategoryLine></CategoryLine>

          <TechBoxArea>
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Jest")}
              imageSrc="/tech_logos/jest.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "React-Testing-Library")}
              imageSrc="/tech_logos/react-testing-library.png"
            />
          </TechBoxArea>
        </Category>

        <Category>
          <CategoryTitle>데이터베이스 / ORM</CategoryTitle>
          <CategoryLine></CategoryLine>
          <TechBoxArea>
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "MongoDB")}
              imageSrc="/tech_logos/mongodb.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "MySQL")}
              imageSrc="/tech_logos/mysql.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "PostgreSQL")}
              imageSrc="/tech_logos/postgresql.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "TypeORM")}
              imageSrc="/tech_logos/typeorm.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Sequelize")}
              imageSrc="/tech_logos/sequelize.png"
            />
          </TechBoxArea>
        </Category>

        <Category>
          <CategoryTitle>클라우드 플랫폼</CategoryTitle>
          <CategoryLine></CategoryLine>

          <TechBoxArea>
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Heroku")}
              imageSrc="/tech_logos/heroku.jpg"
            />
          </TechBoxArea>
        </Category>

        <Category>
          <CategoryTitle>현재 배우고 있는 기술 목록입니다.</CategoryTitle>
          <CategoryLine></CategoryLine>

          <TechBoxArea>
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Kotlin")}
              imageSrc="/tech_logos/kotlin.jpeg"
            />
              <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "AWS")}
              imageSrc="/tech_logos/aws.jpg"
            />
              <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Unity")}
              imageSrc="/tech_logos/unity.jpg"
            />
              <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "TensorFlow")}
              imageSrc="/tech_logos/tensorflow.jpg"
            />
              <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "C")}
              imageSrc="/tech_logos/c.png"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "C#")}
              imageSrc="/tech_logos/c_sharp.jpg"
            />
            <TechBox
              onMouseLeave={(e: React.MouseEvent) => hideTechName(e)}
              onMouseEnter={(e: React.MouseEvent) => showTechName(e, "Go")}
              imageSrc="/tech_logos/go.png"
            />
          </TechBoxArea>
        </Category>
      </MainArea>
    </Container>
  )
}

export default TechStack
