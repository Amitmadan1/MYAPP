import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ item, onAddToCart, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)} style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    <TouchableOpacity style={styles.button} onPress={() => onAddToCart(item)}>
      <Text style={styles.buttonText}>Add to Cart</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 6,
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    height: 100,
    width: '100%',
  },
  title: {
    fontSize: 14,
    marginVertical: 8,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
});
