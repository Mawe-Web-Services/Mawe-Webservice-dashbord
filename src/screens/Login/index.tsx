import styles from "./styles.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Logar na sua conta</h2>
        <form>
          <label>
            Endereço de e-mail
            <input type="text" placeholder="Endereço de e-mail" />
          </label>
          <label>
            Senha
            <input type="text" placeholder="Senha" />
          </label>
          <button>Logar</button>
          <div></div>
          <span>Novo na MWS? <a href="#">Registrar</a></span>
        </form>
      </div>
      <a href="#">Esqueceu sua senha?</a>
    </div>
  );
};

export default Login;
