import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedHomeProducts: 'newArrivals',
    favourite: [],
    isOpenMenu: false ,
    isPriceFilterOpen: false,
    isRatingFilterOpen: false,
    isCategoryFilterOpen: false,
}

const pageActionSlice = createSlice({
    name: 'pageActionSlice',
    initialState,
    reducers: {
        selectHomeProducts: (state, action) => {
            state.selectedHomeProducts = action.payload
        },
        favouriteData: (state, action) => {
            if(state.favourite.find(findItem => findItem.id === action.payload.id)){
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
        }
    }
})

export const { selectHomeProducts, favouriteData, toggleMenu
             , togglePrice 
             , toggleCategory
             , toggleRating
             } = pageActionSlice.actions
export default pageActionSlice.reducer