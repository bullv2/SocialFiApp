import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { theme } from '../theme/theme';
import { Card } from './Card';
import { Ionicons } from '@expo/vector-icons';
import { SocialChain, SocialChainPost } from '../types/social';

interface SocialChainListProps {
  chain: SocialChain;
  onPostPress: (post: SocialChainPost) => void;
}

export const SocialChainList: React.FC<SocialChainListProps> = ({ chain, onPostPress }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Card variant="filled" style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{chain.title}</Text>
        <Text style={styles.meta}>
          {chain.totalPosts} posts • {formatDate(chain.createdAt)}
        </Text>
      </View>

      <View style={styles.chainContainer}>
        {chain.posts.map((post, index) => (
          <React.Fragment key={post.id}>
            <TouchableOpacity
              style={styles.postItem}
              onPress={() => onPostPress(post)}
            >
              <View style={styles.postHeader}>
                <Text style={styles.postPosition}>#{post.chainPosition}</Text>
                <Text style={styles.postDate}>
                  {new Date(post.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
              </View>
              <Text style={styles.postContent} numberOfLines={2}>
                {post.content}
              </Text>
              <View style={styles.postStats}>
                <View style={styles.statItem}>
                  <Ionicons name="heart-outline" size={16} color={theme.colors.text.secondary} />
                  <Text style={styles.statText}>{post.likes}</Text>
                </View>
                <View style={styles.statItem}>
                  <Ionicons name="chatbubble-outline" size={16} color={theme.colors.text.secondary} />
                  <Text style={styles.statText}>{post.comments}</Text>
                </View>
                <View style={styles.statItem}>
                  <Ionicons name="repeat-outline" size={16} color={theme.colors.text.secondary} />
                  <Text style={styles.statText}>{post.reposts}</Text>
                </View>
              </View>
            </TouchableOpacity>
            {index < chain.posts.length - 1 && (
              <View style={styles.chainConnector}>
                <View style={styles.connectorLine} />
                <View style={styles.connectorDot} />
              </View>
            )}
          </React.Fragment>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.engagementText}>
          Total Engagement: {chain.totalEngagement}
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: theme.spacing.md,
    padding: theme.spacing.md,
  } as ViewStyle,
  header: {
    marginBottom: theme.spacing.md,
  } as ViewStyle,
  title: {
    ...theme.typography.h3,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  } as TextStyle,
  meta: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
  } as TextStyle,
  chainContainer: {
    marginVertical: theme.spacing.md,
  } as ViewStyle,
  postItem: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  } as ViewStyle,
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xs,
  } as ViewStyle,
  postPosition: {
    ...theme.typography.caption,
    color: theme.colors.primary,
    fontWeight: 'bold',
  } as TextStyle,
  postDate: {
    ...theme.typography.small,
    color: theme.colors.text.light,
  } as TextStyle,
  postContent: {
    ...theme.typography.body,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  } as TextStyle,
  postStats: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  } as ViewStyle,
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  } as ViewStyle,
  statText: {
    ...theme.typography.small,
    color: theme.colors.text.secondary,
  } as TextStyle,
  chainConnector: {
    alignItems: 'center',
    marginVertical: -theme.spacing.sm,
  } as ViewStyle,
  connectorLine: {
    width: 2,
    height: theme.spacing.md,
    backgroundColor: theme.colors.border,
  } as ViewStyle,
  connectorDot: {
    width: 8,
    height: 8,
    borderRadius: theme.borderRadius.round,
    backgroundColor: theme.colors.primary,
  } as ViewStyle,
  footer: {
    marginTop: theme.spacing.md,
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  } as ViewStyle,
  engagementText: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
    textAlign: 'center',
  } as TextStyle,
}); 