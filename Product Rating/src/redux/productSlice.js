import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('/products.json');
  return await res.json();
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle'
  },
  reducers: {
    rateProduct: (state, action) => {
      const product = state.items.find(p => p.id === action.payload);
      if (product) {
        product.rating += 1;
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      });
  }
});

export const { rateProduct } = productSlice.actions;
export default productSlice.reducer;
