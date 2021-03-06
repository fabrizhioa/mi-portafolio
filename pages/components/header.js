import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Header(props) {
	return (
		<>
			<Head>
				<title>Fabrizhio A. ~ {props.title}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="header">
				<div></div>
				<div className="nav">
					<Link href="/">
						<a className="navigationLink">Inicio</a>
					</Link>
					<Link href="/about">
						<a className="navigationLink">Sobre mi</a>
					</Link>
					<Link href="/galery/">
						<a className="navigationLink">Galeria</a>
					</Link>

					<Link href="/contact">
						<a className="navigationLink">Contactame</a>
					</Link>
				</div>
			</header>
		</>
	);
}
