import LinkWrapper from 'components/LinkWrapper'
import { CloseCircle } from '@styled-icons/evaicons-solid/CloseCircle'
import * as S from './styles'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseCircle size={32} arial-label="close" />
      </LinkWrapper>
      <S.Heading>Nossas Viagens</S.Heading>
      <S.Body>
        <p>
          O Intuito dessa página é mostrar todos as viagens que eu e minha
          esposa fizemos pelo mundo
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
