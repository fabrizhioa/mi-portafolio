import Header from "./components/header";
import styles from "../styles/Galery.module.css";
import Link from "next/link";
import Image from "next/image";
export default function galery(props) {
	return (
		<>
			<div className={styles.container}>
				<Header title="Galeria" />
				<section className={styles.sectionGalery}>
					<Link href="./web">
						<a
							className={styles.sectionFullColumnGrid}
							style={{
								backgroundColor: "antiquewhite",
								padding: ".3rem",
								textAlign: "center",
							}}
						>
							<Image
								src="/assets/imagesGalery/imageGalery1.svg"
								alt="image"
								height="300px"
								width="300px"
							/>
							<h3>Aplicaciones y Paginas Web</h3>
						</a>
					</Link>

					<Link href="./desktop">
						<a
							style={{
								backgroundColor: "olivedrab",
								padding: ".3rem",
								textAlign: "center",
							}}
						>
							<Image
								src="/assets/imagesGalery/imageGalery2.svg"
								alt="image"
								width="300px"
								height="300px"
							/>
							<h3>Aplicaciones Mobiles</h3>
						</a>
					</Link>

					<Link href="./mobile">
						<a
							style={{
								backgroundColor: "skyblue",
								padding: ".3rem",
								textAlign: "center",
							}}
						>
							<Image
								src="/assets/imagesGalery/imageGalery3.svg"
								alt="image"
								width="300px"
								height="300px"
							/>
							<h3>Aplicaciones de Escritorio</h3>
						</a>
					</Link>
				</section>
			</div>
		</>
	);
}
