import React, { useState } from 'react';
import { Modal, Portal, Text, IconButton, Divider, TextInput, Button } from 'react-native-paper';
import { styles } from '../theme/styles';
import { View } from 'react-native';
import { push, ref, set } from 'firebase/database';
import { auth, dbRealTime } from '../configs/firebaseConfig';

interface Props {
    showModalComment: boolean;
    setShowModalComment: (visible: boolean) => void;
    loadComments: () => void;
}

interface FormComment {
    email: string;
    comment: string;
}

export const NewCommentModal = ({ showModalComment, setShowModalComment, loadComments }: Props) => {
    const [formComment, setFormComment] = useState<FormComment>({
        email: auth.currentUser?.email || '',
        comment: ''
    });

    const handlerSetValues = (key: string, value: string) => {
        setFormComment({ ...formComment, [key]: value });
    }

    const handlerSaveComment = async () => {
        if (!formComment.comment) {
            return;
        }

        const dbRef = ref(dbRealTime, 'comments/' + auth.currentUser?.uid);
        const saveComment = push(dbRef);
        try {
            await set(saveComment, formComment);
            setFormComment({
                email: auth.currentUser?.email || '',
                comment: ''
            });
            loadComments(); // Reload comments after saving
        } catch (ex) {
            console.log(ex);
        }
        setShowModalComment(false);
    }

    return (
        <Portal>
            <Modal visible={showModalComment} contentContainerStyle={styles.modal}>
                <View style={styles.header}>
                    <Text style={styles.modalTitle}>Comentario</Text>
                    <View style={styles.iconEnd}>
                        <IconButton
                            icon='close-circle-outline'
                            size={28}
                            onPress={() => setShowModalComment(false)}
                        />
                    </View>
                </View>
                <Divider />
                <TextInput
                    label='Correo'
                    mode='outlined'
                    value={formComment.email}
                    disabled
                    style={styles.input}
                />
                <TextInput
                    label='Comentario'
                    mode='outlined'
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(value) => handlerSetValues('comment', value)}
                    value={formComment.comment}
                    style={styles.input}
                />
                <Button mode='contained' onPress={handlerSaveComment} style={styles.button}>Crear Comentario</Button>
            </Modal>
        </Portal>
    );
}