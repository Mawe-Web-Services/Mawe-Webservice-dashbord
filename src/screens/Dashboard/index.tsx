import logo from "../../assets/logo.png";
import { IoPersonCircle } from "react-icons/io5";
import {
  Container,
  CreateAppMenu,
  CreateFirstApp,
  DashboardHeader,
  PersonalContainer,
} from "./styles";
import { ButtonContainer } from "../../components/Button/styles";
import { IoPersonSharp } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader>
        <img src={logo} alt="logo" width={80} />
        <IoPersonCircle />
      </DashboardHeader>
      <CreateAppMenu>
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <PersonalContainer>
            <IoPersonSharp />
            <span>Pessoal</span>
          </PersonalContainer>
          <ButtonContainer variant="normal">Novo</ButtonContainer>
        </Container>
      </CreateAppMenu>
      <Container>
        <CreateFirstApp>
          <h3>Crie o seu primeiro App!</h3>
          <p>
            Os aplicativos e pipelines que você cria ou nos quais colabora
            aparecem aqui.
          </p>
          <ButtonContainer variant="fill">Criar um novo App</ButtonContainer>
        </CreateFirstApp>
      </Container>
    </div>
  );
};

export default Dashboard;
