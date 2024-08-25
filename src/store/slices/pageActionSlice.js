import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedHomeProducts: 'newArrivals',
    favourite: [],
    basket: [],
    basketCounter: [],
    isOpenMenu: false,
    isPriceFilterOpen: false,
    isRatingFilterOpen: false,
    isCategoryFilterOpen: false,
    selectCategory: ''
}

const pageActionSlice = createSlice({
    name: 'pageActionSlice',
    initialState,
    reducers: {
        selectHomeProducts: (state, action) => {
            state.selectedHomeProducts = action.payload
        },
        favouriteData: (state, action) => {
            if (state.favourite.find(findItem => findItem.id === action.payload.id)) {
                state.favourite = state.favourite.filter(filterItem => filterItem.id !== action.payload.id)
            }
            else {
                state.favourite = [...state.favourite, action.payload]
            }
        },
        toggleMenu: (state) => {
            state.isOpenMenu = !state.isOpenMenu
        },
        togglePrice: (state) => {
            state.isPriceFilterOpen = !state.isPriceFilterOpen
        },
        toggleRating: (state) => {
            state.isRatingFilterOpen = !state.isRatingFilterOpen
        },
        toggleCategory: (state) => {
            state.isCategoryFilterOpen = !state.isCategoryFilterOpen
        },
        basketCounterData: (state, action) => {
            state.basketCounter = action.payload.map(item => 0)
        },
        basketData: (state, action) => {
            state.basketCounter = state.basketCounter.map((item, index) => {
                if (index === action.payload) return item += 1
                else return item
            })
        },
        basketDataMinus: (state, action) => {
            state.basketCounter = state.basketCounter.map((item, index) => {
                if (index === action.payload && item > 1) return item -= 1
                else return item
            })
        },
        basketDeleteData: (state, action) => {
            state.basketCounter = state.basketCounter.map((item, index) => {
                if (index === action.payload) return 0
                else return item
            })
        },
        setSelectCategory: (state, action) => {
            state.selectCategory = action.payload
        }
    }
})

export const {
    selectHomeProducts
    , favouriteData
    , toggleMenu
    , togglePrice
    , toggleCategory
    , toggleRating
    , basketData
    , basketCounterData
    , basket
    , basketDataMinus
    , basketDeleteData
    , setSelectCategory
} = pageActionSlice.actions
export default pageActionSlice.reducer