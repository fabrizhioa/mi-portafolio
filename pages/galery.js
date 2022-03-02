import Header from "./components/header";
import styles from "../styles/Galery.module.css";
import Link from "next/link";
import Image from "next/image";
export default function galery(props) {
	return (
		<>
			<div className="contenedor">
				<section className={styles.section}>
					<Header title="Galeria" />
					<Link href="/galery/web">
						<a className={styles.btnWebGalery}>
							<Image
								src="/assets/imagesGalery/imageGalery1.svg"
								alt="image"
								height="300px"
								width="300px"
							/>
							<h3>Aplicaciones y Paginas Web</h3>
						</a>
					</Link>

					<Link href="/galery/mobile">
						<a className={styles.btnMobileGalery}>
							<Image
								src="/assets/imagesGalery/imageGalery2.svg"
								alt="image"
								width="300px"
								height="300px"
							/>
							<h3>Aplicaciones Mobiles</h3>
						</a>
					</Link>

					<Link href="/galery/desktop">
						<a className={styles.btnDesktopGalery}>
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
