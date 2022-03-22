import React from 'react'
import { Categories, SortPopup, PizzaBlock,PizzaLoadingBlock } from '../components';  
import { useSelector, useDispatch } from 'react-redux';
import {setCategory} from '../redux/actions/filters'
import {fetchPizzas } from '../redux/actions/pizzas';
import { setSortBy } from './../redux/actions/filters';
import { setPizzaToCart } from '../redux/actions/card';






const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItem = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];


function Home() {

    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const cardItem = useSelector(({card}) => card.items)
    const { category, sortBy } = useSelector(({ filters }) => filters);

    React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCart = (obj) =>{
    dispatch(setPizzaToCart(obj))
    }
    return (
    <div className="container">
        <div className="content__top">
            <Categories 
                activeCategory ={category}
                onClickCategory={onSelectCategory}
                items = {categoryNames}/>
            <SortPopup 
                items =  {sortItem}
                activeSortType = {sortBy.type} 
                onClickSortType = {onSelectSortType}
            />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {
            isLoaded 
            ? items.map((obj) =><PizzaBlock 
                                    addCountPizza = { cardItem[obj.id] && cardItem[obj.id].item.length}
                                    key = {obj.id} 
                                    {...obj}
                                    onClickAddPizza = {handleAddPizzaToCart} 
                                    
                                />)
            : Array(10)
                .fill(0)
                .map((_,index) =>(<PizzaLoadingBlock key={index}/>))
            }
        </div>
    </div> 
    )
}

export default Home