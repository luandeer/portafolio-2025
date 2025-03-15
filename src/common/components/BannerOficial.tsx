'use client';

import { useEffect, useRef } from 'react';
import styles from './mario-banner.module.css';

export default function MarioBanner() {
	const luigiRef = useRef<HTMLDivElement>(null);
	const goombaRef = useRef<HTMLDivElement>(null);

	// Smooth character movement with requestAnimationFrame
	useEffect(() => {
		let luigiPosition = -10;
		let goombaPosition = 110;
		let animationFrameId: number;
		let lastTimestamp: number;

		const moveCharacters = (timestamp: number) => {
			if (!lastTimestamp) lastTimestamp = timestamp;
			const elapsed = timestamp - lastTimestamp;

			// Update positions based on elapsed time for consistent speed
			luigiPosition += elapsed * 0.012;
			goombaPosition -= elapsed * 0.008;

			// Reset positions when they go off-screen
			if (luigiPosition > 100) {
				luigiPosition = -10;
			}

			if (goombaPosition < -10) {
				goombaPosition = 110;
			}

			// Apply positions with smooth easing
			if (luigiRef.current) {
				luigiRef.current.style.left = `${luigiPosition}%`;

				// Change sprite direction based on movement
				const walkCycle = Math.floor(timestamp / 250) % 2;
				luigiRef.current.dataset.walkCycle = walkCycle.toString();
			}

			if (goombaRef.current) {
				goombaRef.current.style.left = `${goombaPosition}%`;

				// Goomba animation cycle
				const goombaCycle = Math.floor(timestamp / 300) % 2;
				goombaRef.current.dataset.cycle = goombaCycle.toString();
			}

			lastTimestamp = timestamp;
			animationFrameId = requestAnimationFrame(moveCharacters);
		};

		animationFrameId = requestAnimationFrame(moveCharacters);

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<div className={styles.banner}>
			{/* Sky with clouds */}
			<div className={styles.sky}>
				<div className={`${styles.cloud} ${styles.cloud1}`}></div>
				<div className={`${styles.cloud} ${styles.cloud2}`}></div>
				<div className={`${styles.cloud} ${styles.cloud3}`}></div>
			</div>

			{/* Hills background */}
			<div className={styles.hills}>
				<div
					className={styles.hill}
					style={{ left: '20%', height: '80px' }}
				></div>
				<div
					className={styles.hill}
					style={{ left: '50%', height: '70px' }}
				></div>
				<div
					className={styles.hill}
					style={{ left: '80%', height: '60px' }}
				></div>
			</div>

			{/* Question blocks */}
			<div className={styles.blocksContainer}>
				<div className={`${styles.questionBlock} ${styles.block1}`}>?</div>
				<div className={`${styles.questionBlock} ${styles.block2}`}>?</div>
				<div className={`${styles.questionBlock} ${styles.block3}`}>?</div>
			</div>

			{/* Pipes */}
			<div className={styles.pipe} style={{ left: '25%', height: '80px' }}>
				<div className={styles.pipeTop}></div>
			</div>
			<div className={styles.pipe} style={{ right: '25%', height: '50px' }}>
				<div className={styles.pipeTop}></div>
			</div>

			{/* Ground - fixed symmetry */}
			<div className={styles.ground}>
				{[...Array(24)].map((_, i) => (
					<div key={`brick-${i}`} className={styles.brick}></div>
				))}
			</div>

			{/* Coins */}
			<div className={`${styles.coin} ${styles.coin1}`}></div>
			<div className={`${styles.coin} ${styles.coin2}`}></div>
			<div className={`${styles.coin} ${styles.coin3}`}></div>
			<div className={`${styles.coin} ${styles.coin4}`}></div>
			<div className={`${styles.coin} ${styles.coin5}`}></div>

			{/* Toad character - stationary */}
			<div className={styles.toad}>
				<div className={styles.toadCap}>
					<div className={styles.toadCapDot}></div>
					<div className={styles.toadCapDot} style={{ right: '8px' }}></div>
					<div
						className={styles.toadCapDot}
						style={{ top: '8px', left: '16px' }}
					></div>
				</div>
				<div className={styles.toadFace}></div>
				<div className={styles.toadBody}></div>
				<div className={styles.toadLegLeft}></div>
				<div className={styles.toadLegRight}></div>
				<div className={styles.toadArmLeft}></div>
				<div className={styles.toadArmRight}></div>
			</div>

			{/* Luigi character - improved */}
			<div ref={luigiRef} className={styles.luigi} data-walk-cycle="0">
				<div className={styles.luigiHead}></div>
				<div className={styles.luigiCap}></div>
				<div className={styles.luigiMustache}></div>
				<div className={styles.luigiBody}></div>
				<div className={styles.luigiOverall}></div>
				<div className={styles.luigiArmLeft}></div>
				<div className={styles.luigiArmRight}></div>
				<div className={styles.luigiLegLeft}></div>
				<div className={styles.luigiLegRight}></div>
			</div>

			{/* Goomba character - improved */}
			<div ref={goombaRef} className={styles.goomba} data-cycle="0">
				<div className={styles.goombaBody}></div>
				<div className={styles.goombaFace}></div>
				<div className={styles.goombaEyebrowLeft}></div>
				<div className={styles.goombaEyebrowRight}></div>
				<div className={styles.goombaLegLeft}></div>
				<div className={styles.goombaLegRight}></div>
			</div>

			{/* Yoshi character - improved */}
			<div className={styles.yoshi}>
				<div className={styles.yoshiHead}></div>
				<div className={styles.yoshiNose}></div>
				<div className={styles.yoshiEye}></div>
				<div className={styles.yoshiBody}></div>
				<div className={styles.yoshiSaddle}></div>
				<div className={styles.yoshiShell}></div>
				<div className={styles.yoshiLegLeft}></div>
				<div className={styles.yoshiLegRight}></div>
				<div className={styles.yoshiArmLeft}></div>
			</div>

			{/* Welcome Text */}
			{/* <div className={styles.welcomeText}>
				<h1>¡Bienvenidos a este espacio!</h1>
			</div> */}
		</div>
	);
}
