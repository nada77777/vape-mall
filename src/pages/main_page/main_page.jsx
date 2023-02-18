import LiquidItems from '../../components/liquid_items/liquid_items';


const MainPage = (props) => {

    return (
        <section className=' rounded-t-lg bg-white p-7'>
            <h1 className=' font-bold text-xl text-main-text text-left pb-7'>Most Popular</h1>
            <LiquidItems dataType='mainItems' />
            <h1 className=' font-bold text-xl text-main-text text-left py-7'>Recommend</h1>
            <LiquidItems dataType='recommend' />
        </section>
    );
};

export default MainPage;