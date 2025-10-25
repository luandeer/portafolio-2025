import { create } from 'zustand';
import type { Certificate } from '@/common/data/Certifications';

interface CertificateModalStore {
	selectedCertificate: Certificate | null;
	isOpen: boolean;
	openModal: (cert: Certificate) => void;
	closeModal: () => void;
}

export const useCertificateModalStore = create<CertificateModalStore>(
	(set) => ({
		selectedCertificate: null,
		isOpen: false,

		openModal: (cert) => set({ selectedCertificate: cert, isOpen: true }),
		closeModal: () => set({ selectedCertificate: null, isOpen: false }),
	})
);
