import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmerContainer, OrderDetailsContainer } from './styles'
import confirmOrderIllustration from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function OrderConfirmedPage() {
  const { colors } = useTheme()

  return (
    <OrderConfirmerContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido Confirmado</TitleText>
        <RegularText size="l">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            iconBg={colors.purple}
            icon={<MapPin weight="fill" />}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />
          <InfoWithIcon
            iconBg={colors.yellow}
            icon={<Clock weight="fill" />}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min </strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            iconBg={colors['yellow-dark']}
            icon={<CurrencyDollar weight="fill" />}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmOrderIllustration} alt="" />
      </section>
    </OrderConfirmerContainer>
  )
}
