import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, ImageStyle, TextStyle, ViewStyle, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme/theme';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../theme/ThemeContext';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention';
  message: string;
  time: string;
  read: boolean;
}

const demoNotifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    message: 'alice.eth liked your post',
    time: '2m ago',
    read: false,
  },
  {
    id: '2',
    type: 'comment',
    message: 'bob.eth commented on your post',
    time: '5m ago',
    read: false,
  },
  {
    id: '3',
    type: 'follow',
    message: 'charlie.eth started following you',
    time: '10m ago',
    read: true,
  },
];

const HomeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [newPost, setNewPost] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(demoNotifications);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setShowNotifications(true)}
          style={styles.notificationButton}
        >
          <Icon
            name="notifications"
            type="material"
            color={theme.colors.text.primary}
            size={24}
          />
          {notifications.some(n => !n.read) && (
            <View style={[styles.badge, { backgroundColor: theme.colors.primary }]} />
          )}
        </TouchableOpacity>
      ),
    });
  }, [navigation, notifications]);

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

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const renderNotificationIcon = (type: Notification['type']) => {
    const icons = {
      like: 'favorite',
      comment: 'chat',
      follow: 'person-add',
      mention: 'alternate-email',
    };
    return (
      <Icon
        name={icons[type]}
        type="material"
        color={theme.colors.primary}
        size={24}
      />
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
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
      </ScrollView>

      <Modal
        visible={showNotifications}
        transparent
        animationType="slide"
        onRequestClose={() => setShowNotifications(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowNotifications(false)}
        >
          <View
            style={[
              styles.notificationsContainer,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View style={styles.notificationsHeader}>
              <Text
                style={[styles.notificationsTitle, { color: theme.colors.text.primary }]}
              >
                Notifications
              </Text>
              <TouchableOpacity onPress={() => setShowNotifications(false)}>
                <Icon
                  name="close"
                  type="material"
                  color={theme.colors.text.primary}
                  size={24}
                />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.notificationsList}>
              {notifications.map(notification => (
                <TouchableOpacity
                  key={notification.id}
                  style={[
                    styles.notificationItem,
                    !notification.read && {
                      backgroundColor: `${theme.colors.primary}10`,
                    },
                  ]}
                  onPress={() => markAsRead(notification.id)}
                >
                  <View style={styles.notificationIcon}>
                    {renderNotificationIcon(notification.type)}
                  </View>
                  <View style={styles.notificationContent}>
                    <Text
                      style={[
                        styles.notificationMessage,
                        { color: theme.colors.text.primary },
                      ]}
                    >
                      {notification.message}
                    </Text>
                    <Text
                      style={[
                        styles.notificationTime,
                        { color: theme.colors.text.secondary },
                      ]}
                    >
                      {notification.time}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  createPostCard: {
    marginTop: theme.spacing.md,
    marginHorizontal: theme.spacing.lg,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.surface,
    ...theme.shadow.small,
  },
  createPostHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  postInput: {
    flex: 1,
    marginLeft: theme.spacing.md,
    fontSize: theme.typography.body1.fontSize,
    color: theme.colors.text.primary,
    minHeight: 40,
    padding: theme.spacing.sm,
  },
  createPostActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: theme.spacing.sm,
  },
  feed: {
    flex: 1,
  },
  postCard: {
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.sm,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.surface,
    ...theme.shadow.small,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.background,
  },
  postInfo: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  name: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: '600',
    color: theme.colors.text.primary,
    marginBottom: 2,
  },
  username: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.text.secondary,
  },
  timeAgo: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.text.secondary,
    marginLeft: theme.spacing.sm,
  },
  postContent: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
    lineHeight: 20,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.sm,
    gap: theme.spacing.lg,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  actionText: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.text.secondary,
  },
  likedText: {
    color: theme.colors.error,
  },
  notificationButton: {
    padding: 8,
    marginRight: 8,
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  notificationsContainer: {
    marginTop: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  notificationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  notificationsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationsList: {
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  notificationIcon: {
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationMessage: {
    fontSize: 14,
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
  },
});

export default HomeScreen; 