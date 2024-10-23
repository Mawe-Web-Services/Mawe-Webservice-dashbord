import logo from "../../assets/logo.png";
import {
  ClusterCell,
  ClusterHeaderRow,
  ClusterRow,
  ClusterTable,
} from "./styles";

const TableClusters = () => {
  return (
    <ClusterTable>
      <ClusterHeaderRow>
        <ClusterCell>Clusters</ClusterCell>
        <ClusterCell>Disponíveis</ClusterCell>
        <ClusterCell>Preço</ClusterCell>
        <ClusterCell></ClusterCell>
      </ClusterHeaderRow>

      <ClusterRow>
        <ClusterCell style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Brasil" className="cluster-image" width={50} />
          <h2 className="cluster-title">Brasil</h2>
        </ClusterCell>
        <ClusterCell>60 disponíveis</ClusterCell>
        <ClusterCell>Preço médio: $1</ClusterCell>
        <ClusterCell>
          <button>Reservar agora</button>
        </ClusterCell>
      </ClusterRow>

      <ClusterRow>
        <ClusterCell style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Brasil" className="cluster-image" width={50} />
          <h2 className="cluster-title">Brasil</h2>
        </ClusterCell>
        <ClusterCell>60 disponíveis</ClusterCell>
        <ClusterCell>Preço médio: $1</ClusterCell>
        <ClusterCell>
          <button>Reservar agora</button>
        </ClusterCell>
      </ClusterRow>
    </ClusterTable>
  );
};

const styles = `
      .table {
      }
    
      .header-row {
        display: flex;
        background-color: #f5f5f5;
        font-weight: bold;
      }
    
      .row {
        display: flex;
        border: 1px solid #e0e0e0;
        align-items: center;
        transition: all 0.2s ease;
      }
    
      .row:hover {
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
    
      .header-cell, .cell {
        flex: 1;
        padding: 16px;
      }
    
      .cluster-cell {
        display: flex;
        align-items: center;
        gap: 12px;
      }
    
      .cluster-image {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 4px;
      }
    
      .cluster-title {
        margin: 0;
        font-size: 18px;
        color: #333;
      }
    
      .reserve-button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s ease;
      }
    
      .reserve-button:hover {
        background-color: #0056b3;
      }
    `;

export default TableClusters;
