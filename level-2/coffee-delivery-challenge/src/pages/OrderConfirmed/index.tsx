import { RegularText, TitleText } from "../../components/Typography"
import { OrderConfirmerContainer, OrderDetailsContainer } from "./styles"
import confirmOrderIllustration from "../../assets/confirmed-order.svg"
import { InfoWithIcon } from "../../components/InfoWithIcon"
import { Clock, CurrencyDollar, MapPin } from "phosphor-react"
import { useTheme } from "styled-components"
import { useLocation, useNavigate } from "react-router-dom"
import { OrderData } from "../Checkout"
import { paymentMethods } from "../Checkout/components/CheckoutForm/PaymentMethodOptions"
import { useEffect } from "react"

interface LocationType {
  state: OrderData
}

export function OrderConfirmedPage() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate("/")
    }
  }, [])

  if (!state) {
    return <></>
  }

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
                Entrega em{" "}
                <strong>
                  {state?.street}, {state?.number}
                </strong>
                <br />
                {state?.district} - {state?.city}, {state?.uf}
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
            iconBg={colors["yellow-dark"]}
            icon={<CurrencyDollar weight="fill" />}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmOrderIllustration} alt="" />
      </section>
    </OrderConfirmerContainer>
  )
}
