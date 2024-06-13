import { useState } from 'react'
import './AuthModal.scss'
import AuthSearchModal from '../AuthSearchModal/AuthSearchModal'
import { VscDebugRestart } from 'react-icons/vsc'

const AuthModal = () => {
	const [isSearchModalOpen, setIsSearchModalOpen] = useState<Boolean>(false)

	return (
		<div className='AuthModal'>
			<h1 className='languageSettings'>Настройки языка</h1>
			<div
				onClick={() => setIsSearchModalOpen(!isSearchModalOpen)}
				className='block'
			>
				<button>Russ</button>
				<button>df</button>
			</div>
			{isSearchModalOpen && <AuthSearchModal />}
			<button className='restart'>
				<VscDebugRestart /> Обновить страницу
			</button>
		</div>
	)
}

export default AuthModal
