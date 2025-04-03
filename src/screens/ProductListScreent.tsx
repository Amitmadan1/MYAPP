import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';

import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import { fetchProductsFromAPI } from '../services/productService';

import ProductCard from '@/components/Productcard';
import { CartContext } from './context/cartcontext';


const ITEMS_PER_PAGE = 6;

const ProductListScreen = ({ navigation }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    loadInitialProducts();
  }, []);

  const loadInitialProducts = () => {
    setLoading(true);
    fetchProductsFromAPI()
      .then((data) => {
        setAllProducts(data);
        setVisibleProducts(data.slice(0, ITEMS_PER_PAGE));
        setPage(1);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const loadMore = () => {
    if (loading) return;

    const nextPage = page + 1;
    const startIndex = (nextPage - 1) * ITEMS_PER_PAGE;
    const newItems = allProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    if (newItems.length === 0) return;

    setVisibleProducts((prev) => [...prev, ...newItems]);
    setPage(nextPage);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cartLink}>🛒 Go to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => signOut(auth)}>
  <Text style={{ color: 'red', textAlign: 'right' }}>Logout</Text>
</TouchableOpacity>

      {loading && page === 1 ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={visibleProducts}
          renderItem={({ item }) => (
            <ProductCard
              item={item}
              onAddToCart={addToCart}
              onPress={(product) => navigation.navigate('ProductDetail', { product })}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}
        />
      )}
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  cartLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'right',
    marginBottom: 10,
    marginRight: 10,
  },
});
