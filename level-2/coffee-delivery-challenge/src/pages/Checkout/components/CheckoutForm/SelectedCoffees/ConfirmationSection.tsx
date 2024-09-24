import { Button } from '../../../../../components/Button'
import { RegularText, TitleText } from '../../../../../components/Typography'
import { ConfirmationSectionContainer } from './styles'

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ 29,90</RegularText>
      </div>
      <div>
        <RegularText size="s" color="subtitle">
          Entrega
        </RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>
      <div>
        <RegularText weight={700} color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight={700} color="subtitle" size="l">
          R$ 33,50
        </RegularText>
      </div>
      <Button>Confirmar Pedido</Button>
    </ConfirmationSectionContainer>
  )
}
