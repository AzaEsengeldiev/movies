import { FaPlus } from 'react-icons/fa'
import './Auth.scss'
import { useState, useRef, useEffect } from 'react'
import AuthModal from '../../components/Modals/AuthModal/AuthModal'

const Auth = () => {
	const [isModalOpen, setIsModalOpen] = useState<Boolean>(false)
	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node) &&
				event.target !== document.querySelector('.Auth__languageButton')
        ) {
				setIsModalOpen(false)
			}
		}

		if (isModalOpen) {
			document.addEventListener('mousedown', handleOutsideClick)
		} else {
			document.removeEventListener('mousedown', handleOutsideClick)
		}

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick)
		}
	}, [isModalOpen])

	const toggleModal = () => setIsModalOpen(true)


	return (
		<div className='Auth'>
			<button className='Auth__button'>
				<FaPlus />
			</button>
			<div>
				<button className='Auth__languageButton' onClick={toggleModal}>
					RU
				</button>
				{isModalOpen && (
					<div className='Auth__modal' ref={modalRef}>
						<AuthModal />
					</div>
				)}
			</div>
			<button className='Auth__loginButton'>Войти</button>
			<button className='Auth__joinButton'>Присоединиться к TMDB</button>
		</div>
	)
}

export default Auth
