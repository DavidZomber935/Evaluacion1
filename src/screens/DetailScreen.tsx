import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../theme/styles';
import { Text } from 'react-native-paper';
import { ref, update, remove } from 'firebase/database';
import { dbRealTime } from '../configs/firebaseConfig';

export const DetailScreen = ({ route, navigation }) => {
    const { comment } = route.params;
    const [editedComment, setEditedComment] = useState(comment);

    const handleEditComment = async () => {
        const dbRef = ref(dbRealTime, 'comments/' + editedComment.id);
        await update(dbRef, { comment: editedComment.comment });
        navigation.goBack();
    };

    const handleDeleteComment = async () => {
        const dbRef = ref(dbRealTime, 'comments/' + editedComment.id);
        await remove(dbRef);
        navigation.goBack();
    };

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Detalle del Comentario</Text>
            <Text style={styles.detailText}>Email: {editedComment.email}</Text>
            <TextInput
                value={editedComment.comment}
                onChangeText={(text) => setEditedComment({ ...editedComment, comment: text })}
                multiline
                style={styles.input}
            />
            <Button mode="contained" title="Editar Comentario" onPress={handleEditComment} />
            <Button mode="contained" title="Eliminar Comentario" onPress={handleDeleteComment} />
        </View>
    );
};