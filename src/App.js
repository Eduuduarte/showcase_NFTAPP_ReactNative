import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Você dono da loja de Niifty NFTs. Começe a vender e a crescer"
        description="Compre, exponha, colecione NFTs, troque e ganhe crypto. Mais de 25 milhões de pessoas utiliza o ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Interface inteligente feita para o usuário"
        description="O ProNef NFT marketplace proporciona ao usuário uma experiência UI. Desenvolvido pensando no usuário com fluência em UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="ProNef foi construido utilizando o Expo. Há espaços para as pessoas divulgarem e negociarem suas NFTs"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Criatividade na criação do APP"
        description="O App possui duas telas. A primeira tela mostra todas as NFTs, enquanto a segunda tela mostra os detalhes de uma NFT específica."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Feito com amor de {""}</p>
        <span className='bold'>Mistery</span>
      </div>
    </>
  );
}

export default App;
