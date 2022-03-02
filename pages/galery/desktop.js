import Header from "../components/header";
import styles from "../../styles/desktopGalery.module.css";
export default function desktopGalery() {
	return (
		<>
			<div className="contenedor">
				<section className={styles.section}>
					<Header title="App Escritorio" />
					<p>Hola</p>
				</section>
			</div>
		</>
	);
}
