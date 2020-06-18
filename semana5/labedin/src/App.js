import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardEdu from './components/CardEdu/CardEdu';
import minhaFoto from './image/fotominha.jpg';
import meuEmail from './image/email.svg';
import meuPin from './image/pin.svg';
import cadastra from './image/cadastra.png';
import pavilhao from './image/pc.jpg';
import uniritter from './image/uniritter.jpg';
import labenu from './image/labenu.png';

function App() {
  return (
    <div className="App">
    
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaFoto} 
          nome="Hyago" 
          descricao={"Olá, meu nome é Hyago, e estou em busca de me encontrar profissionalmente. O medo que eu tenho de prejudicar as pessoas, dificulta meu caminho para que eu continue progredindo e evoluindo. Busco todos os dias melhorar essas coisas, sinto a evolução lenta, mas continua."}
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={meuEmail}
          strong={"E-mail:"}
          info={"vamodalheaheoo@gmail.com.br"}
        
        />
        
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={meuPin}
          strong={"Endereço"}
          info={"Rua Pipoquinha, 150, Alfonso Nogueira, Porto Alegre/RS"}
        
        />
        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={cadastra} 
          nome="Cadastra" 
          descricao="Trabalhei por três anos integrando um time responsável pelo atendimento da conta Vivo e Smiles. Fazendo parte do setor de criação, fui responsável pela criação e descobramento de banners digitais do google e nativos para as campanhas das respectivas marcas. Assim como cards de redes sociais e pequenas animações de vídeo." 
        />
        
        <CardGrande 
          imagem={pavilhao} 
          nome="Pavilhão Custom" 
          descricao="Estabelecimento focado na customização e manutenção de motocicletas. Trabalhei na linha de frente do setor comercial, dando início ao setor sozinho. Realizava o atendimento, pós-venda e organização da pauta da oficina (o que entrava para serviço no dia ou não)." 
        />
      </div>

      <div className="page-section-container">
        <h2>Educação</h2>
        <CardEdu 
          imagem={uniritter} 
          nomeCurso={"Publicidade e Propaganda"} 
          nomeInst={"Uniritter"}
          descricao={"Graduado em bacharel em Publicidade e Propaganda."}
          duracao={"2015 - 2019"}
        />
        
        <CardEdu 
          imagem={labenu} 
          nomeCurso={"Desenvolvedor Full Stack"} 
          nomeInst={"Labenu"}
          descricao={"Curso de desenvolvedor Full Stack com foco em front-end."}
          duracao={"2020 - cursando"}
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
