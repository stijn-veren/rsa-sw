import { useRecoilState } from 'recoil'
import { counterState } from './counterState'

export const DisplayCount = () => {
  const [numberOfClicks, setNumberOfClicks] = useRecoilState(counterState)

  return <h2>Number Of Clicks: {numberOfClicks}</h2>
}
