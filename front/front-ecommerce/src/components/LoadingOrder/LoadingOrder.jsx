import Loading from '../Loading/Loading.jsx'
import { ContainerLoadingOrder } from './LoadignOrder.js'

const LoadingOrder = () => {
  return (
    <ContainerLoadingOrder>
        <h2>Procesando su compra...</h2>
        <Loading></Loading>
    </ContainerLoadingOrder>
  )
}

export default LoadingOrder