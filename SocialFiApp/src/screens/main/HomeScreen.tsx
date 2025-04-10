import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme/theme';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const [newPost, setNewPost] = useState('');

  const demoPosts = [
    {
      id: 1,
      username: 'johndoe',
      name: 'John Doe',
      content: 'Just minted my first NFT! 🎨 #Web3 #NFT',
      likes: 42,
      comments: 5,
      timeAgo: '2h ago',
      liked: false,
    },
    {
      id: 2,
      username: 'cryptogirl',
      name: 'Crypto Girl',
      content: 'Excited to be part of this amazing community! 🚀 #SocialFi',
      likes: 128,
      comments: 12,
      timeAgo: '4h ago',
      liked: true,
    },
    {
      id: 3,
      username: 'blockchain_dev',
      name: 'Blockchain Dev',
      content: 'Working on some cool DeFi integrations. Stay tuned! 💻 #DeFi #Development',
      likes: 89,
      comments: 7,
      timeAgo: '6h ago',
      liked: false,
    },
  ];

  const handleLike = (postId: number) => {
    // Implement like functionality
    console.log('Liked post:', postId);
  };

  const handleComment = (postId: number) => {
    // Implement comment functionality
    console.log('Comment on post:', postId);
  };

  const handleShare = (postId: number) => {
    // Implement share functionality
    console.log('Share post:', postId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SocialFi Feed</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color={theme.colors.text.primary} />
        </TouchableOpacity>
      </View>

      <Card variant="filled" style={styles.createPostCard}>
        <View style={styles.createPostHeader}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?u=currentuser' }}
            style={styles.avatar}
          />
          <TextInput
            style={styles.postInput}
            placeholder="What's on your mind?"
            value={newPost}
            onChangeText={setNewPost}
            multiline
          />
        </View>
        <View style={styles.createPostActions}>
          <Button
            title="Post"
            onPress={() => console.log('Post')}
            variant="primary"
            size="small"
            disabled={!newPost.trim()}
          />
        </View>
      </Card>

      <ScrollView style={styles.feed}>
        {demoPosts.map((post) => (
          <Card key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image
                source={{ uri: `https://i.pravatar.cc/150?u=${post.username}` }}
                style={styles.avatar}
              />
              <View style={styles.postInfo}>
                <Text style={styles.name}>{post.name}</Text>
                <Text style={styles.username}>@{post.username}</Text>
              </View>
              <Text style={styles.timeAgo}>{post.timeAgo}</Text>
            </View>
            <Text style={styles.postContent}>{post.content}</Text>
            <View style={styles.postActions}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleLike(post.id)}
              >
                <Ionicons
                  name={post.liked ? 'heart' : 'heart-outline'}
                  size={20}
                  color={post.liked ? theme.colors.error : theme.colors.text.secondary}
                />
                <Text style={[styles.actionText, post.liked && styles.likedText]}>
                  {post.likes}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleComment(post.id)}
              >
                <Ionicons name="chatbubble-outline" size={20} color={theme.colors.text.secondary} />
                <Text style={styles.actionText}>{post.comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleShare(post.id)}
              >
                <Ionicons name="share-outline" size={20} color={theme.colors.text.secondary} />
              </TouchableOpacity>
            </View>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  } as ViewStyle,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    ...theme.shadows.sm,
  } as ViewStyle,
  headerTitle: {
    ...theme.typography.h2,
    color: theme.colors.text.primary,
  } as TextStyle,
  createPostCard: {
    margin: theme.spacing.md,
    padding: theme.spacing.md,
  } as ViewStyle,
  createPostHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  } as ViewStyle,
  postInput: {
    flex: 1,
    marginLeft: theme.spacing.md,
    ...theme.typography.body,
    color: theme.colors.text.primary,
  } as TextStyle,
  createPostActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  } as ViewStyle,
  feed: {
    flex: 1,
  } as ViewStyle,
  postCard: {
    margin: theme.spacing.md,
    padding: theme.spacing.md,
  } as ViewStyle,
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  } as ViewStyle,
  avatar: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.round,
  } as ImageStyle,
  postInfo: {
    flex: 1,
    marginLeft: theme.spacing.md,
  } as ViewStyle,
  name: {
    ...theme.typography.body,
    fontWeight: '600' as const,
    color: theme.colors.text.primary,
  } as TextStyle,
  username: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
  } as TextStyle,
  timeAgo: {
    ...theme.typography.small,
    color: theme.colors.text.light,
  } as TextStyle,
  postContent: {
    ...theme.typography.body,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
    lineHeight: 24,
  } as TextStyle,
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: theme.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  } as ViewStyle,
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.xs,
  } as ViewStyle,
  actionText: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
    marginLeft: theme.spacing.xs,
  } as TextStyle,
  likedText: {
    color: theme.colors.error,
  } as TextStyle,
});

export default HomeScreen; 