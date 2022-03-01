import Header from "./components/header";
import styles from "../styles/Contact.module.css";

export default function galery(props) {
	return (
		<>
			<div className={styles.container}>
				<Header title="Contactos" />
				<p>Contacto</p>
			</div>
		</>
	);
}
