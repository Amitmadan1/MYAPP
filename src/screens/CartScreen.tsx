import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from './context/cartcontext';


const CartScreen = () => {
  const { cart, updateQuantity, getTotalPrice } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.title}</Text>
      <Text>${item.price.toFixed(2)} x {item.quantity}</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.control}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.control}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🛒 Your Cart</Text>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>Your cart is empty</Text>}
      />
      <Text style={styles.total}>Total: ${getTotalPrice().toFixed(2)}</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 15,
    padding: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
  },
  name: {
    fontWeight: '600',
  },
  controls: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  control: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'right',
  },
});
