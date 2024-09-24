import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { CheckoutFormContainer, FormSectionContainer } from './styles'
import { useTheme } from 'styled-components'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'

export function CheckoutForm() {
  const { colors } = useTheme()

  return (
    <CheckoutFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors['yellow-dark']} />}
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors.purple} />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CheckoutFormContainer>
  )
}
