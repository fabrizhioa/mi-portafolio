import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "./components/header";

export default function Home() {
	return (
		<div className={styles.container}>
			<section className={styles.section}>
				<Header title="Inicio" />
				<div>
					<Image
						src="/assets/perfilImage.png"
						alt="Imagen de perfil"
						width={150}
						height={150}
					/>
					<h1 className={styles.titleSection}>Fabrizhio Al chariti</h1>

					<cite>
						&quot;El mundo esta cambiando y yo quiero ser parte de ese cambio.
						<br />
						Un programa a la vez.&quot;
					</cite>
				</div>
				<div>
					<Image
						src="/assets/imagesHome/image1.svg"
						alt="imagen 1"
						width={350}
						height={350}
					/>
				</div>
			</section>
			<section className={styles.section2}>
				<div className={styles.fullSpaceGrid}>
					<h1>Actitudes</h1>
				</div>
				<div>
					<Image
						src="/assets/imagesHome/image2.svg"
						alt="imagen 1"
						width={250}
						height={250}
					/>
					<p>Rapido desembolbimiento</p>
				</div>
				<div>
					<Image
						src="/assets/imagesHome/image3.svg"
						alt="imagen 1"
						width={250}
						height={250}
					/>
					<p>Colaborador</p>
				</div>
				<div>
					<Image
						src="/assets/imagesHome/image4.svg"
						alt="imagen 1"
						width={250}
						height={250}
					/>
					<p>Capacidad de obtener soluciones</p>
				</div>
				<div>
					<Image
						src="/assets/imagesHome/image5.svg"
						alt="imagen 1"
						width={250}
						height={250}
					/>
					<p>Intuitivo</p>
				</div>
			</section>
			<section className={styles.section3}>
				<div>
					<Image
						src="/assets/imagesHome/image6.svg"
						alt="imagen 1"
						width={350}
						height={350}
					/>
				</div>
				<div>
					<h2>Lenguajes de programacion y tecnologias conocidas</h2>
					<ul style={{ textAlign: "justify", display: "block" }}>
						<li>
							<h3>JAVASCRIPT</h3>
							<ul>
								<li>NODE JS</li>
								<li>VUE JS</li>
								<li>REACT JS</li>
								<li>EXPRESS JS</li>
								<li>REACT NATIVE</li>
								<li>MONGO DB</li>
							</ul>
						</li>
						<li>
							<h3>PHP</h3>
						</li>
						<li>
							<h3>C#</h3>
						</li>
						<li>
							<h3>PYTHON</h3>
						</li>
						<li>
							<h3>GOLANG</h3>
						</li>
						<li>
							<h3>HTML5</h3>
						</li>
						<li>
							<h3>CSS3</h3>
						</li>
						<li>
							<h3>MYSQL</h3>
						</li>
						<li>
							<h3>SQLSERVER</h3>
						</li>
					</ul>
					<div style={{ display: "block" }}>
						<Link href="/about">
							<a
								style={{
									display: "inline-block",
									backgroundColor: "#ffffff",
									color: "orangered",
									padding: "0.6rem",
									borderRadius: ".4rem",
								}}
							>
								Conocer mas
							</a>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
