import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { styles } from '../theme/styles';
import { ref, onValue } from 'firebase/database';
import { auth, dbRealTime } from '../configs/firebaseConfig';
import { NewCommentModal } from '../components/NewCommentModal';
import { useNavigation } from '@react-navigation/native';

interface Comment {
    id: string;
    email: string;
    comment: string;
}

export const HomeScreen = () => {
    const [showModalComment, setShowModalComment] = useState<boolean>(false);
    const [comments, setComments] = useState<Comment[]>([]);
    const navigation = useNavigation();

    const loadComments = () => {
        const dbRef = ref(dbRealTime, 'comments/' + auth.currentUser?.uid);
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            const loadedComments: Comment[] = [];
            if (data) {
                Object.keys(data).forEach(key => {
                    loadedComments.push({
                        id: key,
                        ...data[key]
                    });
                });
            }
            setComments(loadedComments);
        });
    }

    useEffect(() => {
        loadComments();
    }, []);

    return (
        <View style={styles.root}>
            <Text style={[styles.title, { marginTop: 10 }]}>Comentarios</Text>
            <Button mode="contained" onPress={() => setShowModalComment(true)}>Nuevo Comentario</Button>
            <FlatList
                data={comments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.commentContainer}>
                        <View style={styles.commentContent}>
                            <Text style={styles.commentEmail}>{item.email}</Text>
                            <Text style={styles.commentText}>{item.comment}</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', { comment: item })}>
                            <Text style={styles.arrow}>&#9654;</Text>
                        </TouchableOpacity>
                    </View>
                )}
                contentContainerStyle={{ flexGrow: 1, marginTop: 10 }}
            />
            <NewCommentModal 
                showModalComment={showModalComment} 
                setShowModalComment={setShowModalComment} 
                loadComments={loadComments}
            />
        </View>
    );
}