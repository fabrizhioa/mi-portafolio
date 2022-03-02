import Header from "../components/header";
import styles from "../../styles/mobileGalery.module.css";
export default function mobileGalery() {
	return (
		<>
			<div className="contenedor">
				<section className={styles.section}>
					<Header title="Apps Moviles" />
					<p>Hola</p>
				</section>
			</div>
		</>
	);
}
