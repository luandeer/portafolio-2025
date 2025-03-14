export const Header = () => {
	return (
		<header className=" container max-w-[1000px] mx-auto  flex items-center justify-between sticky mb-10 py-6 text-white">
			<div>alexanderpreg.</div>
			<nav>
				<ul className="flex items-center gap-10 ">
					<li>proyectos</li>
					<li>guestbook</li>
				</ul>
			</nav>
			<div>
				<button>descargar cv</button>
			</div>
		</header>
	);
};
