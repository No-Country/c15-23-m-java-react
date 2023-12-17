import { RotatingLines } from  'react-loader-spinner'


const Loading = () => {
  return (
    <RotatingLines
        strokeColor="rgb(86, 201, 160)"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
    />
  )
}

export default Loading