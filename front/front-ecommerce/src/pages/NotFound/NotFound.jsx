import BtnVolver from '../../components/BtnVolver/BtnVolver.jsx'
import { OrderSummaryCard } from '../../components/OrderSummary/styles.js'
import { CheckoutContainer, Main } from '../Checkout/styles.js'
import { ContainerNotFound, IconNotFound } from './styles.js'
import { FaRegFaceFrown } from "react-icons/fa6";

const NotFound = () => {
  return (
    <Main>
        <CheckoutContainer>
            <OrderSummaryCard>
                <ContainerNotFound>
                    <h2>ERROR</h2>
                    <h2>404</h2>
                    <p>Lo sentimos, esta página no funciona.</p>
                    <IconNotFound>
                        <FaRegFaceFrown />
                    </IconNotFound>
                    <div>
                        <BtnVolver />
                    </div>
                </ContainerNotFound>
            </OrderSummaryCard>
        </CheckoutContainer>
    </Main>
  )
}

export {NotFound}