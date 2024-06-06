
import React from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';
import { styles } from '../theme/styles';

// Definición de la interfaz para los productos
interface Product {
    name: string;
    price: number;
}

// Arreglo de productos
const products: Product[] = [
    { name: 'mouse', price: 50 },
    { name: 'laptop', price: 1500 },
    { name: 'teclado', price: 80 },
    { name: 'monitor', price: 120 }
];

export const HomeScreen = () => {
    const totalAmount = products.reduce((sum, product) => sum + product.price, 0);

    const renderItem: ListRenderItem<Product> = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>${item.price}</Text>
        </View>
    );

    return (
        <View style={styles.root}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total a pagar: ${totalAmount}</Text>
            </View>
        </View>
    );
};