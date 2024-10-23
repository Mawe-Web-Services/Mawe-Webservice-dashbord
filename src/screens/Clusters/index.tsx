import {
  Container,
  TotalClusters,
} from "./styles";

import TableClusters from "../../components/TableClusters";

const Clusters = () => {
  return (
    <Container>
      <h1>Preços e disponibilidades dos Clusters</h1>
      <p>
        Navegue pela lista de Clusters disponíveis junto com suas taxas por
        hora.
      </p>

      <main>
        <TotalClusters>
          <div>
            <div className="total-header">
              <span>Total Clusters</span>
              <span className="total-clusters">400</span>
            </div>
            <div className="total-percentage">
              <div className="available" />
              <span>50% Disponíveis</span>
            </div>
            <div className="total-percentage">
              <div className="used" />
              <span>50% Usados</span>
            </div>
          </div>
        </TotalClusters>
        <TableClusters />
      </main>
    </Container>
  );
};

export default Clusters;
