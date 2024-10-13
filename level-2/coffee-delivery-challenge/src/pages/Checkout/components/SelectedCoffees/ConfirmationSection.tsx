import { Button } from "../../../../components/Button"
import { RegularText } from "../../../../components/Typography"
import { useCart } from "../../../../hooks/useCart"
import { formatMoney } from "../../../../utils/formatMonet"
import { ConfirmationSectionContainer } from "./styles"

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
  const formattedCartTotal = formatMoney(cartTotal)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s" color="subtitle">
          Entrega
        </RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight={700} color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight={700} color="subtitle" size="l">
          R$ {formattedCartTotal}
        </RegularText>
      </div>
      <Button disabled={cartQuantity <= 0} type="submit">
        Confirmar Pedido
      </Button>
    </ConfirmationSectionContainer>
  )
}
