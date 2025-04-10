import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ViewStyle, TextStyle, ImageStyle, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme/theme';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Ionicons } from '@expo/vector-icons';

const NotificationsScreen = () => {
  const notifications = [
    {
      id: 1,
      type: 'like',
      username: 'cryptogirl',
      name: 'Crypto Girl',
      content: 'liked your post',
      postPreview: 'Just shared my thoughts on Web3...',
      timeAgo: '5m ago',
      read: false,
    },
    {
      id: 2,
      type: 'comment',
      username: 'blockchain_dev',
      name: 'Blockchain Dev',
      content: 'commented on your post',
      comment: 'Great insights! I totally agree with your points.',
      timeAgo: '1h ago',
      read: false,
    },
    {
      id: 3,
      type: 'follow',
      username: 'web3artist',
      name: 'Web3 Artist',
      content: 'started following you',
      timeAgo: '3h ago',
      read: true,
    },
    {
      id: 4,
      type: 'mention',
      username: 'defi_expert',
      name: 'DeFi Expert',
      content: 'mentioned you in a post',
      postPreview: 'Check out what @web3enthusiast said about...',
      timeAgo: '1d ago',
      read: true,
    },
  ];

  const handleMarkAllAsRead = () => {
    console.log('Mark all as read');
  };

  const handleNotificationPress = (id: number) => {
    console.log('Notification pressed:', id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <Button
          title="Mark all as read"
          onPress={handleMarkAllAsRead}
          variant="outline"
          size="small"
        />
      </View>

      <ScrollView>
        {notifications.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            onPress={() => handleNotificationPress(notification.id)}
            activeOpacity={0.8}
          >
            <Card
              variant="filled"
              style={{
                ...styles.notificationCard,
                ...(!notification.read ? styles.unreadNotification : {})
              }}
            >
              <View style={styles.notificationContent}>
                <Image
                  source={{ uri: `https://i.pravatar.cc/150?u=${notification.username}` }}
                  style={styles.avatar}
                />
                <View style={styles.notificationTextContainer}>
                  <Text style={styles.notificationText}>
                    <Text style={styles.name}>{notification.name}</Text>{' '}
                    {notification.content}
                  </Text>
                  {notification.postPreview && (
                    <Text style={styles.previewText}>{notification.postPreview}</Text>
                  )}
                  {notification.comment && (
                    <View style={styles.commentContainer}>
                      <Text style={styles.commentText}>{notification.comment}</Text>
                    </View>
                  )}
                  <Text style={styles.timeAgo}>{notification.timeAgo}</Text>
                </View>
                {!notification.read && (
                  <View style={styles.unreadIndicator} />
                )}
              </View>
            </Card>
          </TouchableOpacity>
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
  notificationCard: {
    margin: theme.spacing.md,
    padding: theme.spacing.md,
  } as ViewStyle,
  unreadNotification: {
    backgroundColor: theme.colors.background,
  } as ViewStyle,
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  } as ViewStyle,
  avatar: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.round,
    marginRight: theme.spacing.md,
  } as ImageStyle,
  notificationTextContainer: {
    flex: 1,
  } as ViewStyle,
  notificationText: {
    ...theme.typography.body,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  } as TextStyle,
  name: {
    fontWeight: '600',
  } as TextStyle,
  previewText: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xs,
  } as TextStyle,
  commentContainer: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.xs,
  } as ViewStyle,
  commentText: {
    ...theme.typography.caption,
    color: theme.colors.text.primary,
  } as TextStyle,
  timeAgo: {
    ...theme.typography.small,
    color: theme.colors.text.light,
  } as TextStyle,
  unreadIndicator: {
    width: 8,
    height: 8,
    borderRadius: theme.borderRadius.round,
    backgroundColor: theme.colors.primary,
    marginLeft: theme.spacing.sm,
  } as ViewStyle,
});

export default NotificationsScreen; 