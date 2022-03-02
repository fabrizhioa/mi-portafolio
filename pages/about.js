import Header from "./components/header";
import styles from "../styles/About.module.css";
import Link from "next/link";
import Image from "next/image";

const technologyImageWidth = 100;
const technologyImageHeight = 100;
export default function About(props) {
	return (
		<>
			<div className="contenedor">
				<section className={styles.section}>
					<Header title="Sobre mi" />
					<div className={styles.gridFullColumn}>
						<h1>Informacion personal</h1>
					</div>
					<div>
						<Image
							src="/assets/perfilImage.png"
							width={250}
							height={250}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>
					<div className={styles.contentBox}>
						<h3 style={{ textAlign: "center" }}>FABRIZHIO D. AL CHARITI B.</h3>
						<p style={{ textAlign: "center" }}>TSU EN INFORMATICA</p>
						<p style={{ textAlign: "center", fontSize: "0.8rem" }}>
							Venezolano ~ 23 a;os
						</p>

						<p>
							Resumen:
							<br />
							Soy un joven aficionado a la programacion y al desarrollo de
							aplicaciones. <br /> Tengo 6 a;os en el mundo de la programacion
							pero ejerso hace 4 a;os de forma independiente.
							<br />
							Tengo experiencia con equipos de trabajo y de forma individual y
							destaco por la facilitacion para resolver problemas de forma
							practica.
							<br />
							Soy honesto responsable y considerado. Pienso que el mundo esta
							cambiando y quiero ser parte de ese cambio un programa, una
							aplicacion o un pagina a la vez.
							<br />
							Actualmente manejo 9 lenguajes de programacion en un nivel
							intermedio ~ avanzado de los cuales destaco defino como principal:
							JAVASCRIPT
							<br />
							He trabajado en 4 empresas terminando 6 aplicaciones web de forma
							exitosa.
							<br />
							Si quieres conocer mas respecto a mi trabajo ve a la seccion de{" "}
							<Link href="/galery">Galeria</Link>.
						</p>
					</div>
				</section>
				<section className={styles.section2}>
					<h1 className={styles.section2Title}>Tecnologias conocidas</h1>
					<div>
						<Image
							src="/assets/logosAbout/javascriptLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>
					<div>
						<Image
							src="/assets/logosAbout/htmlLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>
					<div>
						<Image
							src="/assets/logosAbout/css3Logo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>
					<div>
						<Image
							src="/assets/logosAbout/nodejsLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>
					<div>
						<Image
							src="/assets/logosAbout/expressLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>
					<div>
						<Image
							src="/assets/logosAbout/reactLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>

					<div>
						<Image
							src="/assets/logosAbout/vueLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>

					<div>
						<Image
							src="/assets/logosAbout/mongodbLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>

					<div>
						<Image
							src="/assets/logosAbout/phpLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>
					<div>
						<Image
							src="/assets/logosAbout/electronjsLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>
					<div>
						<Image
							src="/assets/logosAbout/csharpLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>
					<div>
						<Image
							src="/assets/logosAbout/pythonLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>
					<div>
						<Image
							src="/assets/logosAbout/golangLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>
					<div>
						<Image
							src="/assets/logosAbout/mysqlLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>
					<div>
						<Image
							src="/assets/logosAbout/sqlsrvLogo.svg"
							width={technologyImageWidth}
							height={technologyImageHeight}
							alt="Profile Image"
							className={styles.perfilImage}
						/>
					</div>
				</section>
			</div>
		</>
	);
}
