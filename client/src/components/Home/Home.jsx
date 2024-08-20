
import Promo from '../Promo'
import Card from '../Card'
import ProductList from '../Category'
import BestSellers from '../BestSellers'
import WomenCollection from '../WomenCollection'
import MensCollection from '../MensCollection'


const Home = () => {
  return (
    <>
        <Promo/>
        <ProductList/>
        <Card/>
        <WomenCollection/>
        <MensCollection/>
        <BestSellers/>
    </>
  )
}

export default Home;